import './committeeReview.scss'
import React, { useState } from 'react';
import CommitteeNav from '../committeeNav/CommitteeNav';
import Committeesidebar from '../CommitteeSidebar/CommitteeSidebar';
import { DataGrid } from '@mui/x-data-grid';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Button from '@mui/material/Button';



const Review = () => {
   const [searchText, setSearchText] = useState('');

const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
}
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'title', headerName: 'Title', width: 250 },
        { field: 'artist', headerName: 'Artist', width: 200 },
        { field: 'category', headerName: 'Category', width: 150 },
        {
            field: 'vote',
            headerName: 'Vote',
            width: 200,
            renderCell: (params) => (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button>
                    <ThumbUpIcon
                        style={{ color: '#00ff00', marginRight: 2 }}
                    />
                    </Button>
                    <Button>
                    <ThumbDownIcon
                        style={{ color: 'red', marginLeft: 2 }}
                    />
                    </Button>
                </div>
            ),
        },
        
    ]

    const rows = [
        {
            id: 123,
            title: "chatgpt",
            artist: "shifan",
            category: "Photograph",
            upcount: 10,
            downcount: 5,
        },
        {
            id: 124,
            title: "hello",
            artist: "lalu",
            category: "Story",
            upcount: 7,
            downcount: 8,
        },

    ]
    return (
        <div className='review'>
            <Committeesidebar />
            <div className="reviewContainer">
                <CommitteeNav />
                <div className="tableContainer">
                    <div className="table" style={{ height: 400, width: '100%' }}>
                        <h1 className='title' style={{ color: "lightgray" }}>Content Review</h1>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: 5 }}>
                            <input type="text" value={searchText} onChange={handleSearchTextChange} placeholder='Search' />
                        </div>
                        <DataGrid
                            rows={rows.filter(row => row.title.toLowerCase().includes(searchText.toLowerCase()))}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default Review