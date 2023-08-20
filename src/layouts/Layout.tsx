import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <aside className="absolute md:fixed bottom-0 w-screen md:w-56 h-16 md:h-screen flex md:flex-col justify-around items-center md:shadow-xl">
                <Sidebar />
            </aside>
            <main className="fixed md:static font-roboto overflow-y-auto h-mainMobile md:h-full w-full bg-background md:ml-56">
                <Outlet />
            </main>
        </>
    )
}

export default Layout;
