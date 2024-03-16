import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, TextField, Button } from '@mui/material';

function Create({ onCreateSociete }) {
    const [Nomsociete, setNom] = useState('');
    const navigate = useNavigate();

    const handleCreateSociete = () => {
        onCreateSociete({ Nomsociete });
        setNom('');
        navigate('/');
        // Clear the input field after creating the societe
    };

    return (
        <Container maxWidth="sm" style={{ marginTop: '2rem', marginLeft: '50px',paddingLeft:"150px" }}>
            <Typography variant="h3" gutterBottom>New Societe</Typography>
            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}} onSubmit={handleCreateSociete}>
                <TextField
                    label="Societe"
                    variant="outlined"
                    value={Nomsociete}
                    onChange={(e) => setNom(e.target.value)}
                    style={{ marginBottom: '1rem' }}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{ marginTop: '1rem' }}
                >
                    Submit
                </Button>
            </form>
        </Container>
    );
}

export default Create;
