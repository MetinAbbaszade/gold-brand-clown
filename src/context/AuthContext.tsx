"use client";

import React, { createContext, useState } from "react"

interface IAuthContext {
    id: string
    token: string
}

interface IProps {
    children: React.ReactNode
}

interface IAuthProvider {
    loading: boolean
    auth: IAuthContext
}

export const AuthContext = createContext({} as IAuthProvider)


const AuthContextProvider: React.FC<IProps> = ({ children }) => {
    const [data, setData] = useState({} as IAuthContext)
    const [loading, setLoading] = useState(true)
    return <AuthContext.Provider value={{ auth: data, loading }}>
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider