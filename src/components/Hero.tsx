"use client"
import { ShoppingCart } from "lucide-react"
import { useState } from "react"

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
        <div className="photoHeader background">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <h1 className="photoText" id="hdrTxt">
                TheHigherUps Shop{" "}
                <ShoppingCart
                    onClick={playHonk}
                    className=" align-middle inline transition-colors"
                    fill="1"
                    stroke={clicked ? "#dad" : "white"}
                    size={30}
                />
            </h1>
            <div className="headerUnderline z-[9999]"></div>
        </div>
    )
}
