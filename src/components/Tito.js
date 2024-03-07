import React from "react";
import Tokengraph from '../images/tokenomics-graph.png';
const Tito = () => {
    return (
        <>
            <div className="py-16 xl:py-20  border-t border-neutral-700 bg-vulcan" id="Tito">
                <div className="max-w-7xl mx-auto px-3 space-y-10 sm:space-y-20 xl:px-0">
                    <div>
                        <h1 className="font-bold text-white text-center text-3xl md:text-5xl">Tito</h1>
                    </div>
                    <div className="grid items-center gap-x-16 grid-cols-1 gap-y-10 lg:grid-cols-4 lg:gap-y-0 xl:gap-x-20">
                        <div className="grid gap-x-10 justify-between gap-y-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-y-0 lg:gap-y-12 lg:grid-cols-1 xl:gap-y-20">
                            <div className="grid md:items-end md:-mb-16 lg:mr-[-70px] lg:ml-[70px] lg:mb-0">
                                <span className="lg:text-right">
                                    <h1 className="font-bold text-sky-600 text-sm lg:text-base xl:text-xl">PUBLIC</h1>
                                    <p className="text-gray-500 font-normal py-2 text-xs lg:text-sm xl:text-base">50% with linear vesting over 3 months following TGE</p>
                                </span>
                            </div>
                            <div>
                                <span className="lg:text-right">
                                    <h1 className="font-bold text-sky-600 text-sm lg:text-base xl:text-xl">LIQUIDITY POOL</h1>
                                    <p className="text-gray-500 font-normal py-2 text-xs lg:text-sm xl:text-base">10% with 100% unlock at TGE</p>
                                </span>
                            </div>
                            <div>
                                <span className="text-left lg:text-right">
                                    <h1 className="font-bold text-sky-600 text-sm lg:text-base xl:text-xl">EXCHANGE LISTING</h1>
                                    <p className="text-gray-500 font-normal py-2 text-xs lg:text-sm xl:text-base">10% with 100% unlock at TGE</p>
                                </span>
                            </div>
                            <div className="grid items-end md:-mb-16 lg:mr-[-70px] lg:ml-[70px] lg:mb-0">
                                <span className="text-left lg:text-right">
                                    <h1 className="font-bold text-sky-600 text-sm lg:text-base xl:text-xl">MARKETING</h1>
                                    <p className="text-gray-500 font-normal py-2 text-xs lg:text-sm xl:text-base">10% with 100% unlock at TGE</p>
                                </span>
                            </div>
                        </div>
                        <div className="md:justify-self-center  lg:col-span-2 w-full">
                            <img alt="tokenomics Graph" src={Tokengraph} />
                        </div>
                        <div className="grid justify-between gap-x-10 gap-y-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-y-0 lg:grid-cols-1 lg:gap-y-12 xl:gap-y-20">
                            <div className="mt-0 md:-mt-16 lg:ml-[-70px] lg:mr-[70px] lg:mt-0">
                                <span className="text-left">
                                    <h1 className="font-bold text-sky-600 text-sm lg:text-base xl:text-xl">TREASURY</h1>
                                    <p className="text-gray-500 font-normal py-2 text-xs lg:text-sm xl:text-base">10% with 100% unlock at TGE</p>
                                </span>
                            </div>
                            <div>
                                <span>
                                    <h1 className="font-bold text-sky-600 text-sm lg:text-base xl:text-xl">TEAM</h1>
                                    <p className="text-gray-500 font-normal py-2 text-xs lg:text-sm xl:text-base">5% locked for 24 months</p>
                                </span>
                            </div>
                            <div>
                                <span className="text-left">
                                    <h1 className="font-bold text-sky-600 text-sm lg:text-base xl:text-xl">REWARDS</h1>
                                    <p className="text-gray-500 font-normal py-2 text-xs lg:text-sm xl:text-base">2.5% with 100% unlock at TGE</p>
                                </span>
                            </div>
                            <div className="mt-0 md:-mt-16 lg:ml-[-70px] lg:mr-[70px] lg:mt-0">
                                <span>
                                    <h1 className="font-bold text-sky-600 text-sm lg:text-base xl:text-xl">PARTNERS</h1>
                                    <p className="text-gray-500 font-normal py-2 text-xs lg:text-sm xl:text-base">2.5% locked for 24 months</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Tito;