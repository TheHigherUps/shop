"use client"

import { ChevronLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AssaultBeans() {
    return (
        <main className="min-h-[calc(100vh-3rem)] grid place-items-center py-12 md:py-0">
            <Link
                className="absolute top-16 left-12 text-2xl rounded-full bg-white text-black px-12"
                href="/"
            >
                <ChevronLeft className="inline" />
                View Other Products
            </Link>
            <div className="bg-white text-black rounded-xl p-4 flex flex-col md:flex-row gap-4 max-w-screen-md mx-auto items-center">
                <div className="relative min-w-64 h-64">
                    <Image
                        className="rounded-xl"
                        src="/assets/images/assault-beans.png"
                        alt="TheHigherUps Assault Beans"
                        fill
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-5xl text-center font-bold">
                        TheHigherUps Assault Beans
                    </div>
                    <p className="text-3xl">
                        Assault beans are the best self defense product.
                        Disguised as beans, it makes the perfect self defense
                        product. It can easily fit into a purse or a bag and
                        stay hidden. Assault beans are extremely easy to use.
                        All you have to do is open the can and then throw it.
                        You only have one chance to throw the beans at the
                        attacker so if you miss your fucked. So don&apos;t miss.
                        Assault beans are only $7 per can. An extremely cheap
                        way to defend yourself.
                    </p>
                    <div className="text-4xl font-bold">Price: $7.00</div>
                    <div className="flex gap-2">
                        <Link
                            className="rounded-lg bg-[#d9d9d9] text-3xl border border-black text-center grow"
                            href="/assault-beans/checkout"
                        >
                            Buy Now
                        </Link>
                        <button className="rounded-lg bg-[#d9d9d9] text-3xl border border-black text-center px-2">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}
