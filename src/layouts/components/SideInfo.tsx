import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useContext } from "react";
import { AuthContext } from '../../context/AuthContext';

const SideInfo = () => {
    const { auth } = useContext(AuthContext);

    return (
        <div className="h-full flex flex-col justify-start items-center">
            <AccountCircleIcon sx={{ color:"#1976d2", height: "4rem", width: "4rem" }} />
            <span className="font-roboto">{auth.firstName} {auth.lastName}</span>
        </div>
    )
}

export default SideInfo;
