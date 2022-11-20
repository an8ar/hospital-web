import { AdminPage } from './admin';
import { RegisterDoctorPage } from './doctor/register-doctor'
import { RegisterPatientPage } from './patient/register-patient';
import { Route } from 'react-router-dom';


export const AdminRoutes = [
    <Route key='admin' path=''
        element={<AdminPage />}
    />,
    <Route key='doctor-create' path='doctor/create'
        element={<RegisterDoctorPage />}
    />,
    <Route key='patient-create' path='patient/create'
        element={<RegisterPatientPage />}
    />
]