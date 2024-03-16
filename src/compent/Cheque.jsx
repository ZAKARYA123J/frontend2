import React, { useRef, useState } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from '@mui/material/useMediaQuery';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ReactToPrint } from 'react-to-print';
import { IoIosPrint } from "react-icons/io";

function ChequeComponent(props) {
  const theme = createTheme();
  const isSmallsize=useMediaQuery(theme.breakpoints.up('xs'))
  const [formValues, setFormValues] = useState({
    banqueName: '',
    montant: '',
    aLordreDe: '',
    faitA: '',
    date: '',
  });

  const componentRef = useRef();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

 
  const matchesXS = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="lg"style={{paddingLeft:"300px"}} >
      <Grid container spacing={3} >
        <Grid item xs={12} sm={6}>
          <TextField
       sx={{
        ...(isSmallsize ? { marginTop: "10px" } : {}),
        ...(matchesXS ? { marginTop: "100px" } : {}),
      }}
     
      // Conditional margin based on screen size
            select
            label="Banque"
            name="banqueName"
            value={formValues.banqueName}
            onChange={handleInputChange}
            fullWidth
            required
            margin="normal"
          >
            {['CIH', 'ATTIJARIWAFA BANK', 'BANK OF AFRICA', 'AL BARID BANK', 'CREDIT AGRICOLE', 'SOCIETE GENERALE', 'CREDIT DU MAROC'].map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          {/* Repeat for other fields with appropriate labels and names */}
          <TextField
            label="Montant"
            type="number"
            name="montant"
            value={formValues.montant}
            onChange={handleInputChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="À l'ordre de"
            name="aLordreDe"
            value={formValues.aLordreDe}
            onChange={handleInputChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
           labelm='fet a'
            value={formValues.faitA}
            onChange={handleInputChange}
            fullWidth
            type="date"
            required
            margin="normal"
          />
          <TextField
            label="Date"
            type="date"
            name="date"
            value={formValues.date}
            onChange={handleInputChange}
            fullWidth
            required
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <ReactToPrint
            trigger={() => <Button variant="contained" startIcon={<IoIosPrint />}>Print Cheque</Button>}
            content={() => componentRef.current}
          />
          <div ref={componentRef}>
            {/* Displaying the cheque details */}
            <p>BanqueName: {formValues.banqueName}</p>
            <p>Montant: {formValues.montant}</p>
            <p>À l'ordre de: {formValues.aLordreDe}</p>
            <p>Fait à: {formValues.faitA}</p>
            <p>Date: {formValues.date}</p>
          </div>
         
        </Grid>
      </Grid>
    </Container>
  );
}

export default ChequeComponent;
