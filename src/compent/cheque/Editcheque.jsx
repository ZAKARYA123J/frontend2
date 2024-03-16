import React, { useState, useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Typography, TextField, Button } from '@mui/material';

function EditCheque({ onUpdateCheque }) {
  const { id } = useParams(); // Get the id parameter from the URL
  const navigate=useNavigate()
  const [beneficiaire, setBeneficiaire] = useState('');
  const [montant, setMontant] = useState('');
  const [facture, setFacture] = useState('');
  const [nomcarnet, setNomCarnet] = useState('');

  useEffect(() => {
    // Fetch cheque data by id when component mounts
    const fetchCheque = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/cheques/${id}`);
        const { beneficiaire, montant, facture, nomcarnet } = response.data;
        setBeneficiaire(beneficiaire);
        setMontant(montant);
        setFacture(facture);
        setNomCarnet(nomcarnet);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchCheque();

    // Cleanup function
    return () => {
      // Cleanup logic if needed
    };
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    onUpdateCheque(id, beneficiaire, montant, facture, nomcarnet);
    navigate('/cheque/liste')
  };

  return (
    <div style={{ width: '50%', margin: 'auto', marginTop: '20px', textAlign: 'center' }}>
      <Typography variant="h4" style={{ color: '#3f51b5', marginBottom: '20px' }}>Edit Cheque</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Beneficiaire"
          value={beneficiaire}
          onChange={(e) => setBeneficiaire(e.target.value)}
          fullWidth
          style={{ marginBottom: '10px' }}
          InputLabelProps={{ style: { color: '#3f51b5' } }}
        />
        <TextField
          label="Montant"
          value={montant}
          onChange={(e) => setMontant(e.target.value)}
          fullWidth
          style={{ marginBottom: '10px' }}
          InputLabelProps={{ style: { color: '#3f51b5' } }}
        />
        <TextField
          label="Facture"
          value={facture}
          onChange={(e) => setFacture(e.target.value)}
          fullWidth
          style={{ marginBottom: '10px' }}
          InputLabelProps={{ style: { color: '#3f51b5' } }}
        />
        <TextField
          label="Nom Carnet"
          value={nomcarnet}
          onChange={(e) => setNomCarnet(e.target.value)}
          fullWidth
          style={{ marginBottom: '10px' }}
          InputLabelProps={{ style: { color: '#3f51b5' } }}
        />
        <Button
          type="submit"
          variant="contained"
          style={{ marginTop: '10px', backgroundColor: '#3f51b5', color: 'white', borderRadius: '5px' }}
        >
          Update
        </Button>
      </form>
    </div>
  );
}

export default EditCheque;
