import React from 'react'
import {SearchBar} from './search-bar'
import { Box } from '@mui/system'

export function HomeComponent() {
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
