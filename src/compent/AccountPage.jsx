// Compte.js
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import api from './Api';
import Banque from './Banque';

function Acounte() {
  const [name, setName] = useState('');
  const [open, setOpen] = useState(false);
  const [nameList, setNameList] = useState([]);

  useEffect(() => {
    const fetchBanqueData = async () => {
      try {
        const response = await api.get('/bank/');
        setNameList(response.data);
      } catch (error) {
        console.error('Error fetching banque data:', error);
      }
    };

    fetchBanqueData();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const formData = new FormData(event.currentTarget);
      const formDataObject = Object.fromEntries(formData.entries());
      const email = formDataObject.email;

      setName(email);
      setNameList((prevNames) => [...prevNames, email]);

      const response = await api.post('/bank/', { NomBanque: email });
      console.log('Name saved successfully:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }

    handleClose();
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Ajouter un nom de compte
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle> Ajouter un nom de compte</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label=" Nom de compte"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Ajouter</Button>
        </DialogActions>
      </Dialog>
      <Banque names={nameList} />
    </div>
  );
}

export default Acounte;
