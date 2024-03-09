"use client"

import React from "react";
import {cn} from "@/lib/utils";
import Link from "next/link";

function ProductCard({children, className}: { children: React.ReactNode, className?: string }) {
    return (
        <div
            className={cn("flex flex-col gap-8  md:flex-row bg-[#9c9c9c9f] px-1 sm:px-4 py-4 font-bold border border-black rounded-xl relative items-center", className)}>
            {children}
        </div>
    )
}

const ProductImage = ({children, className}: { children: React.ReactNode, className?: string }) => {
    return <div className={cn("relative w-44 h-48 mx-auto self-center", className)}>{children}</div>
}

const ProductAbout = ({children, className}: { children: React.ReactNode, className?: string }) => {
    return <div className={cn("flex flex-col justify-evenly gap-4", className)}>{children}</div>
}

const ProductTitle = ({children, className}: { children: React.ReactNode, className?: string }) => {
    return <div className={cn("flex gap-2 items-center text-4xl self-center md:self-start", className)}>{children}</div>
}

const ProductQuantity = ({children, className}: { children: React.ReactNode, className?: string }) => {
    return <p className={cn("text-2xl", className)}>{children}</p>
}

const ProductPrice = ({children, className}: { children: React.ReactNode, className?: string }) => {
    return <p className={cn("text-2xl", className)}>{children}</p>
}

const ProductButton = ({children, href, className}: {
    children: React.ReactNode,
    href: string,
    className?: string
}) => {
    return <Link
        className={cn("text-xl p-1 border grid place-items-center border-black rounded-md bg-white w-full", className)}
        href={href}>{children}</Link>
}


export {ProductTitle, ProductAbout, ProductImage, ProductCard, ProductPrice, ProductQuantity, ProductButton}