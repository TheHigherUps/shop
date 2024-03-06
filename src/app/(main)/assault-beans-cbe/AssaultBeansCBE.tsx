"use client"

import {ChevronLeft} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AssaultBeansCBE() {
    return (
        <main className="min-h-[calc(100vh-3rem)] grid place-items-center py-12 md:py-0">
            <Link
                className="absolute top-16 left-12 text-2xl rounded-full bg-white text-black px-12"
                href="/"
            >
                <ChevronLeft className="inline"/>
                View Other Products
            </Link>
            <div
                className="bg-white text-black rounded-xl p-4 flex flex-col md:flex-row gap-4 max-w-screen-md mx-auto items-center">
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
                        Assault Beans Cool Beans Edition
                    </div>
                    <div className="text-lg text-yellow-500 text-center font-extrabold">
                        This Limited Edition Can of Assault Beans Provides You With a Limited Edition Gold Colored Can
                        of Assault Beans. Only 10 Made -- Never Returing After!
                    </div>`
                    <p className="text-3xl text-center">
                        This limited edition version of the <Link className="underline" href="/assault-beans">Assault
                        Beans</Link> offers extra protection compared to the
                        original Assault Beans. They are still disguised as beans and they can still fit into a purse or
                        bag. You can decide to use this can for self defense and give your target a taste of pure gold,
                        or you can display the product on a shelf as a collectors item to show your love and support for
                        Assault Beans and TheHigherUps. The can is made of pure gold and has a hefty mass to go along
                        with it.
                    </p>
                    <div className="text-4xl font-bold">Price: $55.00</div>
                    igh
                    <div className="flex gap-2">
                        <Link
                            className="rounded-lg bg-[#d9d9d9] text-3xl border border-black text-center grow"
                            href="/assault-beans-cbe/checkout"
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
