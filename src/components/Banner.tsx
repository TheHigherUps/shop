export default function Banner({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full min-h-12 text-center text-3xl font-bold grid place-items-center bg-[#d4d421] text-black">
            <div>{children}</div>
        </div>
    )
}
