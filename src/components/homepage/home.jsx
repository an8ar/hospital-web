import React from 'react'

import { Box } from '@mui/system'
import { useGetDepartmentsQuery } from '../../api/public/public-api'
import { Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

export function HomeComponent() {
  const {
    data: departments,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetDepartmentsQuery()

  const dep = useParams()

  let content
  if (isSuccess) {
    content = 1
  }

  console.log(departments)
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          maxWidth: '800px',
          flexDirection: 'column',
        }}
      >
        {/* <Typography>{departments[dep].name}</Typography> */}
      </Box>
    </Box>
  )
}
