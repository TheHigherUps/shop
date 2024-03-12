"use client"

import Banner from "@/components/Banner"
import Card from "@/components/Card"
import CardContainer from "@/components/CardContainer"
import Hero from "@/components/Hero"
import MovingPopup from "@/components/MovingPopup"
import TimeDisplay from "@/components/TimeDisplay"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { createRef, useCallback, useEffect, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"
import OfflineDetection from "@/components/OfflineDetection"
import {
    ProductAbout,
    ProductButton,
    ProductCard,
    ProductImage,
    ProductPrice,
    ProductQuantity,
    ProductTitle,
} from "@/components/ProductCard"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { SparklesCore } from "@/components/ui/sparkles"

export default function Home() {
    const [playing, setPlaying] = useState<boolean>(true)
    const player = createRef<HTMLAudioElement>()
    const params = useSearchParams()
    const isIncreased = params.get("increaseCost") === "yes"

    const playAudio = useCallback(() => {
        if (player.current) {
            setPlaying(true)
            player.current.play().then(() => {})
        }
    }, [player])

    const pauseAudio = useCallback(() => {
        if (player.current) {
            setPlaying(false)
            player.current.pause()
            player.current.currentTime = 0
        }
    }, [player])

    useEffect(() => {
        document.body.addEventListener("click", () => {
            if (player.current?.paused) {
                playAudio()
            }
        })
        return document.body.removeEventListener("click", () => {})
    }, [playAudio, player])

    return (
        <>
            <OfflineDetection />
            <ToggleMusicButton
                playing={playing}
                playAudio={playAudio}
                pauseAudio={pauseAudio}
            />
            <audio
                ref={player}
                src="/assets/sounds/Vacation.mp3"
                autoPlay
                loop
                controls={false}
            ></audio>
            <MovingPopup />
            <Banner>
                This website is in beta and is currently under construction
            </Banner>
            <Banner className="text-xl min-h-4">
                Known Issue: Adding items to cart causes error. Fix coming soon
            </Banner>
            <Hero />
            <TimeDisplay />
            <main className="min-h-screen bg-[#2d6c9c]">
                <div className="text-center text-6xl py-4">Products</div>
                <CardContainer>
                    <BackgroundGradient className="p-1">
                        <ProductCard featured>
                            <ProductImage>
                                <Image
                                    className="rounded-xl"
                                    src="/assets/images/assault-beans.png"
                                    alt="TheHigherUps Assault Beans Cool Beans Edition"
                                    fill
                                />
                            </ProductImage>
                            <ProductAbout>
                                <ProductTitle>
                                    Assault Beans{" "}
                                    <div className="rounded-full bg-gray-500/75 grid place-items-center px-1 text-xl text-yellow-300">
                                        (Cool Beans Edition)
                                    </div>
                                </ProductTitle>
                                <ProductQuantity>
                                    Quantity: 10{" "}
                                    <span className="text-red-500">
                                        (Selling Fast)
                                    </span>
                                </ProductQuantity>
                                <ProductPrice>
                                    Price:{" "}
                                    <span className="text-red-500 line-through">
                                        $70
                                    </span>{" "}
                                    ${isIncreased ? "60" : "50"}
                                    (Discount)
                                </ProductPrice>
                                <ProductButton href="/assault-beans-cbe">
                                    View Product
                                </ProductButton>
                            </ProductAbout>
                        </ProductCard>
                    </BackgroundGradient>
                    <ProductCard>
                        <ProductImage>
                            <Image
                                className="rounded-xl"
                                src="/assets/images/lethal-beans.png"
                                alt="TheHigherUps Lethal Beans"
                                fill
                            />
                        </ProductImage>
                        <ProductAbout>
                            <ProductTitle>
                                TheHigherUps Lethal Beans
                            </ProductTitle>
                            <ProductQuantity>Quantity: 25+</ProductQuantity>
                            <ProductPrice>
                                Price: ${isIncreased ? "15.00" : "12.00"}
                            </ProductPrice>
                            <ProductButton href="/lethal-beans" />
                        </ProductAbout>
                    </ProductCard>
                    <ProductCard>
                        <ProductImage>
                            <Image
                                className="rounded-xl"
                                src="/assets/images/assault-beans.png"
                                alt="TheHigherUps Assault Beans"
                                fill
                            />
                        </ProductImage>
                        <ProductAbout>
                            <ProductTitle>
                                TheHigherUps Assault Beans
                            </ProductTitle>
                            <ProductQuantity>Quantity: 50+</ProductQuantity>
                            <ProductPrice>
                                Price: ${isIncreased ? "12.00" : "7.00"}
                            </ProductPrice>
                            <ProductButton href="/assault-beans" />
                        </ProductAbout>
                    </ProductCard>
                    <ProductCard>
                        <ProductImage>
                            <Image
                                className="rounded-xl"
                                src="/assets/images/assault-bench.png"
                                alt="TheHigherUps Assault Bench"
                                fill
                            />
                        </ProductImage>
                        <ProductAbout>
                            <ProductTitle>
                                TheHigherUps Assault Bench
                            </ProductTitle>
                            <ProductQuantity>Quantity: 100+</ProductQuantity>
                            <ProductPrice>
                                Price: ${isIncreased ? "37.00" : "32.00"}
                            </ProductPrice>
                            <ProductButton href="/assault-bench" />
                        </ProductAbout>
                    </ProductCard>
                    <ProductCard>
                        <ProductImage>
                            <Image
                                className="rounded-xl"
                                src="/assets/images/whistle.jpeg"
                                alt="TheHigherUps Assault Whistle"
                                fill
                            />
                        </ProductImage>
                        <ProductAbout>
                            <ProductTitle>
                                TheHigherUps Assault Whistle
                            </ProductTitle>
                            <ProductQuantity>Quantity: 100+</ProductQuantity>
                            <ProductPrice>
                                Price: ${isIncreased ? "10.00" : "8.00"}
                            </ProductPrice>
                            <ProductButton href="/assault-whistle" />
                        </ProductAbout>
                    </ProductCard>
                    <ProductCard>
                        <ProductImage>
                            <Image
                                className="rounded-xl"
                                src="/assets/images/assault-pipe.WEBP"
                                alt="TheHigherUps Assault Pipe"
                                fill
                            />
                        </ProductImage>
                        <ProductAbout>
                            <ProductTitle>
                                TheHigherUps Assault Pipe
                            </ProductTitle>
                            <ProductQuantity>Quantity: 100+</ProductQuantity>
                            <ProductPrice>
                                Price: ${isIncreased ? "55.99" : "52.99"}
                            </ProductPrice>
                            <ProductButton href="/assault-pipe" />
                        </ProductAbout>
                    </ProductCard>
                    <ProductCard>
                        <ProductImage>
                            <Image
                                className="rounded-xl"
                                src="/assets/images/assault-telescope-pe.webp"
                                alt="TheHigherUps Assault Telescope"
                                fill
                            />
                        </ProductImage>
                        <ProductAbout>
                            <ProductTitle>
                                TheHigherUps Assault Telescope
                            </ProductTitle>
                            <ProductQuantity>Quantity: 100+</ProductQuantity>
                            <ProductPrice>
                                Price: $
                                {isIncreased
                                    ? "99.99 (Starting at)"
                                    : "89.99 (Starting At)"}
                            </ProductPrice>
                            <ProductButton href="/assault-telescope" />
                        </ProductAbout>
                    </ProductCard>
                    <ProductCard>
                        <SparklesCore
                            background="transparent"
                            minSize={0.4}
                            maxSize={1}
                            particleDensity={1200}
                            className="w-full h-full absolute inset-0 backdrop-blur-2xl rounded-xl z-10"
                            particleColor="#FFFFFF"
                        />
                        <ProductImage>
                            <Image
                                className="rounded-xl object-cover blur-md"
                                src="/assets/images/image-not-found.png"
                                alt=""
                                fill
                            />
                        </ProductImage>

                        <ProductAbout>
                            <ProductTitle className="z-[9999]">
                                New Product Coming Soon
                            </ProductTitle>
                        </ProductAbout>
                    </ProductCard>

                    {/*<div className="text-3xl place-self-center">*/}
                    {/*    More Products Coming Soon*/}
                    {/*</div>*/}
                </CardContainer>
            </main>
        </>
    )
}

const ToggleMusicButton = ({
    playing,
    pauseAudio,
    playAudio,
}: {
    playing: boolean
    playAudio: () => void
    pauseAudio: () => void
}) => {
    return (
        <button
            onClick={playing ? pauseAudio : playAudio}
            className="grid place-items-center fixed bottom-8 right-8 bg-gray-500/75 rounded-full w-10 h-10 hover:animate-pulse"
        >
            {!playing ? <VolumeX /> : <Volume2 />}
        </button>
    )
}
