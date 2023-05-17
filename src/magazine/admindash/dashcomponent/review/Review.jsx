import './review.scss';
import React, { useState, useEffect } from 'react';
import Navbar from '../Nav/Nav';
import Sidebar from '../dashSidebar/Dashsidebar';
import { DataGrid } from '@mui/x-data-grid';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Button from '@mui/material/Button';
import { collection, getDocs, onSnapshot, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../../../firebase';

const Review = () => {
  const [searchText, setSearchText] = useState('');
  const [rows, setRows] = useState([]);

  let upclicked = 0;
  let downclicked = 0;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'article'));
        const fetchedRows = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            title: data.title,
            artist: data.workBy,
            category: data.category,
            upcount: data.upVote,
            downcount: data.downVote,
            approve: data.approve,
          };
        });
        setRows(fetchedRows);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    const unsubscribe = onSnapshot(collection(db, 'article'), (snapshot) => {
      const fetchedRows = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          title: data.title,
          artist: data.workBy,
          category: data.category,
          upcount: data.upVote,
          downcount: data.downVote,
          approve: data.approve,
        };
      });
      setRows(fetchedRows);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleThumbUpClick = async (row) => {
    const articleRef = doc(db, 'article', row.id);

    if (downclicked === 1) {
      try {
        await updateDoc(articleRef, { upVote: row.upcount + 1 });
        await updateDoc(articleRef, { upVote: row.downcount - 1 });
        downclicked = 0;
      } catch (error) {
        console.error('Error updating upVote:', error);
      }
    } else if (upclicked === 0) {
      try {
        await updateDoc(articleRef, { upVote: row.upcount + 1 });
      } catch (error) {
        console.error('Error updating upVote:', error);
      }
    }
    upclicked = 1;
  };

  const handleThumbDownClick = async (row) => {
    const articleRef = doc(db, 'article', row.id);

    if (upclicked === 1) {
      try {
        await updateDoc(articleRef, { downVote: row.downcount + 1 });
        await updateDoc(articleRef, { downVote: row.upcount - 1 });
        upclicked = 0;
      } catch (error) {
        console.error('Error updating downVote:', error);
      }
    } else if (downclicked === 0) {
      try {
        await updateDoc(articleRef, { downVote: row.downcount + 1 });
      } catch (error) {
        console.error('Error updating downVote:', error);
      }
    }
    downclicked = 1;
  };

  const handleAcceptClick = async (row) => {
    const articleRef = doc(db, 'article', row.id);
    try {
      await updateDoc(articleRef, { approve: 1 });
    } catch (error) {
      console.error('Error updating approve:', error);
    }
  };

  const handleRejectClick = async (row) => {
    const articleRef = doc(db, 'article', row.id);
    try {
      await updateDoc(articleRef, { approve: -1 });
    } catch (error) {
      console.error('Error updating approve:', error);
    }
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'artist', headerName: 'Artist', width: 150 },
    { field: 'category', headerName: 'Category', width: 100 },
    { field: 'upcount', headerName: 'Upvotes', width: 100 },
    { field: 'downcount', headerName: 'Downvotes', width: 100 },
    {
      field: 'vote',
      headerName: 'Vote',
      width: 100,
      renderCell: (params) => (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ThumbUpIcon
            style={{ color: '#00ff00', marginRight: 2 }}
            onClick={() => handleThumbUpClick(params.row)}
          />
          <ThumbDownIcon
            style={{ color: 'red', marginLeft: 2 }}
            onClick={() => handleThumbDownClick(params.row)}
          />
        </div>
      ),
    },
    {
      field: 'accept',
      headerName: 'Accept',
      width: 100,
      renderCell: (params) => (
        <Button variant="outlined" style={{ color: '#00ff00' }} onClick={() => handleAcceptClick(params.row)}>
          Accept
        </Button>
      ),
    },
    {
      field: 'reject',
      headerName: 'Reject',
      width: 100,
      renderCell: (params) => (
        <Button variant="outlined" style={{ color: 'red' }} onClick={() => handleRejectClick(params.row)}>
          Reject
        </Button>
      ),
    },
  ];

  return (
    <div className="review">
      <Sidebar />
      <div className="reviewContainer">
        <Navbar />
        <div className="tableContainer">
          <div className="table" style={{ height: 400, width: '100%' }}>
            <h2 style={{ color: 'lightgray' }}>Content Review</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: 5 }}>
              <input type="text" value={searchText} onChange={handleSearchTextChange} placeholder="Search" />
            </div>
            <DataGrid
              rows={rows.filter((row) => row.approve === 0 && row.title.toLowerCase().includes(searchText.toLowerCase()))}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
