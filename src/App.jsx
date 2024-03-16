import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material'; // Corrected import
import Navbar from './compent/Navbar';
import HomePage from './compent/Home';
import AccountPage from './compent/AccountPage';
import Compte from './compent/Compte';
import Interface from './compent/carnet';
import ChequeComponent from './compent/Cheque';
import ResponsiveDrawer from './compent/Dashbord';
import Display from './compent/display';
import Liste from './compent/societe/liste';
import UpdateSociete from './compent/societe/edit';
import Create from './compent/societe/create';
import ListeCompte from './compent/compte/listeCompte';
import axios from 'axios';
import CreateCompte from './compent/compte/createCompte';
import EditCompte from './compent/compte/EditCompte';
import ListeCarnet from './compent/carnet/ListeCarnet';
import CreateCarnet from './compent/carnet/CreateCarnet';
import EditCarnet from './compent/carnet/EditCarnet';
import Listecheque from './compent/cheque/Listecheque';
import Editcheque from './compent/cheque/Editcheque';
import Createcheque from './compent/cheque/Createcheque';
import Dashboard from './compent/DashborAd';
function App() {
  const [societes, setSocietes] = useState([]);
  const [comptes, setComptes] = useState([]);
  const [carnets, setCarnets] = useState([]);
  const [cheques, setCheques] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    // Fetch Societes, Comptes, Carnets, Cheques
    axios.all([
      axios.get('http://localhost:8000/api/societes'),
      axios.get('http://localhost:8000/api/comptes'),
      axios.get('http://localhost:8000/api/carnets'),
      axios.get('http://localhost:8000/api/cheques')
    ])
    .then(axios.spread((societesRes, comptesRes, carnetsRes, chequesRes) => {
      setSocietes(societesRes.data.data);
      setComptes(comptesRes.data.data);
      setCarnets(carnetsRes.data);
      setCheques(chequesRes.data);
    }))
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  };

  const handleCreateSociete = (Nomsociete) => {
    axios.post('http://localhost:8000/api/societes/create', Nomsociete)
      .then(response => {
        alert('societe has been created')
        // Refresh data after successful creation
        fetchData();
      })
      .catch(error => {
        console.error('Error creating Societe:', error);
      });
  };

  const handleUpdateSociete = (id, data) => {
    axios.put(`http://localhost:8000/api/societes/${id}`, data)
      .then(response => {
        alert('modification succes')
        // Refresh data after successful update
        fetchData();
      })
      .catch(error => {
        console.error('Error updating Societe:', error);
      });
  };

  const handleDeleteSociete = (id) => {
    axios.delete(`http://localhost:8000/api/societes/delete/${id}`)
      .then(response => {
        window.location.reload();
        alert('societe has been delet')
        // Refresh data after successful deletion
        fetchData();
      })
      .catch(error => {
        console.error('Error deleting Societe:', error);
      });
  };
  // Route of compte
  const handleCreateCompte = async (Banque, Compte, Ville, nomsocietes) => {
    try {
      // Input validation
      if (!Banque || !Compte || !Ville || !nomsocietes) {
        throw new Error("Please provide all required fields.");
      }
  
      // Make the POST request
      const response = await axios.post('http://localhost:8000/api/comptes', {
        Banque,
        Compte,
        Ville,
        nomsocietes
      });
  
      // Check if the request was successful
      if (response.status === 201) {
        alert('Compte has been created');
        fetchData(); // Assuming fetchData() fetches updated data from the server
      } else {
        throw new Error('Failed to create compte. Unexpected status code.');
      }
    } catch (error) {
      // Error handling
      if (axios.isAxiosError(error)) {
        console.log('Axios Error:', error.message);
        if (error.response) {
          console.log('Server Error Status:', error.response.status);
          console.log('Error Data:', error.response.data);
          if (error.response.status === 400) {
            alert('Failed to create compte. Invalid input. Please check your input and try again.');
          } else {
            alert('Failed to create compte. Server error. Please try again later.');
          }
        } else {
          alert('Failed to create compte. No response from the server. Please check your internet connection.');
        }
      } else {
        console.log('Other Error:', error.message);
        alert('Failed to create compte. Please try again later.');
      }
    }
  };
  
  const handleUpdateCompte = (id, Banque, Compte, Ville, nomsocietes) => {
    axios.put(`http://localhost:8000/api/comptes/update/${id}`, { Banque, Compte, Ville, nomsocietes })
      .then(response => {
        alert('compte has been updated');
        fetchData();
      })
      .catch(error => {
        console.log('error', error);
      });
  };
 
  const handleDeleteCompte = (id) => {
    axios.delete(`http://localhost:8000/api/comptes/${id}`)
      .then(response => {
        window.location.reload();
        alert('compte has been deleted');
        fetchData();
      })
      .catch(error => {
        console.error('Error deleting Compte:', error);
      });
  };
   // end
  //carnet
  const handleCreateCarnet = async (type, taille, nomcompte) => {
    try {
      const response = await axios.post('http://localhost:8000/api/carnets', {
        type: type,
        taille: taille,
        nomcompte: nomcompte
      });
      alert('Carnet has been created');
      fetchData(); // Assuming fetchData is defined elsewhere to fetch updated data
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  const handleDeleteCarnet=async(id)=>{
    axios.delete(`http://localhost:8000/api/carnets/${id}`)
    .then(response=>{
      alert('carnet has been delet')
      fetchData()
    })
    .catch(error=>{
      console.log('error',error)
    })
  }
  const handleUpdateCarnet=async(id,type,taille,nomcompte)=>{
      axios.put(`http://localhost:8000/api/carnets/update/${id}`,{type,taille,nomcompte})
      .then(response=>{
        alert('carnet had been update')
        fetchData()
      })
      .catch(error=>{
        console.log('error',error)
      })
  }
  //end
  const handleCreatCheque = async (beneficiaire, montant, facture,nomcarnet) => {
    try {
      const response = await axios.post('http://localhost:8000/api/cheques/store', {
        beneficiaire: beneficiaire,
        montant: montant,
        facture: facture,
        nomcarnet:nomcarnet
      });
      alert('cheque has been created');
      fetchData(); // Assuming fetchData is defined elsewhere to fetch updated data
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handleUpdateCheque=async(id,beneficiaire, montant, facture,nomcarnet)=>{
    axios.put(`http://localhost:8000/api/cheques/update/${id}`,{beneficiaire, montant, facture,nomcarnet})
    .then(response=>{
      alert('cheque had been update')
      fetchData()
    })
    .catch(error=>{
      console.log('error',error)
    })
}
const handleDeleteCheque=async(id)=>{
  axios.delete(`http://localhost:8000/api/cheques/${id}`)
  .then(response=>{
    alert('cheque has been delet')
    fetchData()
  })
  .catch(error=>{
    console.log('error',error)
  })
}
  //cheque
  
  return (
    <Router>
      <CssBaseline />
      <Dashboard/>
    

      <Routes>
      <Route path='/' element={<Liste societes={societes} onDeleteSociete={handleDeleteSociete}  />} />
        <Route path='/societe/create' element={<Create onCreateSociete={handleCreateSociete} />} />
        <Route path='/societe/update/:id' element={<UpdateSociete onUpdateSociete={handleUpdateSociete} />} />
        {/* compte */}
       
        {/* <Route path='print' element={<ChequeComponent/>}/> */}
        <Route path='/compte/liste' element={<ListeCompte comptes={comptes}  onDeleteSociete={handleDeleteCompte} />} />
        <Route path='/compte/create' element={<CreateCompte onCreateCompte={handleCreateCompte} societes={societes} />} />
        <Route path='/compte/update/:id' element={<EditCompte onUpdateCompte={handleUpdateCompte} />} />
        //carnet
        <Route path='/carnet/liste' element={<ListeCarnet carnets={carnets} onDeleteCarnets={handleDeleteCarnet}/>}/>
        <Route path='/carnet/create' element={<CreateCarnet onCreateCarnet={handleCreateCarnet} comptes={comptes} />}/>
        <Route path='/carnet/update/:id' element={<EditCarnet onUpdateCarnet={handleUpdateCarnet}/> }/>
        //cheque
        <Route path='/cheque/liste' element={<Listecheque cheques={cheques} onDeleteCheque={handleDeleteCheque}/>}/>
        <Route path='/cheque/create' element={<Createcheque onCreateCheque={handleCreatCheque} carnets={carnets} />}/>
        <Route path='/cheque/update/:id' element={<Editcheque onUpdateCheque={handleUpdateCheque}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
