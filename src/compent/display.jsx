import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios'; // Import Axios

function Display() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/comptes/');
        setData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <>
       <h2 style={{ marginLeft: '400px' }}>OWR CONNECTE </h2>
      <TableContainer component={Paper} sx={{ marginLeft: "250px" }}>
        <Table aria-label="example table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>Banque</TableCell>
              <TableCell>Compte</TableCell>
              <TableCell>Ville</TableCell>
              <TableCell>societe_id</TableCell>
            
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.Banque}</TableCell>
                <TableCell>{row.Compte}</TableCell>
                <TableCell>{row.Ville}</TableCell>
                <TableCell>{row.societe_id}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Display;
