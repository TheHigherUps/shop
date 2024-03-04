import { Metadata } from "next"
import AccountPage from "./AccountPage"

export const metadata: Metadata = {
    title: "TheHigherUps Accounts",
    description:
        "View, manage, and check the status of your orders with TheHigherUps Accounts",
}

export default function Page() {
    return <AccountPage />
}
