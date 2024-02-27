"use client"
import { useEffect, useState } from "react"

export default function TimeDisplay() {
    let [time, setTime] = useState<string | null>("Loading...")
    useEffect(() => {
        const x = setInterval(() => {
            let newTime = new Date().toLocaleTimeString("en-us", {
                hour12: false,
            })
            setTime(newTime)
        })
        return () => {
            clearInterval(x)
        }
    }, [time])
    return (
        <aside className="hidden xl:block sticky top-8 w-[200px] px-8 text-center bg-white text-black m-5 rounded-full">
            <div className="text-3xl">Local Time</div>
            <span className="text-2xl">{time}</span>
        </aside>
    )
}
