import React from 'react'
import { SearchBar } from './search-bar'
import { Box } from '@mui/system'
import { useGetDepartmentsQuery } from '../../api/public/public-api';
import { useGetDoctorsQuery } from '../../api/public/public-api';

export function HomeComponent() {
  const { data = [] } = useGetDepartmentsQuery();
  console.log("Tut data uzhe departments");
  console.log(data);
  return (

    <Box
      sx={{
        display: 'flex',
        maxWidth: '800px',
        flexDirection: 'column',
      }}
    >
      <SearchBar />
    </Box>
  )
}
