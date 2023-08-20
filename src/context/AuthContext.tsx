import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

export type Auth = {
    firstName: string,
    lastName: string
}

export interface AuthContextInterface {
    auth: Auth,
    setAuth: Dispatch<SetStateAction<Auth>>
}

/* const AuthContext = createContext<Partial<AuthContextInterface>>({}); */

const defaultState = {
    auth: {
        firstName: "",
        lastName: ""
    },
    setAuth: () => {}
} as AuthContextInterface

const AuthContext = createContext(defaultState);

type AuthProviderProps = {
    children: ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [auth, setAuth] = useState<Auth>({ firstName: "John", lastName: "Doe" })

    return (
        <AuthContext.Provider value={{ auth, setAuth }} >
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider };
