import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const SideInfo = () => {
    return (
        <div className="h-full flex flex-col justify-start items-center">
            {/* <FontAwesomeIcon icon={faUserLarge} className="h-12" /> */}
            <AccountCircleIcon sx={{ color:"#1976d2", height: "4rem", width: "4rem" }} />
            <span className="font-roboto">John Doe</span>
        </div>
    )
}

export default SideInfo;
