import React from 'react'
import { useGetDoctorQuery } from '../../api/doctor/doctor-api';
import { useGetDepartmentsQuery } from '../../api/public/public-api';
import { useGetDoctorsQuery } from '../../api/public/public-api';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { PersonalProfile } from './personal-doctor';
import axios from 'axios';


export function Doctor() {
    const id = useSelector(state=>state.auth.user.id);
    const token = useSelector( state=>state.auth.accessToken);
    // const {data=[]} = useGetDepartmentsQuery();
    // console.log("Whats Up");
    // console.log(data);
    console.log("Id is ", id);
    async function x(){
        const res = await axios.get("http://localhost:8000/api/doctors/1",{
            headers: {
                Authorization : `Bearer ${token}`
            }
        });
        console.log(res);
    }
    
    const {data, isLoading} = useGetDoctorQuery(id);
    if(isLoading){
        return <h1>Is Loading</h1>
    }
    console.log(data);
    const space = ' ';
    return (
    <Container sx={{marginTop: 5, fontSize: 10}}>
        <PersonalProfile data={data}></PersonalProfile>
        <Avatar alt= "WWS" sx={{ bgcolor: deepPurple[500] }}>AS</Avatar>
        <Typography sx={{ fontSize: 20}}>
            Personal Information
        </Typography>
        <Typography>
            {data.name}{space}{data.surname}
        </Typography>
    </Container>
  )
}

