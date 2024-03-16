import React, { useState, useContext } from 'react';
import { TextField, Container, Button } from '@mui/material';
import api from './Api';
import Compte from './Compte';
import { Link,useParams } from 'react-router-dom'; // Correct import statement

function AccountPage() {
  const generateRandomInt = () => {
    return Math.floor(Math.random() * 1000000);
  };

  const [idSociete, setIdSociete] = useState(generateRandomInt());
  const [accountName, setAccountName] = useState('');

  const handleAddAccount = async () => {
    try {
      const response = await api.post('/bank', {
        idSociete: idSociete,
        NomSociete: accountName,
      });

      console.log('API response:', response.data);
      console.log('Account added successfully with societeID:', idSociete);
    } catch (error) {
      console.error('Error adding account:', error.message);
    }
  };

  return (
      <Container style={{paddingLeft:"300px"}}>
        <label> Ajouter un compte</label>
        <TextField
          label="Account Name"
          variant="outlined"
          fullWidth
          value={accountName}
          onChange={(e) => setAccountName(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: 10 }}
          onClick={handleAddAccount}
        >
          Add Account
        </Button>
        <Link to={`/Compte/${idSociete}`}>Go to Banque</Link>
      </Container>
  );
}

export default AccountPage;
