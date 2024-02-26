import Image from "next/image"
import Link from "next/link"
import { HTMLAttributes, ReactElement, forwardRef } from "react"

interface CardProps {
    image: string
    title: string
    titleExtra?: ReactElement
    quantity: string
    quatitiyExtra?: ReactElement
    price: string
    href: string
    discount?: boolean
    discountPrice?: string
}

export default function Card(props: CardProps) {
    const TitleExtra = props.titleExtra
    return (
        <div className="flex flex-col md:flex-row bg-[#9c9c9c9f]">
            <div className="grid place-items-center p-4">
                <Image
                    src={props.image}
                    alt={props.title}
                    height={175}
                    width={100}
                />
            </div>
            <div className="flex flex-col justify-evenly gap-4">
                <div className="flex gap-2 text-4xl">
                    {props.title}
                    {props.titleExtra}
                </div>
                <div>
                    <p className="text-2xl">Quantity: {props.quantity}</p>
                </div>
                <div>
                    <p className="text-2xl">Price: {props.price}</p>
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
