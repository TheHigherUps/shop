import Link from "next/link"

export default function Footer() {
    return (
        <footer className="h-24 bg-[#123456] flex flex-col items-center justify-center">
            <div className="text-4xl">
                &copy; 2022 - {new Date().getFullYear()} TheHigherUps
            </div>
            <div>
                <nav className="flex gap-4 text-xl ">
                    <Link href="www.thehigherups.org" className="underline">
                        Main Website
                    </Link>
                    <span className=" bg-white/50 self-center rounded-full w-1 h-1"></span>
                    <Link href="/credits" className="underline">
                        Credits
                    </Link>
                    <span className=" bg-white/50 self-center rounded-full w-1 h-1"></span>

                    <Link
                        href="www.thehigherups.org/contact"
                        className="underline"
                    >
                        Contact
                    </Link>
                    <span className=" bg-white/50 self-center rounded-full w-1 h-1"></span>

                    <Link
                        href="www.thehigheups.org/terms"
                        className="underline"
                    >
                        Terms
                    </Link>
                </nav>
            </div>
        </footer>
    )
}
