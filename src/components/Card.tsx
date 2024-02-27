import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { ReactElement } from "react"

interface CardProps {
    image: string
    title: string
    titleExtra?: ReactElement
    quantity: string
    quantityExtra?: ReactElement
    price: string
    href: string
    discount?: boolean
    discountPrice?: string
}

export default function Card(props: CardProps) {
    return (
        <div className="flex flex-col gap-12  justify-center md:flex-row bg-[#9c9c9c9f] px-1 sm:px-12 py-4 font-bold border-y border-black">
            <div className="grid place-items-center relative w-44 h-48 mx-auto ">
                <Image
                    className="rounded-xl"
                    src={props.image}
                    alt={props.title}
                    fill
                />
            </div>
            <div className="flex flex-col justify-evenly gap-4 grow flex-1">
                <div className="flex gap-2 items-center text-4xl">
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
                                props.discount && "text-red-500 line-through"
                            )}
                        >
                            ${props.price}
                        </span>
                    </p>
                    {props.discount && (
                        <span className="text-2xl">
                            ${props.discountPrice} (Discount)
                        </span>
                    )}
                </div>
                <Link
                    className="text-xl p-1 border grid place-items-center border-black rounded-md bg-white w-full"
                    href={props.href}
                >
                    View Product
                </Link>
            </div>
        </div>
    )
}
