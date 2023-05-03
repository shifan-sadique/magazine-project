import './review.scss'
import React, { useState } from 'react';
import Navbar from '../Nav/Nav'
import Sidebar from '../dashSidebar/Dashsidebar'
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
                    />
                    <ThumbDownIcon
                        style={{ color: 'red', marginLeft: 2 }}
                    />
                </div>
            ),
        },
        {
            field: 'accept', headerName: 'Accept', width: 100,
            renderCell: (params) => (
                <Button variant="outlined" style={{ color: "#00ff00" }} >Accept</Button>

            )
        },
        {
            field: 'reject', headerName: 'Reject', width: 100,
            renderCell: (params) => (
                <Button variant="outlined" style={{ color: "red" }}>Reject</Button>

            )
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
            <Sidebar />
            <div className="reviewContainer">
                <Navbar />
                <div className="tableContainer">
                    <div className="table" style={{ height: 400, width: '100%' }}>
                        <h2 style={{ color: "lightgray" }}>Content Review</h2>
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