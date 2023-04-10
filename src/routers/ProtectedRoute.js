import { Navigate } from "react-router-dom";
import useAuth from "../custom-hooks/useAuth"

export const ProtectedRoute = ({ children }) => {
    const { currentUser } = useAuth();

    return currentUser ? children : <Navigate to="/login" />;
}