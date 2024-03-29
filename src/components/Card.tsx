"use client"
import { useCart } from "@/contexts/CartContext"
import { cn } from "@/lib/utils"
import { PackagePlus, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { ReactElement, Suspense } from "react"

interface CardProps {
    image: string
    title: string
    titleExtra?: ReactElement
    quantity: string
    quantityExtra?: ReactElement
    price: string
    increasedPrice: string
    href: string
    discount?: boolean
    discountPrice?: string
    increasedDiscountPrice?: string
    featured?: boolean
}

export default function Card(props: CardProps) {
    const params = useSearchParams()
    const isIncreased = params.get("increaseCost") === "yes"
    const { addItem } = useCart()
    return (
        <div className="flex flex-col gap-8  md:flex-row bg-[#9c9c9c9f] px-1 sm:px-4 py-4 font-bold border border-black rounded-xl relative items-center">
            {props.featured && (
                <>
                    <Star className="group absolute top-1.5 left-1.5 stroke-yellow-400 fill-yellow-400" />
                </>
            )}
            <div className="relative w-44 h-48 mx-auto">
                <Image
                    className="rounded-xl"
                    src={props.image}
                    alt={props.title}
                    fill
                />
            </div>
            <div className="flex flex-col justify-evenly gap-4">
                <div className="flex gap-2 items-center text-4xl self-center md:self-start">
                    {props.title}
                    {props.titleExtra}
                </div>
                <div className="flex gap-2 items-center">
                    <p className="text-2xl">Quantity: {props.quantity}</p>
                    {props.quantityExtra}
                </div>
                <div className="flex gap-2 items-center">
                    <p className={cn("text-2xl")}>
                        Price:{" "}
                        <span
                            className={cn(
                                "",
                                props.discount && "text-red-500 line-through",
                            )}
                        >
                            ${isIncreased ? props.increasedPrice : props.price}
                        </span>
                    </p>
                    {props.discount && (
                        <span className="text-2xl">
                            $
                            {isIncreased
                                ? props.increasedDiscountPrice
                                : props.discountPrice}{" "}
                            (Discount)
                        </span>
                    )}
                </div>
                <div className="flex items-center gap-2">
                    <Link
                        className="text-xl p-1 border grid place-items-center border-black rounded-md bg-white w-full"
                        href={props.href}
                    >
                        View Product
                    </Link>
                    <button
                        onClick={() => addItem(props.title)}
                        className="p-1 border grid place-items-center border-black rounded-md bg-white active:bg-transparent"
                    >
                        <PackagePlus strokeWidth={1} size={28} />
                    </button>
                </div>
            </div>
        </div>
    )
}
