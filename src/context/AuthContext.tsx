"use client";

import { fetchUserById, User } from "@/api/user";
import { createContext, useCallback, useEffect, useState } from "react";

interface IAuthContext {
    userData: User | undefined;
    token: string;
}

interface IProps {
    children: React.ReactNode;
}

interface IAuthProvider {
    loading: boolean;
    auth: IAuthContext;
    loginFunction: (data: User) => void;
}

export const AuthContext = createContext({} as IAuthProvider);

const AuthContextProvider: React.FC<IProps> = ({ children }) => {
    const [auth, setAuth] = useState<IAuthContext>({
        userData: undefined,
        token: '',
    });
    const [loading, setLoading] = useState(true);

    const loginFunction = useCallback((user: User) => {
        const token = `${user.id}:${user.username}`;
        localStorage.setItem("token", token);
        setAuth({ userData: user, token });
        setLoading(false);
    }, []);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            setLoading(false);
            return;
        }

        const [id] = token.slice(0, 1);

        const fetchData = async () => {
            try {
                const res = await fetchUserById(id);
                setAuth({ userData: res.data, token });
            } catch (err) {
                console.error("Auth fetch failed:", err);
                localStorage.removeItem("token");
                setAuth({ userData: undefined, token: '' });
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <AuthContext.Provider value={{ auth, loading, loginFunction }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
