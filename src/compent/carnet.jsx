import React, { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, FormControl, InputLabel, Select, MenuItem, TextField, Button } from '@mui/material';
import api from './Api'; // Make sure to import your API instance properly
import axios from 'axios';

export default function Interface(props) {
  const Account = useRef();

  const navigate=useNavigate()
  const Type = useRef();
  const Taille = useRef();
  const [accountOptions, setAccountOptions] = useState([]);

  useEffect(() => {
    // Fetch account options when the component mounts
    api.get('/compte')
      .then((response) => {
        const data = response.data;
        console.log(data);
        setAccountOptions(data);
        console.log('API response:', data);
      })
      .catch((error) => console.error('Error fetching account options:', error));
  }, []);

  const HandleAddNew = async (e) => {
    e.preventDefault();

    // Extracting current values from refs
    const typeValue = Type.current.value;
    const accountValue = Account.current.value;
    const tailleValue = Taille.current.value;

    const requestData = {
      Type: typeValue,
      CompteName: accountValue,
      Taille: tailleValue,
    };

    try {
      // Send a POST request to create a new entry
      const response = await api.post('/carnet/create', requestData);

      if (response.data.success) {
        console.log('Data inserted successfully');
     navigate('/chequeprint')
        // Optionally, you can update local state or perform other actions after successful insertion
      } else {
        console.error('Error inserting data:', response.data.message);
      } return 
    } catch (error) {
      console.error('Error inserting data:', error.message);
    }
  };
  return (
    <>
      <Card sx={{ width: "600px", ml: "250px" }}>
        <CardContent>
          <h2> Ajouter un carnet</h2>
          <hr />
          <form>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel htmlFor="selectAccount">Account</InputLabel>
              <Select label="Account" id="selectAccount" inputRef={Account}>
                {accountOptions.map((option) => (
                  <MenuItem key={option.id} value={option.BanqueName}>
                    {option.BanqueName} {option.NumeroCompte}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel htmlFor="selectType">Type</InputLabel>
              <Select label="Type" id="selectType" inputRef={Type}>
                <MenuItem value="Chéque">Chéque</MenuItem>
                <MenuItem value="Effet">Effet</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel htmlFor="selectTaille">Taille</InputLabel>
              <Select label="Taille" id="selectTaille" inputRef={Taille}>
                <MenuItem value="25">25 page</MenuItem>
                <MenuItem value="50">50 page</MenuItem>
                <MenuItem value="100">100 page</MenuItem>
              </Select>
            </FormControl>

            <div className="row">
              <div className="col-7 text-right">
                <Link to={'/Acounte'} className="btn btn-danger mt-3">
                  Back
                </Link>
              </div>
              <div className="col-5 text-middle">
                <Button type="submit" variant="contained" color="primary" fullWidth onClick={HandleAddNew}>
                  Ajouter
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
