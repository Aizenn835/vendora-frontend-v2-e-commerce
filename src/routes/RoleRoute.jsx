import { Navigate, Outlet, useLocation } from "react-router-dom";
import Decoder from "../utils/decoder";

export const RoleRoute = ({ allowed }) => {
    const location = useLocation();
    const token = localStorage.getItem("Token");
    const user = token ? Decoder(token) : null;

    if (!user) {
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    const allowedRoles = Array.isArray(allowed) ? allowed : [allowed];

    if (!allowedRoles.includes(user.role)) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};