import Link from "next/link"

export default function THUPTROSS() {
    return (
        <div className="text-black p-4 lg:p-12 flex flex-col gap-12">
            <Link className="text-black underline" href="/">
                Return Home
            </Link>
            <h1 className="text-xl md:text-2xl lg:text-3xl">
                TheHigherUps Project to Release Open Source Software
            </h1>
            <div>
                <p className="italic text-black/75">
                    More infomration coming soon...
                </p>
                {/* <p>
                    As developers, we at TheHigherUps fully support and are
                    maintainers of open source software(oss).{" "}
                </p> */}
            </div>
        </div>
    )
}
