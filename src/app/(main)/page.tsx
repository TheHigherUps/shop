import Home from "@/app/(main)/Home"
import { Suspense } from "react"

export default function Page() {
    return (
        <Suspense>
            <Home />
        </Suspense>
    )
}
