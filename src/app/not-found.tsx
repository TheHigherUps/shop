"use client"
import Header from "@/components/Header"
import { cn } from "@/lib/utils"
import { Frown } from "lucide-react"
import { Dongle, Nabla } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

const font = Nabla({ subsets: ["latin"] })
const dongle = Dongle({ subsets: ["latin"], weight: "300" })

export default function NotFound() {
    const pathname = usePathname()
    return (
        <main
            className={
                font.className +
                " min-h-screen grid place-items-center bg-[#2d6c9c]"
            }
        >
            <div className="flex flex-col items-center gap-12 text-4xl">
                <div>
                    Oops! You Messed Up <Frown className="inline" size={36} />
                </div>
                <div>You&apos;ve Encountered A Wild 404 Error</div>
                <div>{pathname} Doesn&apos;t Exist</div>
                <div className="relative h-32 w-32 ">
                    <Image
                        className="animate-spin"
                        src="/assets/images/sad-face.png"
                        alt={""}
                        fill
                    />
                </div>
                <Link
                    className={cn(
                        dongle.className,
                        "rounded-xl bg-slate-400 text-black px-3 py-2 border border-black"
                    )}
                    href="/"
                >
                    Return Home
                </Link>
            </div>
        </main>
    )
}
