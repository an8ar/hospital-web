import { Stack } from '@mui/material'
import React from 'react'
import { NavBar } from './navbar/navbar'
import { Footer } from './footer'
import { Box } from '@mui/system'

export function MainLayout({ children }) {
  return (
    <div className='main-layout'  sx={{height: "100vh", display: "flex", flexDirection:"column", justifyContent: "space-between" }}>
      <Box sx={{marginBottom: 2, flex: 1}}>
        <NavBar />
        <Stack>
          {children}
        </Stack>
      </Box>
      <Box sx={{flex:0}}>
        <Footer/>
      </Box>
    </div>
  )
}
