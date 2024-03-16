import React, { useState } from 'react';
import { TextField, Button, Typography, Grid ,Select,MenuItem,InputLabel} from '@mui/material';
import { useNavigate } from 'react-router-dom';
function CreateCheque({ onCreateCheque,carnets }) {
  const [beneficiaire, setBeneficiaire] = useState('');
  const [montant, setMontant] = useState('');
  const [facture, setFacture] = useState('');
  const [nomcarnet, setNomCarnet] = useState('');
  const navigate=useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreateCheque(beneficiaire, montant, facture, nomcarnet);
    // Clear the form after submission if needed
    setBeneficiaire('');
    setMontant('');
    setFacture('');
    setNomCarnet('');
    navigate('/cheque/liste')
  };

  return (
    <div>
      <Typography variant="h4" style={{fontFamily:'aileron'}}>Create Cheque :</Typography>
      <form onSubmit={handleSubmit} style={{ padding: '16px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Beneficiaire"
              variant="outlined"
              fullWidth
              style={{ marginBottom: '16px' }}
              value={beneficiaire}
              onChange={(e) => setBeneficiaire(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Montant"
              variant="outlined"
              fullWidth
              type="number"
              style={{ marginBottom: '16px' }}
              value={montant}
              onChange={(e) => setMontant(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Facture"
              variant="outlined"
              fullWidth
              style={{ marginBottom: '16px' }}
              value={facture}
              onChange={(e) => setFacture(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
          <InputLabel id="nomcarnet-label">Select id of Carnet</InputLabel>
          <Select
            value={nomcarnet}
            onChange={(e) => setNomCarnet(e.target.value)}
            variant="outlined"
            fullWidth
            margin="normal"
          >
            {carnets.map((carnet) => (
              <MenuItem key={carnet.id} value={carnet.id}>{carnet.id}</MenuItem>
            ))}
          </Select>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Create
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default CreateCheque;
