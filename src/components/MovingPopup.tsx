"use client"
import { X } from "lucide-react"
import { useState } from "react"

export default function MovingPopup() {
    const [open, setOpen] = useState<boolean>(() => {
        if (typeof window !== "undefined") {
            return !sessionStorage.getItem("banner")
        } else {
            return true
        }
    })
    function closeBanner() {
        setOpen(false)
        if (typeof window !== "undefined") {
            sessionStorage.setItem("banner", "true")
        }
    }
    if (!open) {
        return null
    }
    return (
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 w-3/4 text-black z-[9999] ">
            <div className="w-full h-full px-2 relative beans bg-[#d8bfd8] flex flex-col p-2 text-2xl">
                <div className="font-extrabold">
                    WOAH! CHECK OUT THIS LIMITED TIME OFFER
                </div>
                <p className="font-extrabold">
                    Check Out This Limted Time Offer By Using Code
                    &apos;SecretBeansCB&apos; For An Extra Can Of Assualt Beans
                    FOR FREE!
                </p>
                <button onClick={() => closeBanner()}>
                    <X
                        size={18}
                        className="absolute top-2 right-2 hover:stroke-red-500 transition-colors"
                    />
                </button>
            </div>
        </div>
    )
}
