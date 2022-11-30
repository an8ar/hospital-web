import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";


export const Protected = ({ children, roles = [] }) => {
    const { user,isLoggedIn } = useAuth();
    if (!isLoggedIn ) {
        return <Navigate to="/login" replace />;
    }
    const isAllowed = roles.length === 0  || roles.includes(user.role);
    if(!isAllowed){
        console.log("Protected");
        return <Navigate to="/" replace />;
    }
    return children || <Outlet />;
};