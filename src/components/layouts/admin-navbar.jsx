import { Link } from "react-router-dom"

export const AdminNavbar = () => {
    return ([
        <Link to="/admin/doctor/create" key="admin-doctor-create">
            Doctor
        </Link>,
        <Link to='/admin/patient/create' key="admin-patient-create">
            Patient
        </Link>,
    ])

}