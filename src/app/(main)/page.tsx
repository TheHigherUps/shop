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
                        href="/assault-beans-cbe"
                        price="70"
                        discount
                        discountPrice="50"
                    />

                    <Card
                        title="Lethal Beans"
                        image="/assets/images/lethal-beans.png"
                        quantity="25+"
                        price="12.00"
                        href="/lethal-beans"
                    />

                    <Card
                        title="Assault Beans"
                        image="/assets/images/assault-beans.png"
                        quantity="50+"
                        href="/assault-beans"
                        price="7.00"
                    />
                    <Card
                        title="Assault bench"
                        image="/assets/images/assault-bench.png"
                        quantity="100+"
                        href="/assault-bench"
                        price="32.00"
                    />
                </CardContainer>
            </main>
        </>
    )
}
