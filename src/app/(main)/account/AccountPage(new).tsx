"use client"

import { useAuth } from "@/contexts/AuthContext"
import { LogOut } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function AccountPage() {
    const user = true
    return (
        <main className="grid place-items-center min-h-[calc(100vh-6rem)] relative">
            {user ? <Account /> : <Login />}
        </main>
    )
}

const Login = () => {
    const { login } = useAuth()
    const [formData, setFormData] = useState({ email: "", password: "" })

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        await login(formData.email, formData.password)
    }
    return (
        <>
            <div className="flex flex-col gap-4 px-12 py-4 rounded-xl bg-white text-black  items-center">
                <div className="text-center">
                    <div className="text-5xl font-bold">
                        Login To Your Account
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-3 text-center w-full"
                >
                    <label htmlFor="email" className="text-3xl font-bold">
                        Enter Email Address
                    </label>
                    <input
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                email: e.target.value,
                            })
                        }
                        id="email"
                        type="email"
                        className="rounded bg-[#cccccc] border border-black w-full text-xl px-1"
                    />
                    <label htmlFor="password" className="text-3xl font-bold">
                        Enter Password
                    </label>
                    <input
                        value={formData.password}
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                password: e.target.value,
                            })
                        }}
                        id="password"
                        type="password"
                        className="rounded bg-[#cccccc] border border-black w-full text-xl px-1 "
                    />
                    <button
                        type="submit"
                        className="rounded mt-8 px-3 mx-auto bg-[#cccccc] border border-black  text-2xl font-bold"
                    >
                        Login to Account
                    </button>
                </form>
                <div className="flex flex-col items-center text-lg">
                    <span className="text-[#bcbcbc]">
                        Don&apos;t Have An Account?{" "}
                        <Link className="underline" href={"/create-account"}>
                            Click Here To Make One
                        </Link>
                    </span>
                    <span className="text-[#bcbcbc]">
                        Forgot Your Password?{" "}
                        <Link className="underline" href="/password-reset">
                            Click Here To Reset It
                        </Link>
                    </span>
                </div>
            </div>
        </>
    )
}

const Account = () => {
    const { user, logout } = useAuth()
    const [formName, setFormName] = useState("")
    // if (!user) return null
    async function updateName() {
        null
    }
    return (
        <>
            <button
                onClick={logout}
                className="absolute top-0 left-0 flex items-center gap-2 m-8 rounded-full bg-white text-black border border-black px-12 text-3xl hover:-translate-y-2 hover:border-white"
            >
                <LogOut /> Logout
            </button>
            <section className="flex flex-col gap-4 px-12 py-4 rounded-xl bg-white text-black  ">
                <div className="flex flex-col gap-4 py-4 border-b border-gray-500">
                    <div className="text-4xl">Update Account Name</div>
                    <form className="text-center" onSubmit={updateName}>
                        <label
                            htmlFor="account_name"
                            className="text-3xl font-bold"
                        >
                            Account Display Name
                        </label>
                        <input
                            value={formName}
                            onChange={(e) => {
                                setFormName(e.target.value)
                            }}
                            placeholder={user?.name}
                            id="account_name"
                            type="text"
                            className="rounded bg-[#cccccc] border border-black w-full text-xl px-1 "
                        />
                        <button
                            type="submit"
                            className="rounded mt-8 px-3 mx-auto bg-[#cccccc] border border-black  text-2xl font-bold"
                        >
                            Update Display Name
                        </button>
                    </form>
                </div>
                <div className="text-4xl">{user?.name}&apos;s Orders</div>
            </section>
        </>
    )
}
