import Link from "next/link"

export default function Credits() {
    return (
        <>
            <div className="p-8 text-black">
                <Link className="underline" href="/">
                    Return Home
                </Link>
                <h1 className="text-4xl">
                    Credits for Assets Used on TheHigherUps Shop
                </h1>
                <fieldset>
                    <legend>TheHigherUps Content Warning</legend>
                    <ul>
                        <li>123</li>
                    </ul>
                </fieldset>
            </div>
        </>
    )
}
