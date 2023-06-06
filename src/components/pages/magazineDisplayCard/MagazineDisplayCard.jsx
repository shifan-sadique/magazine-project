import React, { useEffect, useState } from 'react';
import Color from 'color';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase';
import { Document, Page, pdfjs } from 'react-pdf';
import Modal from '@material-ui/core/Modal';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const useGridStyles = makeStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.up('md')]: {
      justifyContent: 'center',
    },
  },
}));

const useStyles = makeStyles(() => ({
  actionArea: {
    borderRadius: 16,
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  card: ({ color }) => ({
    minWidth: 256,
    borderRadius: 16,
    boxShadow: 'none',
    '&:hover': {
      boxShadow: `0 6px 12px 0 ${Color(color)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },
  }),
  content: ({ color }) => {
    return {
      backgroundColor: color,
      padding: '1rem 1.5rem 1.5rem',
    };
  },
  title: {
    fontSize: '2rem',
    color: '#fff',
    textTransform: 'uppercase',
  },
  subtitle: {
    fontFamily: 'Montserrat',
    color: '#fff',
    opacity: 0.87,
    marginTop: '2rem',
    fontWeight: 500,
    fontSize: 14,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flipbookContainer: {
    width: '80%',
    height: '80%',
    '& .page': {
      width: '100%',
      height: '100%',
    },
  },
}));

const CustomCard = ({ classes, image, title, subtitle, onClick }) => {
  const mediaStyles = useFourThreeCardMediaStyles();
  return (
    <CardActionArea className={classes.actionArea} onClick={onClick}>
      <Card className={classes.card}>
        <CardMedia classes={mediaStyles} image={image} />
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant="h2">
            {title}
          </Typography>
          <Typography className={classes.subtitle}>{subtitle}</Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

const MagazineDisplay = () => {
  const gridStyles = useGridStyles();
  const styles = useStyles({ color: '#4da3ff' });

  const [magazines, setMagazines] = useState([]);
  const [selectedMagazine, setSelectedMagazine] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const fetchMagazines = async () => {
      const querySnapshot = await getDocs(collection(db, 'magazines'));
      const magazinesData = querySnapshot.docs.map((doc) => doc.data());
      setMagazines(magazinesData);
    };

    fetchMagazines();
  }, []);

  const getFirstPageImage = async (fileUrl) => {
    try {
      const response = await fetch(fileUrl);
      const buffer = await response.arrayBuffer();
      const pdf = await pdfjs.getDocument({ data: buffer }).promise;
      const page = await pdf.getPage(1);
      const viewport = page.getViewport({ scale: 1 });
      const canvas = document.createElement('canvas');
      const canvasContext = canvas.getContext('2d');
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      await page.render({ canvasContext, viewport }).promise;
      return canvas.toDataURL();
    } catch (error) {
      console.error('Error rendering PDF:', error);
      return null;
    }
  };

  useEffect(() => {
    const fetchMagazinesWithImages = async () => {
      const magazinesWithImages = await Promise.all(
        magazines.map(async (magazine) => {
          const image = await getFirstPageImage(magazine.fileUrl);
          return { ...magazine, image };
        })
      );
      setMagazines(magazinesWithImages);
    };

    fetchMagazinesWithImages();
  }, [magazines]);

  const handleCardClick = (magazine) => {
    setSelectedMagazine(magazine);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setSelectedMagazine(null);
    setOpenModal(false);
  };

  return (
    <>
      <Grid classes={gridStyles} container spacing={4} wrap="nowrap">
        {magazines.map((magazine) => (
          <Grid item key={magazine.id}>
            <CustomCard
              classes={styles}
              title={magazine.magazineName}
              subtitle={`Year: ${magazine.year}, Editor: ${magazine.magazineEditor}`}
              image={magazine.image}
              onClick={() => handleCardClick(magazine)}
            />
          </Grid>
        ))}
      </Grid>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        className={styles.modal}
      >
        {selectedMagazine && (
          <div className={styles.flipbookContainer}>
            <Document
              file={selectedMagazine.fileUrl}
              renderMode="svg"
              loading="Loading..."
            >
              <div className="flipbook">
                {Array.from(new Array(selectedMagazine.numPages), (el, index) => (
                  <Page key={index} pageNumber={index + 1} />
                ))}
              </div>
            </Document>
          </div>
        )}
      </Modal>
    </>
  );
};

export default MagazineDisplay;
