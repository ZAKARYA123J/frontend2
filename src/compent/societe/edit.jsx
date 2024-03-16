import React, { useState } from 'react';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';

const UpdateSociete = ({ onUpdate }) => {
  const {id}=useParams()
  const navigate=useNavigate()
  const [name, setName] = useState('');

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:8000/api/societes/${id}`, { Nomsociete: name });
    
      navigate('/')
      window.location.reload();
      onUpdate(); // Notify the parent component that the update was successful
    } catch (error) {
      console.error('Error updating societe:', error);
    }
  };

  return (
    <div style={{ marginLeft: "300px" }}>
      <input
        type="text"
        placeholder="New Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateSociete;
