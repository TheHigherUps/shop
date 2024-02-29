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
                        src="/assets/images/lethal-beans.png"
                        alt="TheHigherUps Lethal Beans"
                        fill
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-5xl text-center font-bold">
                        Extremely Lethal Beans
                    </div>
                    <p className="text-3xl">
                        Extremely Lethal Beans is the second in the self defense
                        products we have made. This time, they are lethal.
                        Looking for instant death? Looking for instant removal
                        of your target? Then this is the right product for you.
                        Shake the can and the can will get hot. Once the can is
                        hot, throw the can at the target. The can will explode
                        turning the victims into literal ash. Do not shake the
                        can for more than 20 seconds. Doing so will make the can
                        explode in your hands. You will majorly FUCKED if that
                        happens. SO DONT LET THAT FUCKING HAPPEN. BITCH!
                    </p>
                    <div className="text-4xl font-bold">Price: $12.00</div>
                    <div className="flex gap-2">
                        <Link
                            className="rounded-lg bg-[#d9d9d9] text-3xl border border-black text-center grow"
                            href="/lethal-beans/checkout"
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
