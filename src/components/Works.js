import React from "react";
import Counter1 from '../images/counter1.png';
import Counter2 from '../images/counter2.png';
import Counter3 from '../images/counter3.png';
import BorroeFlow from '../images/Borroe-Flow.png';

const Works = () => {
    return (
        <>
            <div className="px-3 py-12 md:py-16 lg:py-24 xl:px-0 bg-vulcan">
                '<div className="mx-auto max-w-7xl">
                    <div className="grid">
                        <div className="max-w-3xl mx-auto grid text-center justify-center">
                            <h1 className="font-bold text-white text-3xl md:text-5xl">How It Works</h1>
                            <p className="text-white mt-4 font-normal text-sm md:text-lg lg:mt-8 lg:text-xl">The platform integrates AI-powered risk assessment, secure blockchain technology, and streamlined payment solutions, providing a safe and efficient fundraising process. This encourages buyers to easily sell and trade future recurring revenue NFTs directly with each other on secondary markets, fostering a truly peer-to-peer ecosystem.<br />
                                <br />Sellers can offer large discounts and other incentives to encourage the community to fund their requests. Follow the path from seller, marketplace to buyer below.</p>
                        </div>
                        <div>
                            <div>
                                <nav className="mt-10 mb-14 justify-center flex space-x-10 sm:space-x-14 lg:mt-14 lg:mb-20 lg:space-x-20">
                                    <span className="text-sky-600  border-sky-600 hover:border-sky-600   px-1 font-bold py-2 border-b-4 text-sm sm:text-lg lg:text-xl cursor-pointer">Invoice Seller</span>
                                    <span className="text-sky-600  border-transparent hover:border-sky-600  px-1 font-bold py-2  border-b-4 text-sm sm:text-lg lg:text-xl cursor-pointer">Marketplace </span>
                                    <span className="text-sky-600  border-transparent hover:border-sky-600  px-1 font-bold py-2  border-b-4 text-sm sm:text-lg lg:text-xl cursor-pointer">Invoice buyer</span>
                                </nav>
                            </div>
                        </div>
                        <div className="grid items-center gap-x-10 grid-cols-2 gap-y-6 lg:grid-cols-3 lg:gap-y-0 xl:gap-x-0">
                            <div className="col-span-full gap-y-8 grid grid-cols-1 sm:grid-cols-2 md:gap-y-0 md:flex md:grid-cols-none lg:col-span-1 lg:grid lg:gap-y-10">
                                <div className="space-x-5 lg:flex">
                                    <img className="object-contain w-6 h-6 xl:w-8 xl:h-8" alt="counter1" src={Counter1} />
                                    <span className="space-y-2 xl:space-y-4">
                                        <h1 className="font-bold text-white text-base xl:text-lg">Seller Sign Up</h1>
                                        <p className="text-gray-500 font-normal text-sm xl:text-base">Web3 business signs up to Tito and connects banking, payment processing, accounting software or uploads receivables and invoices</p>
                                    </span>
                                </div>
                                <div className="space-x-5 lg:flex">
                                    <img className="object-contain w-6 h-6 xl:w-8 xl:h-8" alt="counter2" src={Counter2} />
                                    <span className="space-y-2 xl:space-y-4">
                                        <h1 className="font-bold text-white text-base xl:text-lg">Revenue Type</h1>
                                        <p className="text-gray-500 font-normal text-sm xl:text-base">Seller confirms revenue type i.e. subscriptions, receivables, royalties, management fees etc</p>
                                    </span>
                                </div>
                                <div className="space-x-5 lg:flex">
                                    <img className="object-contain w-6 h-6 xl:w-8 xl:h-8" alt="counter3" src={Counter3} />
                                    <span className="space-y-2 xl:space-y-4">
                                        <h1 className="font-bold text-white text-base xl:text-lg">Tito Terms</h1>
                                        <p className="text-gray-500 font-normal text-sm xl:text-base">Seller confirms invoice amount and discount amount required for funding, length of contract, any extra incentives for buyers and if seller wants company name to be made public or remain anonymous</p>
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-10 col-span-2 justify-end grid">
                                <img className="w-auto" alt="Borroe-Flow" src={BorroeFlow} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Works;