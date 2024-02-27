"use client"

import { useAuth } from "@/contexts/AuthContext"
import { CircleUser, Home } from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

export default function Header() {
    const router = useRouter()
    const pathname = usePathname()
    const { loading, user } = useAuth()
    return (
        <header className="w-full flex justify-between items-center px-8 bg-white text-black h-12">
            <h1 className="text-4xl text-center font-bold">
                TheHigherUps <BetaIcon />
            </h1>
            <div className="flex flex-row gap-4 items-center">
                {user && <div className="text-2xl ">Welcome, {user.name}</div>}
                <UserTags />
                <NavIcon />
            </div>
        </header>
    )
}

const UserTags = () => {
    return null
    return (
        <div className="bg-gray-500 rounded-full text-[#d4d421] px-2 py-1 text-xl">
            LEGENDARY
        </div>
    )
}

const NavIcon = () => {
    const pathname = usePathname()

    if (pathname === "/") {
        return (
            <Link href="/account">
                <CircleUser strokeWidth={2.5} size={28} />
            </Link>
        )
    } else {
        return (
            <Link href="/">
                <Home size={28} />
            </Link>
        )
    }
}

const BetaIcon = () => {
    return (
        <div className="inline text-xl bg-gradient-to-br from-blue-500 to-red-200 rounded-xl px-2">
            BETA
        </div>
    )
}
