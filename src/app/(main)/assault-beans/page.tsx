import { Metadata } from "next"
import AssaultBeans from "./AssaultBeans"

export const metadata: Metadata = {
    metadataBase: new URL("https://beta-shop.thehigherups.org"),

    title: "Assault Beans -- TheHigherUps Shop",
    description:
        "The best self defense product, disguised as beans it can fit into a purse or bag and stay hidden. All you have to do is open the can and then throw it.",
    openGraph: {
        title: "Assault Beans -- TheHigherUps Shop",
        description:
            "The best self defense product, disguised as beans it can fit into a purse or bag and stay hidden. All you have to do is open the can and then throw it.",
        type: "website",
        url: "https://shop.thehigherups.org/assault-beans",
        images: ["/assets/images/assault-beans.png"],
    },
    twitter: {
        card: "summary",
        site: "@thehigherupsorg",
        creator: "@thehigherupsorg",
        title: "Assault Beans -- TheHigherUps Shop",
        description:
            "The best self defense product, disguised as beans it can fit into a purse or bag and stay hidden. All you have to do is open the can and then throw it.",
        images: ["/assets/images/assault-beans.png"],
    },
}
export default function AssualtBeansPage() {
    return <AssaultBeans />
}
