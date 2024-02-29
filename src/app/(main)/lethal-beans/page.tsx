import { Metadata } from "next"
import LethalBeans from "./LethalBeans"

export const metadata: Metadata = {
    metadataBase: new URL("https://beta-shop.thehigherups.org"),

    title: "Lethal Beans -- TheHigherUps Shop",
    description:
        "Looking for instant removal of your target? Then Lethal Beans is the right product for you. Turn your target into literal ash with just a shake of the can.",
    openGraph: {
        title: "Lethal Beans -- TheHigherUps Shop",
        description:
            "Looking for instant removal of your target? Then Lethal Beans is the right product for you. Turn your target into literal ash with just a shake of the can.",
        type: "website",
        url: "https://shop.thehigherups.org/lethal-beans",
        images: ["/assets/images/lethal-beans.png"],
    },
    twitter: {
        card: "summary",
        site: "@thehigherupsorg",
        creator: "@thehigherupsorg",
        title: "Lethal Beans -- TheHigherUps Shop",
        description:
            "Looking for instant removal of your target? Then Lethal Beans is the right product for you. Turn your target into literal ash with just a shake of the can.",
        images: ["/assets/images/lethal-beans.png"],
    },
}

export default function Page() {
    return <LethalBeans />
}
