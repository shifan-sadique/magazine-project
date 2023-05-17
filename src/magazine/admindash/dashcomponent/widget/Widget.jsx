import './widget.scss';
import { useEffect, useState } from 'react';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import AssignmentIcon from '@material-ui/icons/Assignment';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import { collection, getDocs,getCountFromServer, onSnapshot, updateDoc, doc, query, where } from 'firebase/firestore';
import { db } from '../../../../firebase';


const Widget = ({ type }) => {
  const [amount, setAmount] = useState(0);
  const [data, setData] = useState(null);
  const diff = 20;

  useEffect(() => {

    const fetchPendingArticlesCount = async () => {
        const coll = collection(db, "article");
        const q = query(coll, where("approve", "==", 0));
        const snapshot = await getCountFromServer(q);
        console.log('pending: ', snapshot.data().count);
        return(snapshot.data().count);
    }

    const fetchAllArticlesCount = async () => {
        const coll = collection(db, "article");
        const snapshot = await getCountFromServer(coll);
        console.log('article: ', snapshot.data().count);
        return(snapshot.data().count);
    }

    const fetchAcceptedAdvertisementsCount = async () => {
        const coll = collection(db, "advertisement");
        const q = query(coll, where("status", "==", "Accepted"));
        const snapshot = await getCountFromServer(q);
        console.log('ad: ', snapshot.data().count);
        return(snapshot.data().count);
    }

    const fetchActiveUsersCount = async () => {
        const coll = collection(db, "user");
        const q = query(coll, where("status", "==", "active"));
        const snapshot = await getCountFromServer(q);
        console.log('user: ', snapshot.data().count);
        return(snapshot.data().count);
    }

    const fetchData = async () => {
      switch (type) {
        case 'articles':
          // Fetch the count of pending articles from the database
          // Replace 'fetchPendingArticlesCount' with the actual function to fetch the count
          const pendingArticlesCount = await fetchPendingArticlesCount();
          setAmount(pendingArticlesCount);

          setData({
            title: 'Pending Articles',
            isMoney: false,
            link: 'See all Pending Articles',
            icon: (
              <AssignmentIcon
                className='icon'
                style={{ backgroundColor: '#1974d230', color: 'navy' }}
              />
            ),
          });
          break;

        case 'stats':
          // Fetch the count of all articles from the database
          // Replace 'fetchAllArticlesCount' with the actual function to fetch the count
          const allArticlesCount = await fetchAllArticlesCount();
          setAmount(allArticlesCount);

          setData({
            title: 'Article Statistics',
            isMoney: false,
            link: 'View All Articles',
            icon: (
              <EqualizerIcon
                className='icon'
                style={{ backgroundColor: '#33004430', color: '#330044' }}
              />
            ),
          });
          break;

        case 'advertisement':
          // Fetch the count of accepted advertisements from the database
          // Replace 'fetchAcceptedAdvertisementsCount' with the actual function to fetch the count
          const acceptedAdvertisementsCount = await fetchAcceptedAdvertisementsCount();
          setAmount(acceptedAdvertisementsCount);

          setData({
            title: 'Advertisement',
            isMoney: true,
            link: 'See Ad Stats',
            icon: (
              <MonetizationOnIcon
                className='icon'
                style={{ backgroundColor: '#ffff0030', color: 'gold' }}
              />
            ),
          });
          break;

        case 'committee':
          // Fetch the count of active users from the database
          // Replace 'fetchActiveUsersCount' with the actual function to fetch the count
          const activeUsersCount = await fetchActiveUsersCount();
          setAmount(activeUsersCount);

          setData({
            title: 'Committee Request',
            isMoney: false,
            link: 'View All Requests',
            icon: (
              <GroupAddIcon
                className='icon'
                style={{ backgroundColor: '#990f0230', color: '#990f02' }}
              />
            ),
          });
          break;

        default:
          break;
      }
    };

    fetchData();
  }, [type]);

  return (
    <div className='widget'>
      {data && (
        <>
          <div className='left'>
            <span className='title'>{data.title}</span>
            <span className='counter'>
              {data.isMoney} {amount}
            </span>
            <span className='link'>{data.link}</span>
          </div>
          <div className='right'>
            <div className='percentage positive'>
              <KeyboardArrowUpIcon />
              {diff}
            </div>
            <div className='icon'>{data.icon}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Widget;
