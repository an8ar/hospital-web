import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/home/home'
import { LoginPage } from '../pages/auth/login'
import { AdminRoutes } from '../pages/admin'
import { Protected } from './protected'
import { DoctorPage } from '../pages/doctor/doctor'
import { PatientPage } from '../pages/patient/patient'
import {AboutPage} from '../pages/about'

function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/doctor" element={<Protected roles={['doctor']}><DoctorPage /></Protected>} />
        <Route path="/patient" element={<Protected roles={['patient']}><PatientPage /></Protected>} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterApp
