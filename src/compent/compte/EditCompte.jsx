import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';
import axios from 'axios';

function EditCompte({ onUpdateCompte }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [Banque, setBanque] = useState('');
  const [Compte, setCompte] = useState('');
  const [Ville, setVille] = useState('');
  const [nomsocietes, setNomSocietes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCompte = { Banque, Compte, Ville, nomsocietes };
    onUpdateCompte(id, updatedCompte);
    navigate('/compte/liste')
  };

  return (
    <Container maxWidth="sm" sx={{marginLeft:"300px"}}>
      <Typography variant="h4" gutterBottom>Edit Compte</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Banque"
              variant="outlined"
              fullWidth
              value={Banque}
              onChange={(e) => setBanque(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Compte"
              variant="outlined"
              fullWidth
              value={Compte}
              onChange={(e) => setCompte(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Ville"
              variant="outlined"
              fullWidth
              value={Ville}
              onChange={(e) => setVille(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Nom Societes"
              variant="outlined"
              fullWidth
              value={nomsocietes}
              onChange={(e) => setNomSocietes(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Update Compte
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default EditCompte;
