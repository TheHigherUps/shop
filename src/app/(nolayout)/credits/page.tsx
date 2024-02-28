import Link from "next/link"

export default function Credits() {
    return (
        <>
            <div className="p-8 text-black flex flex-col gap-8">
                <Link className="underline" href="/">
                    Return Home
                </Link>
                <h1 className="text-4xl">
                    Credits for Assets Used on TheHigherUps Shop
                </h1>
                <fieldset className="border border-black p-2 ">
                    <legend>TheHigherUps Content Warning</legend>
                    <div className="font-extrabold">
                        This website may contain content that is offensive to
                        some users
                    </div>
                    <div className="font-extrabold">
                        The following content may include, but is not limted to:
                    </div>
                    <ul className="list-disc ml-8 font-extrabold">
                        <li>Beans</li>
                        <li>Benches</li>
                        <li>Bitches</li>
                        <li>Cool Beans</li>
                        <li>Super Cool Beans</li>
                        <li>Whistles</li>
                        <li>Pipes</li>
                        <li>Telescopes</li>
                        <li>Multitle Editions</li>
                        <li>Racism</li>
                        <li>Extreme Racism</li>
                        <li>Super Racism</li>
                        <li>Super Extreme Rasicm</li>
                        <li>Rape</li>
                        <li>Extreme Rape</li>
                        <li>Double Rape</li>
                        <li>Possibly Suicide... idk</li>
                        <li>Pedophilia</li>
                        <li>Self Harm</li>
                        <li>Extreme Homophobia*</li>
                        <li>Extreme Transphobia*</li>
                        <li>Hallucinations</li>
                        <li>Violence</li>
                        <li>Extreme Violence</li>
                        <li>Incest</li>
                        <li>Explosives</li>
                        <li>Sitting Down</li>
                        <li>The Ability to Sit Down</li>
                        <li>Typing</li>
                        <li>The Ability to Type</li>
                        <li>Speaking</li>
                        <li>The Ability to Speak</li>
                        <li>Words</li>
                        <li>Reading</li>
                        <li>The Ability to Read</li>
                        <li>Numbers</li>
                        <li>Buttons</li>
                        <li>The Color Blue</li>
                        <li>Extreme Use of the Color Blue</li>
                        <li>The Color Red</li>
                        <li>The Color Green</li>
                        <li>The Color White</li>
                        <li>The Color Black**</li>
                        <li>The Color Dark White</li>
                        <li>The Color Yellow</li>
                        <li>The Color Orange</li>
                        <li>The Time</li>
                        <li>The Display of the Current Time</li>
                    </ul>
                    <div>*TheHigherUps are fully in support of this</div>
                    <div>**This is the scariest color, please be careful</div>
                </fieldset>
                <section>
                    <h2 className="text-3xl">
                        Website Design and Fullstack Development
                    </h2>
                    <li className="list-disc indent-8">
                        TheHigherUps Classified
                    </li>
                </section>
                <section>
                    <h2 className="text-3xl">Music</h2>
                    <ul className="list-disc ml-8">
                        <li>
                            <Link
                                href="https://Audionautix.com"
                                className="underline"
                            >
                                Creative Commons Music by Jason Shaw on
                                Audionautix.com
                            </Link>
                            <ul className="list-disc ml-8">
                                <li>Penny Whistle</li>
                                <li>Whoopsy!!</li>
                            </ul>
                            <li>
                                Vaction - Welcome to the Game || Reflect Studios
                            </li>
                            <li>
                                Background Music Taken From{" "}
                                <Link
                                    href="https://www.youtube.com/watch?v=lmOYJ7bi_2M"
                                    className="underline"
                                >
                                    HERE
                                </Link>
                            </li>
                            <li>Synthelicious - Jason Farnham</li>
                            <li>Detour - Gunnar Olsen</li>
                        </li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-3xl">Pictures</h2>
                    <ul className="ml-8 list-disc">
                        <li>Product Photos</li>
                        <ul className="ml-8 list-disc">
                            <li>
                                <Link href="https://thehardwaresupply.com/products/creekvine-designs-8-cedar-park-style-picnic-table-with-attached-benches-wf6454-2cvdcvd?currency=USD&utm_medium=cpc&utm_source=google&utm_campaign=Google%20Shopping">
                                    Assault Bench Photo
                                </Link>
                            </li>
                            <li>
                                <Link href="https://dpfdeleteshop.com/products/dpf-cat-delete-pipe-ford-powerstroke-diesel-6-7-11-16">
                                    Assault Pipe
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.publicdomainpictures.net/en/view-image.php?image=248908&picture=orange-whistle">
                                    Assault Whistle Photo
                                </Link>
                            </li>
                            <li>Assault Beans Photo</li>
                            <li>Lethal Beans Photo</li>
                        </ul>
                    </ul>
                    <ul className="ml-8 list-disc">
                        <li>Shop Background Hero Image</li>
                        <Link href={"https://ui.aceternity.com"}>
                            Aceternity UI
                        </Link>
                    </ul>
                </section>
                <Link className="underline" href="/">
                    Return Home
                </Link>
            </div>
            <footer className="flex flex-col justify-center items-center text-black">
                <span>TheHigherUps Classified</span>
                <span>2024</span>
            </footer>
        </>
    )
}
