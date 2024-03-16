import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, TextField, Button, Typography, Select, MenuItem } from '@mui/material';
function CreateCarnet({ onCreateCarnet, comptes }) {
  const [type, setType] = useState('cheque');
  const [taille, setTaille] = useState('');
  const [nomcompte, setNomCompte] = useState('');
  const [errors, setErrors] = useState({});
  const navigate=useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if any field has errors
    if (errors.type || errors.taille || errors.nomcompte) {
      // If any error exists, prevent form submission
      return;
    }

    onCreateCarnet(type, taille, nomcompte);
    // Clear the form after submission if needed
    setType('');
    setTaille('');
    setNomCompte('');
    setErrors({});
    navigate('/carnet/liste')
  };

  return (
    <Paper style={{ padding: 20, marginLeft: '250px', width: '60%' }}>
      <Typography variant="h4" style={{ fontFamily: 'aileron', marginLeft: '200px' }}>Create Carnet</Typography>
      <form onSubmit={handleSubmit}>
        <div  style={{ marginBottom: '20px' }}>
        <Select
            label="Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            variant="outlined"
            fullWidth
            margin="normal"
          >
            <MenuItem value="cheque">Cheque</MenuItem>
            <MenuItem value="effecte">Effecte</MenuItem>
          </Select>
        </div>
        <div>
          <TextField
            label="Taille"
            variant="outlined"
            value={taille}
            onChange={(e) => setTaille(e.target.value)}
            error={!!errors.taille}
            helperText={errors.taille && errors.taille[0]}
            sx={{ width: '100%', marginBottom: '10px' }} // Add width and margin to the input field
          />
        </div>
        <div>
          <Select
            label="Select Compte"
            value={nomcompte}
            onChange={(e) => setNomCompte(e.target.value)}
            variant="outlined"
            fullWidth
            margin="normal"
          >
            {comptes.map((compte) => (
              <MenuItem key={compte.id} value={compte.id}>{compte.Banque}</MenuItem>
            ))}
          </Select>
        </div>
        <Button  style={{ marginTop: '20px' }} type="submit" variant="contained" color="primary">Create</Button>
      </form>
    </Paper>
  );
}

export default CreateCarnet;
