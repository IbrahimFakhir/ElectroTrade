import useAuth from "../../../hooks/useAuth";
import { Paper } from "@mui/material";
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';
import TextField from "../../../components/TextField";

const handleLogout = () => {
    alert("Logged out!");
}

const AccountCard = () => {
    const { auth } = useAuth();
    
    return (
        <Paper sx={{ width: "22rem", padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-xl font-medium">{auth.name}</h2>
                </div>
                <div className="text-xl font-medium flex justify-center items-center bg-customGrey w-12 h-12 rounded-full">
                    <span>{ auth?.name?.charAt(0) }{ auth?.name?.split(" ")[1][0] }</span>
                </div>
            </div>
            <TextField>
                <div className="flex justify-between">
                    <span className="font-bold">User ID</span>
                    <span>{auth.userId}</span>
                </div>
            </TextField>
            <TextField>
                <div className="flex justify-between mb-1">
                    <span className="font-bold">Balance</span>
                    <span>$10000</span>
                </div>
                <div className="flex justify-between mb-1">
                    <span className="font-bold">IBAN</span>
                    <span>DE230982432908</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-bold">BIC</span>
                    <span>ALKIDJQ234</span>
                </div>
            </TextField>
            <a href="https://en.wikipedia.org/wiki/Share_(finance)" target="_blank">
                <TextField>
                    <div className="flex justify-between">
                        <span className="font-bold">Help</span>
                        <span><HelpIcon color="info" /></span>
                    </div>
                </TextField>
            </a>
            <TextField click={handleLogout}>
                <div className="flex justify-between">
                    <span className="font-bold">Sign Out</span>
                    <span><LogoutIcon color="info" /></span>
                </div>
            </TextField>
        </Paper>
    )
}

export default AccountCard;
