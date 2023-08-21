import { useState, useEffect } from "react";
import { Paper, TextField, InputAdornment } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Button } from "@mui/material";

const NAME_REGEX = /^[\p{L}]+ [\p{L}]+$/u;
const USERID_REGEX = /^[A-Za-z][A-Za-z0-9]{2,}$/;
const PASSWORD_REGEX = /^[A-Za-z0-9]{3,}$/;

const Register = () => {
    const [name, setName] = useState<string>("");
    const [validName, setValidName] = useState<boolean>(false);
    const [nameFocus, setNameFocus] = useState<boolean>(false);

    const [userId, setUserId] = useState<string>("");
    const [validUserId, setValidUserId] = useState<boolean>(false);
    const [userIdFocus, setUserIdFocus] = useState<boolean>(false);

    const [password, setPassword] = useState<string>("");
    const [validPassword, setValidPassword] = useState<boolean>(false);
    const [passwordFocus, setPasswordFocus] = useState<boolean>(false);

    const [errorMessage, setErrorMessage] = useState<string>("");

    useEffect(() => {
        setValidName(NAME_REGEX.test(name));
    }, [name])

    useEffect(() => {
        setValidUserId(USERID_REGEX.test(userId));
    }, [userId])

    useEffect(() => {
        setValidPassword(PASSWORD_REGEX.test(password));
    }, [password])

    useEffect(() => {
        setErrorMessage("");
    }, [name, userId, password])
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("form submitted");
        setErrorMessage("Registration not possible!");
    }

    return (
        <Paper sx={{ padding: "2rem", width: "20rem", height: "26rem" }} elevation={1}>
            <form onSubmit={handleSubmit} className="h-full flex flex-col justify-between">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Register</h1>
                    <Button 
                        variant="outlined" 
                        sx={{
                            ":hover": {
                                backgroundColor: "primary.light",
                                color: "#FFFFFF"
                            },
                        }}
                    >
                            Login?
                    </Button>
                </div>
                <div>
                    <div className="relative">
                        <TextField
                            id="name"
                            label="Full name"
                            required
                            value={name}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                            error={name.length !== 0 && !validName}
                            onFocus={() => setNameFocus(true)}
                            onBlur={() => setNameFocus(false)}
                            autoFocus
                            autoComplete="off"
                            variant="filled" 
                            sx={{ width: "100%", margin: "0.5rem 0" }}
                        />
                        { name.length !== 0 && 
                            !validName &&
                            nameFocus && 
                            <span className="text-xs text-error absolute -bottom-2 left-3">
                                Please enter first and last name
                            </span>
                        }
                    </div>
                    <div className="relative">
                        <TextField
                            id="user-id"
                            label="User ID"
                            required
                            value={userId}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserId(e.target.value)}
                            error={userId.length !== 0 && !validUserId}
                            onFocus={() => setUserIdFocus(true)}
                            onBlur={() => setUserIdFocus(false)}
                            autoComplete="off"
                            variant="filled" 
                            sx={{ width: "100%", margin: "0.5rem 0" }}
                        />
                        { userId.length !== 0 &&
                            !validUserId &&
                            userIdFocus &&
                            <span className="text-xs text-error absolute -bottom-2 left-3">
                                Invalid username
                            </span> 
                        }
                    </div>
                    <div className="relative">
                        <TextField
                            id="password"
                            label="Password"
                            type="password"
                            required
                            value={password}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                            error={password.length !== 0 && !validPassword}
                            onFocus={() => setPasswordFocus(true)}
                            onBlur={() => setPasswordFocus(false)}
                            autoComplete="off"
                            variant="filled" 
                            sx={{ width: "100%", margin: "0.5rem 0" }}
                            InputProps={{ endAdornment: <InputAdornment position="end"><VisibilityOffIcon /></InputAdornment> }}
                        />
                        { password.length !== 0 &&
                            !validPassword &&
                            passwordFocus &&
                            <span className="text-xs text-error absolute -bottom-2 left-3">
                                Invalid password
                            </span>
                        }
                    </div>
                </div>
                <div className="relative">
                    <Button 
                        type="submit" 
                        variant="contained" 
                        sx={{width: "100%" }}
                        disabled={ !validName || !validUserId || !validPassword }
                    >
                        Get started
                    </Button>
                </div>
            </form>
        </Paper>
    )
}

export default Register;
