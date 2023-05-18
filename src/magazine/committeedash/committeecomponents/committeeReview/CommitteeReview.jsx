import './committeeReview.scss';
import React, { useState, useEffect } from 'react';
import CommitteeNav from '../committeeNav/CommitteeNav';
import Committeesidebar from '../CommitteeSidebar/CommitteeSidebar';
import { DataGrid } from '@mui/x-data-grid';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Button from '@mui/material/Button';
import { collection, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../../firebase';

const Review = () => {
  const [searchText, setSearchText] = useState('');
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'article'), (snapshot) => {
      const articleData = [];
      snapshot.forEach((doc) => {
        const article = { id: doc.id, ...doc.data() };
        articleData.push(article);
      });
      setArticles(articleData);
    });

    return () => unsubscribe();
  }, []);

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleUpvote = async (id) => {
    const articleRef = doc(db, 'article', id);
    await updateDoc(articleRef, {
      upVote: articles.find((article) => article.id === id).upVote + 1,
    });
  };

  const handleDownvote = async (id) => {
    const articleRef = doc(db, 'article', id);
    await updateDoc(articleRef, {
      downVote: articles.find((article) => article.id === id).downVote + 1,
    });
  };

  const columns = [
    { field: 'title', headerName: 'Title', width: 250 },
    { field: 'workBy', headerName: 'Artist', width: 200 },
    { field: 'category', headerName: 'Category', width: 150 },
    {
      field: 'vote',
      headerName: 'Vote',
      width: 200,
      renderCell: (params) => (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button onClick={() => handleUpvote(params.id)}>
            <ThumbUpIcon style={{ color: '#00ff00', marginRight: 2 }} />
          </Button>
          <Button onClick={() => handleDownvote(params.id)}>
            <ThumbDownIcon style={{ color: 'red', marginLeft: 2 }} />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className='review'>
      <Committeesidebar />
      <div className="reviewContainer">
        <CommitteeNav />
        <div className="tableContainer">
          <div className="table" style={{ height: 400, width: '100%' }}>
            <h1 className='title' style={{ color: 'lightgray' }}>Content Review</h1>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: 5 }}>
              <input type="text" value={searchText} onChange={handleSearchTextChange} placeholder='Search' />
            </div>
            <DataGrid
              rows={articles.filter((article) => article.title.toLowerCase().includes(searchText.toLowerCase()))}
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
