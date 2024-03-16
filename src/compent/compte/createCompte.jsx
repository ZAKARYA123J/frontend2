import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Select, MenuItem } from '@mui/material';

const CreateCompte = ({ onCreateCompte, societes }) => {
  const [Banque, setBanque] = useState('');
  const [Compte, setCompte] = useState('');
  const [Ville, setVille] = useState('');
  const [selectedSociete, setSelectedSociete] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateCompte(Banque, Compte, Ville, selectedSociete);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ marginLeft: "0px" }}>Create Compte</h2>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '500px', marginLeft: '340px' }}>
          <TextField
            label="Banque"
            value={Banque}
            onChange={(e) => setBanque(e.target.value)}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Compte"
            value={Compte}
            onChange={(e) => setCompte(e.target.value)}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Ville"
            value={Ville}
            onChange={(e) => setVille(e.target.value)}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Select
            label="Nomsocietes"
            value={selectedSociete}
            onChange={(e) => setSelectedSociete(e.target.value)}
            variant="outlined"
            fullWidth
            margin="normal"
          >
            {societes.map((societe) => (
              <MenuItem key={societe.id} value={societe.id}>{societe.Nomsociete}</MenuItem>
            ))}
          </Select>
          <Button type="submit" variant="contained" color="primary">Create</Button>
        </Box>
      </form>
    </div>
  );
};

export default CreateCompte;
