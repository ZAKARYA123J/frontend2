import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#2196f3' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', fontWeight: 'bold', }}>
          OWR CONNECT
        </Typography>
        <Button component={RouterLink} color="inherit" to={'/Acounte'} sx={{ marginLeft: 2, fontWeight: 'bold' }}>
          Comptes
        </Button>
        <Button color="inherit" component={RouterLink} to="/" sx={{ marginLeft: 2, fontWeight: 'bold' }}>
          Home
        </Button>
        {/* Add more navigation links as needed */}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
