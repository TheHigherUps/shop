import { Suspense } from "react"

export default function CardContainer({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="w-fit  mx-auto min-h-[350px] bg-white text-black rounded-xl py-4 md:px-4 mb-24 flex flex-col xl:grid gap-8 grid-cols-2 auto-cols-auto">
            <Suspense>{children}</Suspense>
        </div>
    )
}
