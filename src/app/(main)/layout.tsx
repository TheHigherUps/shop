import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { AuthContextProvider } from "@/contexts/AuthContext"
import type { Metadata } from "next"
import { Dongle, Inter } from "next/font/google"
import "../globals.css"
import CartProvider from "@/contexts/CartContext"

const inter = Inter({ subsets: ["latin"] })
const dongle = Dongle({ subsets: ["latin"], weight: "300" })

export const metadata: Metadata = {
    metadataBase: new URL("https://thehigherups-shop.vercel.app"),
    title: "TheHigherUps Shop",
    description:
        "Purchase and shop for products on TheHigherUps Shop. Amazing products such as TheHigherUps Assault Beans and TheHigherUps Assault Bench.",
    openGraph: {
        title: "TheHigherUps Shop",
        description:
            "Purchase and shop for products on TheHigherUps Shop. Amazing products such as TheHigherUps Assault Beans and TheHigherUps Assault Bench.",
        type: "website",
        url: "https://shop.thehigherups.org",
        images: [
            {
                url: "/assets/images/assault-beans.png",
                width: 1200,
                height: 630,
                alt: "TheHigherUps Shop",
            },
        ],
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <AuthContextProvider>
                <CartProvider>
                    <body className={dongle.className + " bg-[#2d6c9c]"}>
                        {/* <Banner /> */}
                        <Header />
                        {children}
                        <Footer />
                    </body>
                </CartProvider>
            </AuthContextProvider>
        </html>
    )
}
