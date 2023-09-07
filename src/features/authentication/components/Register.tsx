import { useState, useEffect } from "react";
import { Paper, TextField, InputAdornment } from "@mui/material";
import { passwordIcons } from "../util/passwordIcons";
import { Button } from "@mui/material";
import useAuth from "../../../hooks/useAuth";
import axios from "../../../lib/axios";
import { AxiosError } from "axios";
import { REGISTER_URL } from "../../../lib/api-paths";
import hasTouchScreen from "../../../utils/has-touchscreen";
import { useNavigate } from "react-router-dom";

const NAME_REGEX: RegExp = /^[A-Za-z]+ [A-Za-z]+$/;
const EMAIL_REGEX: RegExp = /^[A-Za-z0-9]{3,}$/;
// regex for production:
// const EMAIL_REGEX: RegExp = /^[a-zA-Z0-9.]+@[a-zA-Z]+[.][a-zA-Z]+$/;
const PASSWORD_REGEX: RegExp = /^[A-Za-z0-9]{3,}$/;

const nameErrorText = "Please enter first and last name";
const emailErrorText = "Please follow the standard email format";
const passwordErrorText = "At least 3 characters";

type RegisterPropsType = {
    setHasAccount: React.Dispatch<React.SetStateAction<boolean>>;
}

const Register = ({ setHasAccount }: RegisterPropsType) => {
    const { setAuth } = useAuth();

    const [name, setName] = useState<string>("");
    const [validName, setValidName] = useState<boolean>(false);
    const [nameFocus, setNameFocus] = useState<boolean>(false);

    const [email, setEmail] = useState<string>("");
    const [validEmail, setValidEmail] = useState<boolean>(false);
    const [emailFocus, setEmailFocus] = useState<boolean>(false);

    const [password, setPassword] = useState<string>("");
    const [validPassword, setValidPassword] = useState<boolean>(false);
    const [passwordFocus, setPasswordFocus] = useState<boolean>(false);

    const [showPassword, setShowPassword] = useState<boolean>(false);

    const [errorMessage, setErrorMessage] = useState<string>("");

    const navigate = useNavigate();

    useEffect(() => {
        setValidName(NAME_REGEX.test(name));
    }, [name])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setValidPassword(PASSWORD_REGEX.test(password));
    }, [password])

    useEffect(() => {
        setErrorMessage("");
    }, [name, email, password])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const verifyName = NAME_REGEX.test(name);
        const verifyEmail = EMAIL_REGEX.test(email);
        const verifyPassword = PASSWORD_REGEX.test(password);
        if (!verifyName || !verifyEmail || !verifyPassword) {
            setErrorMessage("Invalid entry");
            return;
        }

        try {
            const response = await axios.post(
                REGISTER_URL,
                JSON.stringify({ name, email, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));

            const balance = response?.data?.balance;
            const accessToken = response?.data?.accessToken;
            setAuth({ 
                name: name, 
                email: email, 
                balance: balance, 
                roles: [2], 
                accessToken: accessToken 
            });

            setName("");
            setEmail("");
            setPassword("");
            
            navigate("/pages");
        }
        catch (err) {
            /* type assertion necessary? */
            const axiosError = err as AxiosError
            if (!axiosError.response) {
                setErrorMessage('No Server Response');
            }
            /* else if (axiosError.response?.status === 400) {
                setErrorMessage('Missing Username or Password');
            } */
            else {
                setErrorMessage('Login Failed');
            }
        }
    }

    return (
        <Paper sx={{ padding: "2rem", width: "20rem" }} elevation={1}>
            <form onSubmit={handleSubmit} className="h-full flex flex-col justify-between">
                <div className="relative flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Register</h1>
                    <Button
                        onClick={() => setHasAccount(prev => !prev)}
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
                    <span className="text-sx text-error absolute -bottom-7 left-0">{errorMessage}</span>
                </div>
                <div className="mt-8 mb-8">
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
                            {...(hasTouchScreen ? {} : { autoFocus: true })}
                            autoComplete="off"
                            variant="filled" 
                            sx={{ width: "100%", margin: "0.5rem 0" }}
                        />
                        { name.length !== 0 && 
                            !validName &&
                            nameFocus && 
                            <span className="text-xs text-error absolute -bottom-2 left-3">
                                {nameErrorText}
                            </span>
                        }
                    </div>
                    <div className="relative">
                        <TextField
                            id="email"
                            label="Email"
                            required
                            value={email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                            error={email.length !== 0 && !validEmail}
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                            autoComplete="off"
                            variant="filled" 
                            sx={{ width: "100%", margin: "0.5rem 0" }}
                        />
                        { email.length !== 0 &&
                            !validEmail &&
                            emailFocus &&
                            <span className="text-xs text-error absolute -bottom-2 left-3">
                                {emailErrorText}
                            </span> 
                        }
                    </div>
                    <div className="relative">
                        <TextField
                            id="password"
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            required
                            value={password}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                            error={password.length !== 0 && !validPassword}
                            onFocus={() => setPasswordFocus(true)}
                            onBlur={() => setPasswordFocus(false)}
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
                        { password.length !== 0 &&
                            !validPassword &&
                            passwordFocus &&
                            <span className="text-xs text-error absolute -bottom-2 left-3">
                                {passwordErrorText}
                            </span>
                        }
                    </div>
                </div>
                <div className="relative">
                    <Button 
                        type="submit" 
                        variant="contained" 
                        sx={{ width: "100%" }}
                        disabled={ !validName || !validEmail || !validPassword }
                    >
                        Get started
                    </Button>
                </div>
            </form>
        </Paper>
    )
}

export default Register;
