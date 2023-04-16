import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../custom-hooks/useAuth"

export const ProtectedRoute = ({ }) => {
    const { currentUser } = useAuth();

    return sessionStorage.getItem("isLogged") ? <Outlet /> : <Navigate to="/login" />;
}