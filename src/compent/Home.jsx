import React from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

function HomePage() {
  const theme = createTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.up('xs'));

  return (
    <ThemeProvider theme={theme} >
      <Box sx={{...(isSmallScreen && {paddingTop:"70px",backgroundColor:'#f0f0f0'})}} > 
        <Grid container spacing={2} sx={{ ...(isLargeScreen && { paddingLeft: '10px' }) }}>
          <Grid item xs={12}>
            <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              Gestion<samp className='text-primary'> des Comptes</samp>
            </Typography>
          </Grid>
          <Grid item xs={12} md={8} lg={6} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ mt: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <span className="text-primary" style={{ fontSize: '35px' }}>•</span>
                <Typography>
                  Le chèque est le troisième moyen de paiement le plus utilisé par les Marocaines après les espèces et la carte bancaire.
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <span className="text-primary" style={{ fontSize: '35px' }}>•</span>
                <Typography>
                  Vous estimez passer trop de temps à trier et à compter tous vos chèques bancaires, un par un.
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <span className="text-primary" style={{ fontSize: '35px' }}>•</span>
                <Typography>
                  Découvrez comment gérer vos chèques bancaires grâce à ower connect.
                </Typography>
              </Box>
              <Grid container spacing={1} justifyContent="center">
              <Grid item>
      <Button variant="contained" component={Link} to="/Acounte">
        Connecter
      </Button>
    </Grid>
              <Grid item>
      <Button variant="contained" component={Link} to="/chequeprint">
        Imprimer le chéque
      </Button>
    </Grid>
      <Grid item>
        <Button variant="contained" color="secondary">Inscrire</Button>
      </Grid>
      <Grid item>
        <Button variant="contained" color="error">Plus information</Button>
      </Grid>
    </Grid>
            </Box>
      
          </Grid>
          <Grid item xs={12} md={4} lg={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <img src='https://khatabook-assets.s3.amazonaws.com/media/post/-OxrLfX7le6aMmUNkrwIynlVO7gYsfwDgBXHAhkFUbwJ2E0NL4gGYh3iJcFKCiGG57F9gWUhtLhH5mfQLnFBxe6Lsa8beytpcc7dqJzjMdCOD9kCDBdOre07XldomA.webp' style={{ width: '100%', height: 'auto' }} alt="Your Alt Text" />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default HomePage;
