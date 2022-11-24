import React from 'react'
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

export function ProfileInfo({user}) {
  const initals = user.name.charAt(0)+ user.surname.charAt(0);
  console.log(user);
  return (
    <Box sx={{display:"flex", flexDirection:"row", margin: 3}}>
      <Avatar sx={{ width: 150, height: 150, bgcolor: deepPurple[500] }} >{initals}</Avatar>
      <Divider></Divider>
      <Box sx={{marginLeft:15}}>
        <Typography>Name: {user.name}</Typography>
        <Typography>Surname: {user.surname}</Typography>
        <Typography>Email: {user.email}</Typography>
        <Typography>Phone Number: {user.phone_number}</Typography>
        <Typography>Date of birth: {user.date_of_birth}</Typography>
      </Box>
    </Box>
  )
}
