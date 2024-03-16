import React from 'react';
import { Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const societesStyle = { padding: 20, width: 250, backgroundColor: '#03a9f4' ,color:'white'}; // Yellow background for Sociétés
  const comptesStyle = { padding: 20, width: 250, backgroundColor: '#03a9f4',color:'white' }; // Blue background for Comptes
  const carnetsStyle = { padding: 20, width: 250, backgroundColor: '#03a9f4',color:'white' }; // Green background for Carnets
  const chequesStyle = { padding: 20, width: 250, backgroundColor: '#03a9f4' ,color:'white'}; // Red background for Chèques

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom style={{ marginLeft: "430px",fontFamily:'alfa-slab-one' }}>
        OWR CONNECT
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'center',marginLeft:"40px" }}>
        <div style={{ marginRight: 20 }}>
            <Link to={'/'} style={{ textDecoration: 'none' }}>
          <Paper style={societesStyle}>
            <Typography variant="h6" gutterBottom style={{fontFamily:'bagnard'}}>
              Sociétés
            </Typography>
            {/* Add your Sociétés component here */}
          </Paper>
          </Link>
        </div>
        <div style={{ marginRight: 20 }}>
            <Link to={'/compte/liste'} style={{ textDecoration: 'none' }}>
          <Paper style={comptesStyle}>
            <Typography variant="h6" gutterBottom style={{fontFamily:'bagnard'}}>
              Comptes
            </Typography>
            {/* Add your Comptes component here */}
          </Paper>
          </Link>
        </div>
        <div style={{ marginRight: 20 }}>
            <Link to={'/carnet/liste'} style={{ textDecoration: 'none' }}>
          <Paper style={carnetsStyle}>
            <Typography variant="h6" gutterBottom style={{fontFamily:'bagnard'}}>
              Carnets
            </Typography>
            {/* Add your Carnets component here */}
          </Paper>
          </Link>
        </div>
        <div>
            <Link to={'/cheque/liste'} style={{ textDecoration: 'none' }}>
          <Paper style={chequesStyle}>
            <Typography variant="h6" gutterBottom style={{fontFamily:'bagnard'}}>
              Chèques
            </Typography>
            {/* Add your Chèques component here */}
          </Paper>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
