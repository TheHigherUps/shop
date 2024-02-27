import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { AuthContextProvider } from "@/contexts/AuthContext"
import type { Metadata } from "next"
import { Dongle, Inter } from "next/font/google"
import "../globals.css"

const inter = Inter({ subsets: ["latin"] })
const dongle = Dongle({ subsets: ["latin"], weight: "300" })

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <AuthContextProvider>
                <body className={dongle.className + " bg-[#2d6c9c]"}>
                    {/* <Banner /> */}
                    <Header />
                    {children}
                    <Footer />
                </body>
            </AuthContextProvider>
        </html>
    )
}
