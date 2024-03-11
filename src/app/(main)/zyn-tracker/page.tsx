export default function Page() {
    return (
        <main className="min-h-[calc(100vh-3rem)] grid place-items-center">
            <div className="flex flex-col gap-4">
                <h2 className="text-5xl">TheHigherUps ZYN Tracker</h2>
                <form className="text-3xl" action="">
                    <label htmlFor="flavor">Select Flavor:</label>
                    <select
                        name="flavor"
                        id="flavor"
                        className="text-black ml-2"
                    >
                        <option value="">Citrus</option>
                        <option value="">Peppermint</option>
                        <option value="">Cool Mint</option>
                        <option value="">Coffee</option>
                        <option value="">Wintergreen</option>
                        <option value="">Bellini</option>
                        <option value="">Cucumber Lime</option>
                        <option value="">Violet Licorice</option>
                    </select>
                    <div className="flex gap-4">
                        <div>Select Strenth:</div>
                        <label htmlFor="3">3mg</label>
                        <input name="mg" id="3" type="radio" />
                        <label htmlFor="6">6mg</label>
                        <input name="mg" id="6" type="radio" />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-800 rounded-md px-4 w-full"
                    >
                        Zyn O&apos;clock!
                    </button>
                </form>
            </div>
        </main>
    )
}
