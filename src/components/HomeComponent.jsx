import { ActionCard, CardsComponent, DramaCard } from "./CardsComponent"

export const HomeComponent = () => {
    return (
        <div className="">
            <section>
                <li className="list-none">
                    <div className="flex items-center">
                        <a href="#" className="text-white font-medium pt-3 ">All Movies</a>
                        <svg className="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                        </svg>
                    </div>
                </li>
                < section className="">
                    <CardsComponent />
                </section>
            </section>
            {/* Action Movies */}

            <li className="list-none">
                <div className="flex items-center">
                    <a href="#" className="text-white font-medium pt-3 ">Action Movies</a>
                    <svg className="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                    </svg>
                </div>
            </li>
            < section className="flex justify-center ">
                <ActionCard />
            </section>

            {/* Drama Movie */}

            <li className="list-none">
                <div className="flex items-center">
                    <a href="#" className="text-white font-medium pt-3 ">Drama Movie</a>
                    <svg className="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                    </svg>
                </div>
            </li>
            < section className="flex justify-center ">
                <DramaCard />
            </section>




        </div>

    )
}