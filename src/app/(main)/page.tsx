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
                <div className="text-center text-4xl py-4">Products</div>
                <CardContainer>
                    <Card
                        titleExtra={
                            <div className="rounded-full bg-gray-500/75 grid place-items-center px-1 text-xl text-yellow-300">
                                (Cool Beans Edition)
                            </div>
                        }
                        image="/assets/images/assault-beans.png"
                        title="Assault beans"
                        quantity="10"
                        quantityExtra={
                            <span className="text-red-500 text-2xl">
                                (Selling Fast!)
                            </span>
                        }
                        href="55"
                        price="123"
                        discount
                        discountPrice="12"
                    />

                    <Card
                        title="Lethal Beans"
                        image="/assets/images/lethal-beans.png"
                        quantity="25+"
                        price="12.00"
                        href="/lethal-beans"
                    />
                </CardContainer>
            </main>
        </>
    )
}
