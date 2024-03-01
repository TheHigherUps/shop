import { Metadata } from "next"
import BannedStates from "./BannedStates"

export const metadata: Metadata = {
    title: "Banned States | Extremely Lethal Beans",
    description: "TheHigherUps Extremely Lethal Beans are banned in 39 states. States where Extremely Lethal Beans are banned. "
}

export default function Page() {
    return <BannedStates />
}
