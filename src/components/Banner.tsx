import { cn } from "@/lib/utils"

export default function Banner({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <div
            className={cn(
                "w-full min-h-12 text-center text-3xl font-bold grid place-items-center bg-[#d4d421] text-black",
                className
            )}
        >
            <div>{children}</div>
        </div>
    )
}
