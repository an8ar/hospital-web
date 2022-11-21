import React from 'react'
import {SearchBar} from './search-bar'
import { Box } from '@mui/system'
import { useGetDoctorsQuery } from '../../api/admin/admin-api'

export function HomeComponent() {
  const {data=[]} = useGetDoctorsQuery();
  console.log("I am here",data);
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
