"use client"
import { cn } from "@/lib/utils"
import { ShoppingCart } from "lucide-react"
import { useState } from "react"
import { Boxes } from "./ui/background-boxes"

export default function Hero() {
    const [clicked, setClicked] = useState(false)
    function playHonk() {
        if (clicked) {
            return
        }
        setClicked(true)
        const audio = new Audio("/assets/sounds/oos-error.mp3")
        audio.play()
        // alert("HONK!")
        setTimeout(() => {
            setClicked(false)
        }, 500)
    }
    return (
        <div className=" h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
            <Boxes className="w-full" />
            <h1 className="photoText z-[9999]" id="hdrTxt">
                TheHigherUps Shop{" "}
                <ShoppingCart
                    onClick={playHonk}
                    className={cn(
                        "align-middle inline transition-all",
                        clicked && "rotate-[360deg] fo"
                    )}
                    fill="1"
                    stroke={clicked ? "#dad" : "white"}
                    size={30}
                />
            </h1>
            <div className="headerUnderline z-[9999]"></div>
        </div>
    )
}
