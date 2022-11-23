import React from 'react'
import { HomeComponent } from '../../components/homepage/home'
import { MainLayout } from '../../components/layouts/main-layout'

export function HomePage() {
  return (
    <MainLayout>
      <HomeComponent />
    </MainLayout>
  )
}
