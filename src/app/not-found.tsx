"use client"
import {cn} from "@/lib/utils"
import {Frown, Volume2, VolumeX} from "lucide-react"
import {Dongle, Nabla} from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import {usePathname} from "next/navigation"
import {createRef, useCallback, useEffect, useState} from "react"

const font = Nabla({subsets: ["latin"]})
const dongle = Dongle({subsets: ["latin"], weight: "300"})

export default function NotFound() {
    const [spinCount, setSpinCount] = useState<number>(0)
    const pathname = usePathname()
    const music = createRef<HTMLAudioElement>()
    const progress = createRef<HTMLMeterElement>()

    function generateSpins() {
        return Math.floor(Math.random() * (750 - 450) + 450)
    }

    const playMusic = useCallback(() => {
        if (music.current && music.current.paused) {
            return music.current.play()
        }
    }, [music])

    const increaseCount = useCallback(() => {
        setSpinCount((prevCount) => prevCount + 1)
    }, [])

    const setup = useCallback(() => {
        const spins = generateSpins()
        if (progress.current) {
            progress.current.max = spins
            progress.current.low = Math.floor(spins / 2)
            progress.current.optimum = Math.floor(spins * 0.75)
        }
    }, [progress])

    const toggleMusic = useCallback(() => {
        if(music.current) {
            music.current.muted = !music.current.muted;
        }
    }, [music])



    useEffect(() => {
        document.body.addEventListener("click", playMusic)
        window.addEventListener("load", setup)
        const x = setInterval(increaseCount, 1000)
        return () => {
            document.body.removeEventListener("click", playMusic)
            window.removeEventListener("load", setup)
            clearInterval(x)

        }
    }, [increaseCount, playMusic, setup])


    return (
        <main
            className={
                font.className +
                " min-h-screen grid place-items-center bg-[#2d6c9c] text-center"
            }
        >
            <button onClick={toggleMusic}
                    className="grid place-items-center fixed bottom-8 right-8 bg-gray-500/75 rounded-full w-10 h-10 hover:animate-pulse">
                {music.current?.muted ? <VolumeX/> : <Volume2/>}
            </button>
            <audio ref={music} src="/assets/sounds/whoopsy.mp3" loop autoPlay></audio>
            <div className="flex flex-col items-center gap-12 text-4xl">
                <div>
                    Oops! You Messed Up <Frown className="inline" size={36}/>
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
                <p>

                    {spinCount} Spins and Counting
                </p>
                <meter className="w-3/4" ref={progress} min={0} value={spinCount} low={250}
                       optimum={450}></meter>
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
