import Card from "@/components/Card"
import CardContainer from "@/components/CardContainer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import TimeDisplay from "@/components/TimeDisplay"

export default function Home() {
    return (
        <>
            <Hero />
            <TimeDisplay />
            <main className="min-h-screen bg-[#2d6c9c]">
                tolve
                <CardContainer>
                    <Card
                        titleExtra={
                            <div className="rounded-full bg-gray-500/75 grid place-items-center px-1 text-xl text-yellow-300">
                                (Cool Beans Edition)
                            </div>
                        }
                        image="/"
                        title="Tolve"
                        quantity="123"
                        href="123"
                        price="123"
                    />
                </CardContainer>
            </main>
        </>
    )
}
