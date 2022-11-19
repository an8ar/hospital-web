import React from 'react'
import { Stack } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

export function Admin() {
  function hundleClickPatient() {
    navigate('/register/patient');
  }
  
  function hundleClickDoctor() {
    navigate('/register/doctor');
  }

  const navigate = useNavigate();
  return (
      <Stack direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        margin={5}>
        <Button variant="contained" onClick={hundleClickPatient} >
          Add Patient
        </Button>
        <Button variant="contained" onClick={hundleClickDoctor}>
          Add Doctor
        </Button>
      </Stack>
  )
}
