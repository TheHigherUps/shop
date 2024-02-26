"use client"
import { ShoppingCart } from "lucide-react"

export default function Hero() {
    function playHonk() {
        const audio = new Audio("/assets/sounds/oos-error.mp3")
        audio.play()
        // alert("HONK!")
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
                    className="align-middle inline"
                    fill="1"
                    size={30}
                />
            </h1>
            <div className="headerUnderline"></div>
        </div>
    )
}
