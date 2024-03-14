"use client"

import Link from "next/link"
import Image from "next/image"
import Banner from "@/components/Banner"

export default function AccountPage() {
    return (
        <main className="min-h-[calc(100vh-3rem)]">
            <Banner className="bg-red-500 text-white">
                Accounts have been temporarily disabled
            </Banner>
            <div className="text-3xl mx-auto w-3/4 md:w-1/2 mt-12">
                <p className="my-12">
                    We are currently in the process of updating our account
                    system to a newer and easier version to work with. While we
                    deal with the delays of this process, access to accounts on
                    this beta version of TheHigherUps Shop have been disabled.
                    We aim to provide a easy solution where you can view you
                    orders and manage your account settings on TheHigherUps
                    Shop.
                </p>
                <Link className="bg-blue-800 px-2 rounded-full" href="/">
                    Return Home
                </Link>
            </div>
        </main>
    )
}
