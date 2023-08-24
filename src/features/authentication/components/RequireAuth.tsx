import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { pages } from "../../../utils/pages";

type RequireAuthPropsType = {
    allowedRoles: number[]
}

const RequireAuth = ({ allowedRoles }: RequireAuthPropsType) => {
    const { auth } = useAuth();
    const location = useLocation();
    
    return (
        auth?.roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : auth?.userId
                ? <Navigate to={pages.get("unauthorized")!.path} state={{ from: location }} replace />
                : <Navigate to={pages.get("authentication")!.path} state={{ from: location }} replace />
    )
}

export default RequireAuth;
