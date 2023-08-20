import SideInfo from "./components/SideInfo";
import SideLogo from "./components/SideLogo";

const Sidebar = () => {
    return (
        <>
            <div className="hidden md:block md:h-28">
                <SideInfo />
            </div>
            <nav className="font-poppins">
                Nav
            </nav>
            <div className="hidden md:block md:h-28">
                <SideLogo />
            </div>
        </>
    )
}

export default Sidebar;
