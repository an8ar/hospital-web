import { Stack } from '@mui/material'
import React from 'react'
import { NavBar } from './navbar/navbar'
import { Footer } from './footer'
import { Box, spacing } from '@mui/system'

export function MainLayout({ children }) {
  return (
    <Box sx={{display:"flex", flexDirection:"column", height:"100%"}}>
      <Box sx={{marginBottom: 2, flexGrow: 1}}>
        <NavBar />
        <Stack>
          {children}
        </Stack>
      </Box>
      <Box>
        <Footer/>
      </Box>
    </Box>
  )
}
