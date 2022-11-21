import React from 'react'
import { Stack } from '@mui/material';
import axios from 'axios';


export function Admin() {
    async function getDepartments(){
        const res = await axios.get('http://127.0.0.1:8000/api/doctors/',{
            
        });
        console.log(res);
    }
    React.useEffect(() => {
      
       getDepartments();
    }, [])
    

  return (
      <Stack direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        margin={5}>
            Admin page
      </Stack>
  )
}
