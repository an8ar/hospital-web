import React from 'react'
import { NavBar } from './navbar'

export function MainLayout({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>

  )
}
