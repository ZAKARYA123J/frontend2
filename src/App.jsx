import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, CssBaseline, Paper, Typography, Link } from '@mui/material';
import Navbar from './compent/Navbar'
import HomePage from './compent/Home';
import Acounte from './compent/AccountPage';
import Banque from './compent/Banque';
import Compte from './compent/Compte';
function App() {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
    
        
          <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/Acounte' element={<Acounte/>}/>
          <Route path='/banque' element={<Banque/>}/>
          <Route path='/Compte' element={<Compte/>}/>

          </Routes>
    </Router>
  );
}

export default App;
