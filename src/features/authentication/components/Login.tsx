import { Paper } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

const Login = () => {
    const [userId, setUserId] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [errorMessage, setErrorMessage] = useState<string>("");

    return (
        <Paper sx={{ padding: "2rem", width: "20rem" }}>
            Login
        </Paper>
    )
}

export default Login;
