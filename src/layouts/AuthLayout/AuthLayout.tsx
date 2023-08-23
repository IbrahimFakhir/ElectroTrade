import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div className="bg-customGrey h-screen flex justify-center items-center">
            <Outlet />
        </div>
    )
}

export default AuthLayout;
