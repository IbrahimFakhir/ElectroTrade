import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { pages } from "../../../utils/pages";

const RequireAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();
    
    return (
        auth?.userId
            ? <Outlet />
            : <Navigate to={pages.get("authentication")!.path} state={{ from: location }} replace />
    )
}

export default RequireAuth;
