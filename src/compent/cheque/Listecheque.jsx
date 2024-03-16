import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PrintIcon from '@mui/icons-material/Print';
import './cheque.css'

function Listecheque({ cheques, onDeleteCheque }) {
  const handlePrint = (cheque) => {
    // Construct the content to be printed
    const content = ` ${cheque.beneficiaire}\n ${cheque.montant}\n${cheque.facture}\n ${cheque.id}`;

    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    printWindow.document.write(content);
    printWindow.document.close();

    // Print the content
    printWindow.print();
  };

  return (
    <div style={{ maxWidth: '800px', margin: 'auto' }}>
     
      <Typography variant="h4" gutterBottom>Tous les chèques:</Typography>
      <Link to={'/cheque/create'} style={{ textDecoration: 'none' }}>
      <Button variant="contained">insert cheque</Button>
     </Link>
      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table>
          <TableHead>
            <TableRow className='row'>
              <TableCell style={{color:'white',fontWeight:'bold'}}>Beneficiaire</TableCell>
              <TableCell style={{color:'white',fontWeight:'bold'}}>Montant</TableCell>
              <TableCell style={{color:'white',fontWeight:'bold'}}>Facture</TableCell>
              <TableCell style={{color:'white',fontWeight:'bold'}}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cheques.map((cheque, index) => (
              <TableRow key={index}>
                <TableCell>{cheque.beneficiaire}</TableCell>
                <TableCell>{cheque.montant}</TableCell>
                <TableCell>{cheque.facture}</TableCell>
                <TableCell>
                  <IconButton onClick={() => onDeleteCheque(cheque.id)}>
                    <DeleteIcon />
                  </IconButton>
                  <Link to={`/cheque/update/${cheque.id}`}>
                    <IconButton>
                      <EditIcon />
                    </IconButton>
                  </Link>
                  <IconButton onClick={() => handlePrint(cheque)}>
                    <PrintIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Listecheque;
