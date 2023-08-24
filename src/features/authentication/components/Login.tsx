import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { Paper, Button, TextField, InputAdornment } from "@mui/material";
import { passwordIcons } from "../util/passwordIcons";
import hasTouchScreen from "../../../utils/has-touchscreen";

type LoginPropsType = {
    setHasAccount: React.Dispatch<React.SetStateAction<boolean>>
}

const Login = ({ setHasAccount }: LoginPropsType) => {
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/pages"

    const [userId, setUserId] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [errorMessage, setErrorMessage] = useState<string>("");

    const [showPassword, setShowPassword] = useState<boolean>(false);

    useEffect(() => {
        setErrorMessage("");
    }, [userId, password])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // delete later ?
        setAuth({
            name: "Login Name",
            userId: userId,
            roles: [],
            accessToken: ""
        })
        setUserId("");
        setPassword("");

        navigate(from, { replace: true });
    }

    return (
        <Paper sx={{ padding: "2rem", width: "20rem" }} elevation={1}>
            <form onSubmit={handleSubmit} className="h-full flex flex-col justify-between">
                <div className="relative flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Login</h1>
                    <Button
                        onClick={() => setHasAccount((prev) => !prev)}
                        variant="outlined" 
                        sx={{
                            ":hover": {
                                backgroundColor: "primary.light",
                                color: "#FFFFFF"
                            },
                        }}
                    >
                            Register?
                    </Button>
                    <span className="text-sx text-error absolute -bottom-7 left-0">{errorMessage}</span>
                </div>
                <div className="mt-8 mb-8">
                    <div className="relative">
                        <TextField
                            id="user-id"
                            label="User ID"
                            required
                            value={userId}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserId(e.target.value)}
                            {...(hasTouchScreen ? {} : { autoFocus: true })}
                            autoComplete="off"
                            variant="filled"
                            sx={{ width: "100%", margin: "0.5rem 0" }}
                        />
                    </div>
                    <div className="relative">
                        <TextField 
                            id="password"
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            required
                            value={password}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                            autoComplete="off"
                            variant="filled"
                            sx={{ width: "100%", margin: "0.5rem 0" }}
                            InputProps={{ 
                                endAdornment: <InputAdornment 
                                    className="hover:cursor-pointer" 
                                    position="end" 
                                    onClick={() => setShowPassword((prev) => !prev)}
                                >
                                    {showPassword ? passwordIcons.true : passwordIcons.false}
                                </InputAdornment>
                            }}
                        />
                    </div>
                </div>
                <div className="relative">
                    <Button 
                        type="submit" 
                        variant="contained" 
                        sx={{ width: "100%" }}
                        disabled={ !userId.length || !password.length }
                    >
                        Continue
                    </Button>
                </div>
            </form>
        </Paper>
    )
}

export default Login;
