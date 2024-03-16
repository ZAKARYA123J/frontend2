import React, { useState, useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Grid, Box } from '@mui/material';
import axios from 'axios';

function EditCarnet({ onUpdateCarnet }) {
  const { id } = useParams(); // Get the id parameter from the URL
  const [type, setType] = useState('');
  const navigate=useNavigate()
  const [taille, setTaille] = useState('');
  const [nomcompte, setNomCompte] = useState('');

  useEffect(() => {
    // Fetch carnet data by id when component mounts
    const fetchCarnet = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/carnets/${id}`);
        const { type, taille, nomcompte } = response.data;
        setType(type);
        setTaille(taille);
        setNomCompte(nomcompte);
        navigate('/carnet/liste')
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchCarnet();

    // Cleanup function
    return () => {
      // Cleanup logic if needed
    };
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    onUpdateCarnet(id, type, taille, nomcompte);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '600px',
        margin: 'auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h4" gutterBottom>Edit Carnet</Typography>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Type"
              variant="outlined"
              fullWidth
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Taille"
              variant="outlined"
              fullWidth
              value={taille}
              onChange={(e) => setTaille(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Nom Compte"
              variant="outlined"
              fullWidth
              value={nomcompte}
              onChange={(e) => setNomCompte(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Update
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default EditCarnet;
