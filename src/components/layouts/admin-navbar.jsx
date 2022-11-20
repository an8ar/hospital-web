import { Link } from "react-router-dom"

export const AdminNavbar = () => {
    return ([
        <Link style={{color: "white",textDecoration: "none", margin:10,fontSize: 16 , fontFamily: 'Raleway, Arial' }} to="/admin/doctor/create" key="admin-doctor-create">
            Doctor
        </Link>,
        <Link style={{color: "white",textDecoration: "none", margin:10,fontSize: 16 , fontFamily: 'Raleway, Arial' }} to='/admin/patient/create' key="admin-patient-create">
            Patient
        </Link>,
    ])

}