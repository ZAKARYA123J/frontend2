import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,Button } from '@mui/material';

import { Link } from 'react-router-dom';
import UpdateSociete from './edit';

function Liste({ societes, onDeleteSociete }) {

  return (
    <>
      <TableContainer sx={{marginLeft:"20px"}} component={Paper} style={{maxWidth: '800px',marginLeft:"17%",marginTop:"5%"}}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontFamily: 'Alfa Slab One', fontWeight: 'bold', backgroundColor: '#3f51b5', color: 'white' }}>ID</TableCell>
              <TableCell sx={{ fontFamily: 'Alfa Slab One', fontWeight: 'bold', backgroundColor: '#3f51b5', color: 'white' }} align="right">Nom Societe</TableCell>
              <TableCell align="right" sx={{ fontFamily: 'Alfa Slab One', fontWeight: 'bold', backgroundColor: '#3f51b5', color: 'white' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {societes.map((row, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" style={{ backgroundColor: '#f5f5f5' }}>{row.id}</TableCell>
                <TableCell align="right" style={{ backgroundColor: '#f5f5f5' }}>
                  {row.Nomsociete}
                </TableCell>
                <TableCell align="right" style={{ backgroundColor: '#f5f5f5' }}>
                  <Link to={`/societe/update/${row.id}`}>
                    <Button variant="outlined">modifier</Button>
                  </Link>
                  <Button variant="outlined" color="error" style={{ marginLeft: "10px" }} onClick={() => onDeleteSociete(row.id)}>Supprimer</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Link to={'/societe/create'}>
        <Button style={{ marginLeft: "30%", marginTop: "10px"}} variant="contained" color="success">insert new societe</Button>
      </Link>
    </>
  );
}

export default Liste;
