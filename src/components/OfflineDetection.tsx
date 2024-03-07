"use client"

import {useCallback, useEffect, useState} from "react";
import {Loader2} from "lucide-react";

export default function OfflineDetection() {
    const [offline, setOffline] = useState<boolean>(false)

    const turnOffline = useCallback(() => {
        setOffline(true)
    }, [])

    const turnOnline = useCallback(() => {
        setOffline(false)
    },[])

    useEffect(() => {
        window.addEventListener("offline", turnOffline)
        window.addEventListener("online", turnOnline)

        return () => {
            window.removeEventListener("offline", turnOffline)
            window.removeEventListener("online", turnOnline)
        }

    }, [turnOffline, turnOnline])

    if (!offline) return null

    return (
        <div className="z-[69420] bg-gray-500/75  fixed inset-0 grid place-items-center overflow-hidden">
            <div className={"flex flex-col gap-4 text-3xl text-center font-extrabold"}>
                <div>You Are Offline</div>
                <div>Attempting to Reconnect</div>
                <Loader2 size={32} className={"animate-spin self-center"}/>
            </div>
        </div>
    )

}