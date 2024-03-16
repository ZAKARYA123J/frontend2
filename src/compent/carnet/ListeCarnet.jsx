import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './carnet.css'

function ListeCarnet({ carnets, onDeleteCarnets }) {
  return (
    <div>
      <h3 style={{ marginBottom: '20px', marginLeft: "40px" }}>Liste des carnets :</h3>
      <TableContainer style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', maxWidth: '70%', margin: '0 auto' }}>
        <Table>
          <TableHead>
            <TableRow className='row'>
              <TableCell style={{ color: 'white', fontWeight: 'bold', width: '20%' }}>Type</TableCell>
              <TableCell style={{ color: 'white', fontWeight: 'bold' }}>Taille</TableCell>
              <TableCell style={{ color: 'white', fontWeight: 'bold' }}>ID</TableCell>
              <TableCell style={{ color: 'white', fontWeight: 'bold' }}>Created At</TableCell>
              <TableCell style={{ color: 'white', fontWeight: 'bold' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {carnets && carnets.map((row, index) => (
              <TableRow key={index}>
                <TableCell style={{ width: '20%' }}>{row.type}</TableCell>
                <TableCell>{row.taille}</TableCell>
                <TableCell>{row.nomcompte}</TableCell>
                <TableCell>{row.created_at}</TableCell>
                <TableCell>
                  <IconButton onClick={() => onDeleteCarnets(row.id)}>
                    <DeleteIcon />
                  </IconButton>
                  <Link to={`/carnet/update/${row.id}`}>
                    <IconButton>
                      <EditIcon />
                    </IconButton>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Link style={{ marginLeft: '20px', display: 'block', marginTop: '20px' }} to={'/carnet/create'}>
        <Button variant="contained" color="primary">Insert Carnet</Button>
      </Link>
    </div>
  );
}

export default ListeCarnet;
