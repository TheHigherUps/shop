import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function BannedStates() {
    return (
        <main className="p-4 md:p-12">
            <Link
                className="absolute top-16 left-12 text-2xl rounded-full bg-white text-black px-12 "
                href="/lethal-beans"
            >
                <ChevronLeft className="inline" />
                Lethal Beans
            </Link>
            <h1 className="text-5xl mt-12">
                Extremely Lethal Beans Banned States
            </h1>
            <fieldset className="border border-white p-2 text-2xl">
                <legend className="text-4xl">Banned States</legend>
                <div className="font-extrabold">
                    Lethal Beans are banned in the following states:
                </div>
                <ul className="list-disc ml-8 font-extrabold">
                    <li>Alaska</li>
                    <li>Arizona</li>
                    <li>California</li>
                    <li>Colorado</li>
                    <li>Connecticut</li>
                    <li>Delaware</li>
                    <li>Florida</li>
                    <li>Georgia</li>
                    <li>Hawaii</li>
                    <li>Idaho</li>
                    <li>Illinois</li>
                    <li>Indiana</li>
                    <li>Iowa</li>
                    <li>Kentucky</li>
                    <li>Louisiana</li>
                    <li>Massachusetts</li>
                    <li>Michigan</li>
                    <li>Minnesota</li>
                    <li>Mississippi</li>
                    <li>Missouri</li>
                    <li>Montana</li>
                    <li>Nevada</li>
                    <li>New Mexico</li>
                    <li>North Carolina</li>
                    <li>North Dakota</li>
                    <li>Ohio</li>
                    <li>Oregon</li>
                    <li>Pennsylvania</li>
                    <li>Rhode Island</li>
                    <li>South Carolina</li>
                    <li>South Dakota</li>
                    <li>Tennessee</li>
                    <li>Utah</li>
                    <li>Vermont</li>
                    <li>Virginia</li>
                    <li>Washington</li>
                    <li>West Virginia</li>
                    <li>Wisconsin</li>
                    <li>Wyoming</li>
                </ul>
            </fieldset>
        </main>
    )
}
