// Banque.jsx
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { MdLibraryAdd } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import {Link} from 'react-router-dom'


function Banque({ names }) {


  return (
    <div>
      <TableContainer component={Paper} style={{marginTop:"50px"}}>
        <Table  aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Nome</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Banque</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Compte</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Carnets</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {names.map((name, index) => (
              <TableRow key={index}>
                <TableCell>{name.NomBanque}</TableCell>
                <TableCell>dqd</TableCell>
                <TableCell>dqd</TableCell>
                <Link to={'/carnet'} className="btn btn-outline-success"> <MdAdd/>Ajouter un carnet</Link>
                
  <Link  to='/Compte' style={{marginLeft:'30px'}} className="btn btn-success" >
    Ajouter numéro de compte <MdLibraryAdd/>
  </Link>


              </TableRow>
            ))}

            
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Banque;
