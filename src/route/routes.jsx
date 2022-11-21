import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/auth/login'
import { AdminRoutes } from '../pages/admin'
import { Protected } from './protected';
import {DoctorPage} from '../pages/doctor/doctor'

function RouterApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/admin/*' element={<Protected roles={['admin']}/>}>
                    {AdminRoutes}
                </Route>
                <Route path='/doctor' element={<DoctorPage />} />
                
            </Routes>
        </BrowserRouter>
    );
}

export default RouterApp;
