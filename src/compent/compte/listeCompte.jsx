import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Paper, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './compte.css'

const ListeCompte = ({ comptes, onDeleteSociete }) => {
  return (
    <div style={{ marginLeft: '50px', marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom sx={{ marginLeft: "400px" }}>Liste des Comptes :</Typography>
      <div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow className='Back'>
                <TableCell style={{color:'white',fontWeight:'bold'}}>Banque</TableCell>
                <TableCell style={{color:'white',fontWeight:'bold'}}>Compte</TableCell>
                <TableCell style={{color:'white',fontWeight:'bold'}}>Ville</TableCell>
                <TableCell style={{color:'white',fontWeight:'bold'}}>Nomsocietes</TableCell>
                <TableCell style={{color:'white',fontWeight:'bold'}}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {comptes.map(compte => (
                <TableRow key={compte.id}>
                  <TableCell>{compte.Banque}</TableCell>
                  <TableCell>{compte.Compte}</TableCell>
                  <TableCell>{compte.Ville}</TableCell>
                  <TableCell>{compte.nomsocietes}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => onDeleteSociete(compte.id)}>
                      <DeleteIcon />
                    </IconButton>
                    <Link to={`/compte/update/${compte.id}`} style={{ textDecoration: 'none' }}>
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
        <br/>
        <Link to={'/compte/create'} style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary" style={{ marginBottom: '20px', marginLeft: '20px' }}>Insert New Compte</Button>
        </Link>
      </div>
    </div>
  );
};

export default ListeCompte;
