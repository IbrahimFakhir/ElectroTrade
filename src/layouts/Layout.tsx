import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <aside className="fixed flex flex-col justify-around w-56 h-screen shadow-xl">
                <Sidebar />
            </aside>
            <main className="font-roboto bg-background ml-56">
                <Outlet />
            </main>
        </>
    )
}

export default Layout;
