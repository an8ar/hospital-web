import { Stack } from '@mui/material'
import React from 'react'
import { NavBar } from './navbar'

export function MainLayout({ children }) {
  return (
    <>
      <NavBar />
      <Stack justifyContent="center" alignItems="center">
        {children}
      </Stack>
    </>
  )
}
