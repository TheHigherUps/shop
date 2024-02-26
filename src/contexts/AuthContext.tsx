"use client"
import { account } from "@/lib/appwrite"
import { AppwriteException, Models } from "appwrite"
import { createContext, useContext, useEffect, useState } from "react"

export interface UserState {
    user: Models.User<Models.Preferences> | null
    loading: boolean
    login: (email: string, password: string) => Promise<void>
    logout: () => Promise<void>
}
const defaultState = {
    user: null,
    loading: true,
    login: async () => {},
    logout: async () => {},
}

export const AuthContext = createContext<UserState>(defaultState)

export function useAuth() {
    const provider = useContext(AuthContext)
    if (!provider) {
        throw new Error(
            "No AuthContext Provided. You Must Wrap You App In A AuthContext Provider"
        )
    }
    return provider
}

export function AuthContextProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const [user, setUser] = useState<Models.User<Models.Preferences> | null>(
        null
    )
    const [loading, setLoading] = useState(false)
    async function login(email: string, password: string) {
        try {
            setLoading(true)
            await account.createEmailSession(email, password)
            const loggedIn = await account.get()
            setUser(loggedIn)
        } catch (err) {
            const error = err as AppwriteException
            alert(error.message)
        } finally {
            setLoading(false)
        }
    }
    async function logout() {
        try {
            setLoading(true)
            await account.deleteSession("current")
            setUser(null)
        } catch (error) {
            const message = error as AppwriteException
            alert(message.message)
        } finally {
            setLoading(false)
        }
    }
    async function getUser() {
        try {
            setLoading(true)
            const loggedIn = await account.get()
            setUser(loggedIn)
        } catch (err) {
            setUser(null)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getUser()
    }, [])
    const data = { user, loading, login, logout }
    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}
