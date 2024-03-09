"use client"

import Link from "next/link"

export default function AccountPage() {
    return (
        <main className="grid place-items-center min-h-[calc(100vh-3rem)] relative">
            <div className="flex flex-col gap-4 items-center">
                <h1 className="text-5xl">
                    Account Has Been Disabled Temporarily
                </h1>
                <p className="text-3xl">03.09.24</p>
                <Link className="underline text-3xl" href="/">
                    Return Home
                </Link>
            </div>
        </main>
    )
}
