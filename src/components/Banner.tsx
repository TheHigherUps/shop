export default function Banner({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full h-12 text-3xl font-bold grid place-items-center bg-[#d4d421] text-black">
            <div>{children}</div>
        </div>
    )
}
