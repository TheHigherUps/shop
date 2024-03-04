import Link from "next/link"

export default function Footer() {
    return (
        <footer className="h-24 bg-[#123456] flex flex-col items-center justify-center">
            <div className="text-4xl">
                &copy; 2022 - {new Date().getFullYear()} TheHigherUps
            </div>
            <div>
                <nav className="flex gap-4 text-xl ">
                    <Link
                        href="https://www.thehigherups.org"
                        className="underline"
                        target="_blank"
                    >
                        Main Website
                    </Link>
                    <span className=" bg-white/50 self-center rounded-full w-1 h-1"></span>
                    <Link href="/credits" className="underline">
                        Credits
                    </Link>
                    <span className=" bg-white/50 self-center rounded-full w-1 h-1"></span>

                    <Link
                        href="https://www.thehigherups.org/contact"
                        className="underline"
                        target="_blank"
                    >
                        Contact
                    </Link>
                    <span className=" bg-white/50 self-center rounded-full w-1 h-1"></span>

                    <Link
                        href="https://www.thehigherups.org/terms"
                        className="underline"
                        target="_blank"
                    >
                        Terms
                    </Link>
                </nav>
            </div>
            <p>
                TheHigherUps Shop is proudly part of{" "}
                <Link className="underline" href="/thuptross">
                    THUPTROSS
                </Link>
            </p>
        </footer>
    )
}
