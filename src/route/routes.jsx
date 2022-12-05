import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/home/home'
import { LoginPage } from '../pages/auth/login'
import { Protected } from './protected'
import { DoctorPage } from '../pages/doctor/doctor'
import { PatientPage } from '../pages/patient/patient'
import {AboutPage} from '../pages/about'
import {DepartmentPage} from '../pages/department'
import {ServicesPage} from '../pages/services'

function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/doctor" element={<Protected roles={['doctor']}><DoctorPage /></Protected>} />
        <Route path="/patient" element={<Protected roles={['patient']}><PatientPage /></Protected>} />
        <Route path='/departments/:id' element={<DepartmentPage/>}></Route>  
        <Route path='/services/:id' element={<ServicesPage/>}></Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default RouterApp
