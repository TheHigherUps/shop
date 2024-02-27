export default function CardContainer({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="w-full md:w-[787px] mx-auto min-h-[350px] bg-white text-black rounded-xl py-4 flex flex-col gap-8">
            {children}
        </div>
    )
}