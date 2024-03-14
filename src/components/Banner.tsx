import { cn } from "@/lib/utils"
import Link from "next/link"
import React from "react"

export default function Banner({
    className,
    children,
}: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <div
            className={cn(
                "w-full min-h-12 text-center text-3xl font-bold grid place-items-center bg-[#d4d421] text-black",
                className,
            )}
        >
            <div>{children}</div>
        </div>
    )
}
export const BannerButton = ({
    href,
    children,
}: {
    href: string
    children: React.ReactNode
}) => {
    return (
        <Link className="ml-4 border border-black rounded-xl px-2" href={href}>
            {children}
        </Link>
    )
}
