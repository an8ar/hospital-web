import React from 'react'
import { useSelector } from 'react-redux';
import Container from '@mui/material/Container';

import { useGetDoctorAppointmentsQuery } from '../../api/appointments/appointments';




export function Doctor() {
    const username = useSelector(state => state.auth.user.username);
    
    const { data } = useGetDoctorAppointmentsQuery(username);
    console.log(data);
    return (
    <Container sx={{marginTop: 5, fontSize: 20}}>
        Doctor Page
    </Container>
  )
}

