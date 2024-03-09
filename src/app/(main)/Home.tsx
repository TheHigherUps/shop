"use client"

import Banner from "@/components/Banner"
import Card from "@/components/Card"
import CardContainer from "@/components/CardContainer"
import Hero from "@/components/Hero"
import MovingPopup from "@/components/MovingPopup"
import TimeDisplay from "@/components/TimeDisplay"
import {BackgroundGradient} from "@/components/ui/background-gradient"
import {createRef, useCallback, useEffect, useState} from "react";
import {Volume2, VolumeX} from "lucide-react";
import OfflineDetection from "@/components/OfflineDetection";
import {
    ProductAbout, ProductButton,
    ProductCard,
    ProductImage,
    ProductPrice,
    ProductQuantity,
    ProductTitle
} from "@/components/ProductCard";
import Image from "next/image"

export default function Home() {
    const [playing, setPlaying] = useState<boolean>(true)
    const player = createRef<HTMLAudioElement>()

    const playAudio = useCallback(() => {
        if (player.current) {
            setPlaying(true)
            player.current.play().then(() => {
            })
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
        return document.body.removeEventListener("click", () => {
        })

    }, [playAudio, player]);


    return (
        <>
            {/*<OfflineDetection />*/}
            <ToggleMusicButton playing={playing} playAudio={playAudio} pauseAudio={pauseAudio}/>
            <audio ref={player} src="/assets/sounds/Vacation.mp3" autoPlay loop controls={false}></audio>
            <MovingPopup/>
            <Banner>
                This website is in beta and is currently under construction
            </Banner>
            <Banner className="text-xl min-h-4">
                Known Issue: Adding items to cart causes error. Fix coming soon
            </Banner>
            <Hero/>
            <TimeDisplay/>
            <main className="min-h-screen bg-[#2d6c9c]">
                <div className="text-center text-6xl py-4">Products</div>
                <CardContainer>
                    <BackgroundGradient className="p-1">
                        <Card
                            featured
                            titleExtra={
                                <div
                                    className="rounded-full bg-gray-500/75 grid place-items-center px-1 text-xl text-yellow-300">
                                    (Cool Beans Edition)
                                </div>
                            }
                            image="/assets/images/assault-beans.png"
                            title="Assault Beans"
                            quantity="10"
                            quantityExtra={
                                <span className="text-red-500 text-2xl">
                                    (Selling Fast!)
                                </span>
                            }
                            href="/assault-beans-cbe"
                            price="70"
                            increasedPrice="70"
                            discount
                            discountPrice="50"
                            increasedDiscountPrice="60"
                        />
                    </BackgroundGradient>
                    <div></div>
                    <ProductCard>
                        <ProductImage>
                            <Image className={"rounded-xl"} src={"/assets/images/lethal-beans.png"} alt={""} fill />
                        </ProductImage>
                        <ProductAbout>
                            <ProductTitle>TheHigherUps Assault Beans</ProductTitle>
                            <ProductQuantity>Quantity 25+</ProductQuantity>
                            <ProductPrice>Price: $12.00</ProductPrice>
                            <ProductButton href={"/"}>View Product</ProductButton>
                        </ProductAbout>
                    </ProductCard>
                    <Card
                        title="TheHigherUps Lethal Beans"
                        image="/assets/images/lethal-beans.png"
                        quantity="25+"
                        price="12.00"
                        increasedPrice="15.00"
                        href="/lethal-beans"
                    />
                    <Card
                        title="TheHigherUps Assault Beans"
                        image="/assets/images/assault-beans.png"
                        quantity="50+"
                        href="/assault-beans"
                        price="7.00"
                        increasedPrice="12.00"
                    />
                    <Card
                        title="TheHigherUps Assault Bench"
                        image="/assets/images/assault-bench.png"
                        quantity="100+"
                        href="/assault-bench"
                        price="32.00"
                        increasedPrice="37.00"
                    />
                    <Card
                        title="TheHigherUps Assault Whistle"
                        image="/assets/images/whistle.jpeg"
                        quantity="100+"
                        href="/assault-whistle"
                        price="8.00"
                        increasedPrice="10.00"
                    />
                    <Card
                        title="TheHigherUps Assault Pipe"
                        image="/assets/images/assault-pipe.WEBP"
                        quantity="100+"
                        href="/assault-pipe"
                        price="52.99"
                        increasedPrice="55.99"
                    />
                    <Card
                        title="TheHigherUps Assault Telescope"
                        image="/assets/images/assault-telescope-pe.webp"
                        quantity="100+"
                        href="/assault-telescope"
                        price="89.99 (Starting at)"
                        increasedPrice="99.99 (Starting at)"
                    />
                    <Card
                        title="New Product Coming Soon"
                        image={"/assets/images/assault-umbrella.jpeg"}
                        quantity={"Unreleased"}
                        href={"/"}
                        price={"??.??"}
                        increasedPrice={"??.??"}
                    />
                    <div className="text-3xl place-self-center">
                        More Products Coming Soon
                    </div>
                </CardContainer>
            </main>
        </>
    )
}

const ToggleMusicButton = ({playing, pauseAudio, playAudio}: {
    playing: boolean,
    playAudio: () => void,
    pauseAudio: () => void
}) => {
    return <button onClick={playing ? pauseAudio : playAudio}
                   className="grid place-items-center fixed bottom-8 right-8 bg-gray-500/75 rounded-full w-10 h-10 hover:animate-pulse">
        {!playing ? <VolumeX/> : <Volume2/>}
    </button>
}