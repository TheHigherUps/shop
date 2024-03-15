"use client"

import { createRef, useCallback, useState } from "react"
import Banner from "@/components/Banner"

export default function Page() {
    const closeButton = createRef<HTMLButtonElement>()
    const container = createRef<HTMLDivElement>()
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const styles = {
        transform: `translate(${x}px, ${y}px)`,
    }
    const moveButton = useCallback(() => {
        const x = Math.random() * -300
        const y = Math.random() * (300 - 150) + 150
        if (container.current) {
            if (x > container.current.clientWidth) {
                setX(container.current.clientWidth)
            } else {
                setX(x)
            }
            if (y > container.current.clientHeight) {
                setY(container.current.clientHeight)
            } else {
                setY(y)
            }
        }
    }, [container, x, y])
    return (
        <>
            <main className="min-h-page grid place-items-center">
                <div
                    ref={container}
                    className="w-3/4 h-3/4 rounded-lg bg-white relative z-10 text-black p-4"
                >
                    <button
                        className="text-5xl text-red-500 absolute top-2 right-4  z-20"
                        style={styles}
                        onMouseEnter={moveButton}
                        ref={closeButton}
                        onClick={() => {
                            alert("Click")
                        }}
                    >
                        X
                    </button>
                    <h1 className="text-5xl">ANNOYING POPUP</h1>
                    <p className="text-3xl">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aut eos esse eum excepturi ipsum laudantium omnis
                        quibusdam recusandae tempore, temporibus. Ea eos facere
                        iusto, laborum minima minus obcaecati. A, aliquam amet
                        architecto, dolore dolores eius et eum ex iste, maiores
                        minima nisi praesentium quis sequi tempore voluptates
                        voluptatibus. Asperiores in neque placeat sint
                        voluptate. Consectetur corporis doloribus ex
                        exercitationem harum illo inventore maiores nisi quae
                        quasi reiciendis repellendus repudiandae sit tempora,
                        temporibus tenetur vel velit voluptatum? Aspernatur
                        dignissimos facere impedit maxime nemo nesciunt quam,
                        qui saepe! Eligendi magnam repudiandae sint ut. Ab cum
                        dicta esse impedit, magnam ut veniam vero!
                    </p>
                </div>
            </main>
        </>
    )
}
