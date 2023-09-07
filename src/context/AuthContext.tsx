import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

export type Auth = {
    name: string | null,
    email: string | null,
    balance: number | null,
    roles: number[],
    accessToken: string | null
}

export interface AuthContextInterface {
    auth: Auth,
    setAuth: Dispatch<SetStateAction<Auth>>
}

/* const AuthContext = createContext<Partial<AuthContextInterface>>({}); */

const defaultState = {
    auth: {
        name: null,
        email: null,
        balance: null,
        roles: [],
        accessToken: null
    },
    setAuth: () => {}
} as AuthContextInterface

const AuthContext = createContext(defaultState);

type AuthProviderProps = {
    children: ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [auth, setAuth] = useState<Auth>({ name: null, email: null, balance: null,roles: [], accessToken: null })

    return (
        <AuthContext.Provider value={{ auth, setAuth }} >
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider };
