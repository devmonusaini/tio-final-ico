import React from "react";
import Ellipse1 from '../images/Ellipse_1.png';
import Ellipse2 from '../images/Ellipse_2.png';
import Ellipse3 from '../images/Ellipse_3.png';
import Ellipse4 from '../images/Ellipse_4.png';
import Ellipse5 from '../images/Ellipse_5.png';

import road from '../images/road.png';
const Roadmap = () => {
    return (
        <>
            <div className="px-3 py-24 border-t border-neutral-700 xl:px-0 bg-vulcan">
                <div className="h-full max-w-7xl mx-auto bg-gradient-to-r rounded-lg px-5 from-[#151a22] to-[#1a212c] sm:px-10 lg:h-[650px] xl:h-[792px]">
                    <div className="grid grid-cols-1 lg:grid-cols-6">
                        <div className="space-y-5 grid content-between py-8 col-span-2 pr-8 lg:pt-20 lg:pb-36">
                            <div className="space-y-5"><h1 className="font-bold text-white text-3xl md:text-5xl">Roadmap</h1>
                                <p className="text-white font-normal text-sm md:text-base xl:text-xl">Tito can provide much-needed liquidity to participants in the Web3 ecosystem, allowing them to access cash flow to fund ongoing operations and growth.</p>
                            </div>
                            <div className="space-y-5">
                                <p className="text-white font-medium italic mt-5 text-sm sm:mt-0 md:text-base xl:text-xl">The roadmap has built in milestones designed to support the price of $TITO tokens before, during and after TGE</p>
                            </div>
                        </div>
                        <div className="grid-cols-2 hidden sm:grid-cols-3 sm:grid md:col-span-4">
                            <div className="-ml-6 grid py-5 items-center justify-start md:pr-14 xl:-ml-4">
                                <div className="flex space-x-8 md:space-x-7">
                                    <img className="object-contain" alt="Ellipse_1" src={Ellipse1} />
                                    <h1 className="font-normal text-white text-base xl:text-lg">Release</h1>
                                </div>
                                <div className="flex justify-end space-x-8 md:-mr-20 md:space-x-7">
                                    <img className="object-contain" alt="Ellipse_2" src={Ellipse2} />
                                    <h1 className="font-normal text-white text-base xl:text-lg">Development</h1>
                                </div>
                                <div className="-mr-28 flex space-x-8 md:justify-end md:space-x-10">
                                    <img className="object-contain" alt="Ellipse_3" src={Ellipse3} />
                                    <h1 className="font-normal text-white text-base xl:text-lg">Community</h1>
                                </div>
                                <div className="-mr-28 flex space-x-8 md:justify-end">
                                    <img className="object-contain" alt="Ellipse_4" src={Ellipse4} />
                                    <h1 className="font-normal text-white text-base xl:text-lg">Launch</h1>
                                </div>
                                <div className="-mr-40 flex space-x-8 md:justify-end md:space-x-12">
                                    <img className="object-contain" alt="Ellipse_5" src={Ellipse5} />
                                    <h1 className="font-normal text-white text-base xl:text-lg">Growth</h1>
                                </div>
                            </div>
                            <div className="hidden md:block">
                                <img className="-ml-16 h-full bg-no-repeat bg-contain lg:lg:h-[650px] xl:h-[792px] xl:-ml-24" alt="road" src={road} />
                            </div>
                            <div className="items-center grid py-5 pt-10 col-span-2 justify-center sm:justify-end md:-ml-16 md:col-span-1 md:justify-start xl:-ml-28">
                                <div className="w-72 h-28 bg-no-repeat bg-contain grid pt-3 pl-28 pr-8 md:ml-[-120px] xl:w-96 xl:h-32 xl:pl-36 xl:pr-10 xl:ml-[-160px] ComponentSection_roadmap1BG__O0Khc">
                                    <p className="text-neutral-900 text-xs xl:text-base">Website, Whitepaper, Roenomics and Presale</p>
                                </div>
                                <div className="w-72 h-28 bg-no-repeat bg-contain grid pt-3 pl-28 pr-8 md:ml-[-90px] xl:w-96 xl:h-32 xl:pl-36 xl:pr-10 xl:ml-[-120px] ComponentSection_roadmap2BG__YqMuA">
                                    <p className="text-neutral-900 text-xs xl:text-base">Full security audit, smart contract and marketplace testing</p>
                                </div>
                                <div className="w-72 h-28 bg-no-repeat bg-contain grid pt-3 pl-28 pr-8 md:ml-[-60px] xl:w-96 xl:h-32 xl:pl-36 xl:pr-10 xl:ml-[-80px] ComponentSection_roadmap3BG__agQvV">
                                    <p className="text-neutral-900 text-xs xl:text-base">Community rewards and loyalty programs, global brand awareness drive</p>
                                </div>
                                <div className="w-72 h-28 bg-no-repeat bg-contain grid pt-3 pl-28 pr-8 md:ml-[-30px] xl:w-96 xl:h-32 xl:pl-36 xl:pr-10 xl:ml-[-40px] ComponentSection_roadmap4BG__kNPOV">
                                    <p className="text-neutral-900 text-xs xl:text-base">Token and marketplace launch, with listing on 3-5 top 10 exchanges</p>
                                </div>
                                <div className="w-72 h-28 bg-no-repeat bg-contain grid pt-3 pl-28 pr-8 xl:w-96 xl:h-32 xl:pl-36 xl:pr-10 ComponentSection_roadmap5BG__4dGX2">
                                    <p className="text-neutral-900 text-xs xl:text-base">New partnerships and expansion into complimentary markets</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid-cols-2 grid sm:grid-cols-3 sm:hidden md:col-span-4">
                            <div className="hidden md:block"><img className="ml-16 h-full bg-no-repeat bg-contain lg:lg:h-[650px] xl:h-[792px] xl:-ml-24" alt="road" src="../images/road.png" />
                            </div>
                            <div className="items-center grid py-5 pt-10 col-span-2 justify-center sm:justify-end md:-ml-16 md:col-span-1 md:justify-start xl:-ml-28">
                                <div className="space-y-2"><div className="flex space-x-8 md:space-x-7">
                                    <img className="object-contain" alt="Ellipse_1" src={Ellipse1} />
                                    <h1 className="font-normal text-white text-base xl:text-lg">Release</h1>
                                </div>
                                    <div className="w-72 h-28 bg-no-repeat bg-contain grid pt-5 pl-28 pr-8 -ml-6 md:ml-[-120px] xl:w-96 xl:h-32 xl:pl-36 xl:pr-10 xl:ml-[-160px]  ComponentSection_roadmap1BG__O0Khc">
                                        <p className="text-neutral-900 text-xs xl:text-base ml-4">Website, Whitepaper, Roenomics and Presale</p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex space-x-8 md:space-x-7">
                                        <img className="object-contain" alt="Ellipse_2" src={Ellipse2} />
                                        <h1 className="font-normal text-white text-base xl:text-lg">Development</h1>
                                    </div>
                                    <div className="w-72 h-28 bg-no-repeat bg-contain grid pt-5 pl-28 pr-8 -ml-6 md:ml-[-120px] xl:w-96 xl:h-32 xl:pl-36 xl:pr-10 xl:ml-[-160px]  ComponentSection_roadmap2BG__YqMuA">
                                        <p className="text-neutral-900 text-xs xl:text-base  ml-4">Full security audit, smart contract and marketplace testing</p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex space-x-8 md:space-x-7">
                                        <img className="object-contain" alt="Ellipse_3" src={Ellipse3} />
                                        <h1 className="font-normal text-white text-base xl:text-lg">Community</h1>
                                    </div>
                                    <div className="w-72 h-28 bg-no-repeat bg-contain grid pt-5 pl-28 pr-8 -ml-6 md:ml-[-120px] xl:w-96 xl:h-32 xl:pl-36 xl:pr-10 xl:ml-[-160px]  ComponentSection_roadmap3BG__agQvV">
                                        <p className="text-neutral-900 text-xs xl:text-base  ml-4">Community rewards and loyalty programs, global brand awareness drive</p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex space-x-8 md:space-x-7">
                                        <img className="object-contain" alt="Ellipse_4" src={Ellipse1} />
                                        <h1 className="font-normal text-white text-base xl:text-lg">Launch</h1>
                                    </div>
                                    <div className="w-72 h-28 bg-no-repeat bg-contain grid pt-5 pl-28 pr-8 -ml-6 md:ml-[-120px] xl:w-96 xl:h-32 xl:pl-36 xl:pr-10 xl:ml-[-160px]  ComponentSection_roadmap4BG__kNPOV">
                                        <p className="text-neutral-900 text-xs xl:text-base  ml-4">Token and marketplace launch, with listing on 3-5 top 10 exchanges</p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex space-x-8 md:space-x-7">
                                        <img className="object-contain" alt="Ellipse_5" src={Ellipse5} />
                                        <h1 className="font-normal text-white text-base xl:text-lg">Growth</h1>
                                    </div>
                                    <div className="w-72 h-28 bg-no-repeat bg-contain grid pt-5 pl-28 pr-8 -ml-6 md:ml-[-120px] xl:w-96 xl:h-32 xl:pl-36 xl:pr-10 xl:ml-[-160px]  ComponentSection_roadmap5BG__4dGX2 ">

                                        <p className="text-neutral-900 text-xs xl:text-base  ml-4">New partnerships and expansion into complimentary markets</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Roadmap;