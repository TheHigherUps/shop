import Banner from "@/components/Banner"
import Card from "@/components/Card"
import CardContainer from "@/components/CardContainer"
import Hero from "@/components/Hero"
import TimeDisplay from "@/components/TimeDisplay"

export default function Home() {
    return (
        <>
            <Banner>
                This website is in beta and is currently under construction
            </Banner>
            <Hero />
            <TimeDisplay />
            <main className="min-h-screen bg-[#2d6c9c]">
                <div className="text-center text-6xl py-4">Products</div>
                <CardContainer>
                    <Card
                        titleExtra={
                            <div className="rounded-full bg-gray-500/75 grid place-items-center px-1 text-xl text-yellow-300">
                                (Cool Beans Edition)
                            </div>
                        }
                        image="/assets/images/assault-beans.png"
                        title="Assault Beans"
                        quantity="10"
                        quantityExtra={
                            <span className="text-red-500 text-2xl">
                                (Selling Fast!)
                            </span>
                        }
                        href="/assault-beans-cbe"
                        price="70"
                        increasedPrice="70"
                        discount
                        discountPrice="50"
                        increasedDiscountPrice="60"
                    />

                    <Card
                        title="TheHigherUps Lethal Beans"
                        image="/assets/images/lethal-beans.png"
                        quantity="25+"
                        price="12.00"
                        increasedPrice="15.00"
                        href="/lethal-beans"
                    />

                    <Card
                        title="TheHigherUps Assault Beans"
                        image="/assets/images/assault-beans.png"
                        quantity="50+"
                        href="/assault-beans"
                        price="7.00"
                        increasedPrice="12.00"
                    />
                    <Card
                        title="TheHigherUps Assault Bench"
                        image="/assets/images/assault-bench.png"
                        quantity="100+"
                        href="/assault-bench"
                        price="32.00"
                        increasedPrice="37.00"
                    />
                </CardContainer>
            </main>
        </>
    )
}
