import './adTable.scss';
import React, { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import { collection, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../../../firebase';

const AdTable = () => {
  const [advertisements, setAdvertisements] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'advertisement'), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setAdvertisements(data);
    });

    return () => unsubscribe();
  }, []);

  const filteredAdvertisements = advertisements.filter(
    (ad) =>
      ad.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ad.contactedBy.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleAccept = async (id) => {
    try {
      const adRef = doc(db, 'advertisement', id);
      await updateDoc(adRef, { status: 'Accepted' });
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const handleReject = async (id) => {
    try {
      const adRef = doc(db, 'advertisement', id);
      await updateDoc(adRef, { status: 'Rejected' });
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <div className="table">
      <TextField
        style={{ margin: '20px' }}
        id="search"
        label="Search"
        variant="standard"
        value={searchQuery}
        onChange={handleSearchQueryChange}
      />
      <TableContainer id="adlist" component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="sticky table">
          <TableHead className="th">
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>Company Name</TableCell>
              <TableCell>Contacted By</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Columns</TableCell>
              <TableCell>Manager</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Referral</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Confirm</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredAdvertisements.map((ad) => (
              <TableRow key={ad.id}>
                <TableCell component="th" scope="row">
                  {ad.id}
                </TableCell>
                <TableCell>{ad.companyName}</TableCell>
                <TableCell>{ad.contactedBy}</TableCell>
                <TableCell>{ad.amount}</TableCell>
                <TableCell>{ad.columnsBooked}</TableCell>
                <TableCell>{ad.managerName}</TableCell>
                <TableCell>{ad.contactNo}</TableCell>
                <TableCell>{ad.email}</TableCell>
                <TableCell>{ad.referredBy}</TableCell>
                <TableCell>{ad.status}</TableCell>
                {ad.status === 'pending' && (
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      style={{ margin: '5px' }}
                      onClick={() => handleAccept(ad.id)}
                    >
                      Accepted
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="small"
                      onClick={() => handleReject(ad.id)}
                    >
                      Rejected
                    </Button>
                  </TableCell>
                )}

          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
</div>
);
};

export default AdTable;