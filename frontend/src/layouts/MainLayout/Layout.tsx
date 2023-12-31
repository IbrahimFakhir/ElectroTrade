import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            {/* previously absolute: md:fixed */}
            <aside className="fixed bottom-0 w-screen md:w-56 h-16 md:h-screen flex md:flex-col justify-around items-center md:shadow-xl">
                <Sidebar />
            </aside>
            <main className="fixed font-roboto text-primaryText overflow-y-auto h-mainMobile md:h-full md:min-h-full w-full md:w-mainDesktop md:ml-56 bg-customGrey">
                <Outlet />
            </main>
        </>
    )
}

export default Layout;
