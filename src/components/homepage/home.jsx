import React from 'react'
import {SearchBar} from './search-bar'
import { Box } from '@mui/system'
import { useGetDoctorsQuery } from '../../api/public/public-api'
import { useGetDepartmentsQuery } from '../../api/public/public-api'

export function HomeComponent() {
  const {data=[]} = useGetDoctorsQuery();
  const {datax=[]} = useGetDepartmentsQuery();

  console.log("I am here",datax);
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
