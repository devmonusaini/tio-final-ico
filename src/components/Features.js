import React from "react";
import icon1 from '../images/feature-login-icon.png';
import icon2 from '../images/feature-currency-icon.png';
import icon3 from '../images/feature-wallet-icon.png';
import icon4 from '../images/feature-coin-icon.png';
import icon5 from '../images/feature-notifications-icon.png';
import icon6 from '../images/feature-finance-icon.png';
import vedio from "../videos/Phone-Money-Animation.mp4"
// import Phone from '../videos/Phone-Money-Animation.mp4';


const Features = () => {
    return (
        <>
            <div className="ComponentSection_contentContainer__1BwhD h-fit w-screen">
                <div className=" h-screen md:h-auto mx-auto max-w-7xl  space-y-14 lg:space-y-20">
                    <div className="mx-auto grid text-center justify-center  max-w-3xl space-y-5">
                        <h1 className="font-bold text-white text-3xl md:text-5xl">Features and Benefits</h1>
                        <p className="text-white mt-4 font-normal text-sm lg:mt-8 lg:text-base xl:text-lg">$TITO is the governance token and the gateway to all the features on the Borroe marketplace, giving holders benefits including:</p>
                    </div>
                    <div className="grid items-center grid-cols-1 gap-y-6 lg:grid-cols-4  lg:gap-y-0">
                        <div className="lg:gap-x-10 md:gap-x-4 gap-x-0 lg:pr-4 grid justify-between gap-y-5 grid-cols-1 sm:grid-cols-2 md:gap-y-0 md:grid-cols-3 lg:gap-y-6 lg:grid-cols-1 xl:gap-y-12">
                            <div className="flex space-x-4">
                                <span className="lg:text-right xl:space-y-1">
                                    <h1 className="font-bold text-white text-base lg:text-lg xl:text-xl">Notification</h1>
                                    <p className="text-white font-normal text-xs lg:text-sm xl:text-base">Priority notification of new sales and repeat funding applications.</p>
                                </span>
                                <img className="w-10 object-contain lg:w-14 xl:w-16" alt="feature-login-icon" src={icon1} />
                            </div>
                            <div className="space-x-4 flex"><span className="lg:text-right xl:space-y-1">
                                <h1 className="font-bold text-white text-base lg:text-lg xl:text-xl">Discounted Fees</h1>
                                <p className="text-white font-normal text-xs lg:text-sm xl:text-base">Discounts on marketplace and any associated transaction fees.</p>
                            </span>
                                <img className="w-10 object-contain lg:w-14 xl:w-16" alt="feature-currency-icon" src={icon2} />
                            </div>
                            <div className="space-x-4 flex">
                                <span className="lg:text-right xl:space-y-1">
                                    <h1 className="font-bold text-white text-base lg:text-lg xl:text-xl">Premium Features</h1>
                                    <p className="text-white font-normal text-xs lg:text-sm xl:text-base">Access to Premium Features like advanced analytics and priority customer support.</p>
                                </span>
                                <img className="w-10 object-contain lg:w-14 xl:w-16" alt="feature-currency-icon" src={icon3} />

                            </div>
                        </div>
                        <div className="justify-self-center lg:col-span-2 ">
                            <video autoplay="" loop="" playsinline="" className="hidden lg:block ">
                                <source src={vedio} type="video/mp4" /></video>
                        </div>
                        <div className="lg:gap-x-10 md:gap-x-4 gap-x-0 lg:pl-4 justify-between gap-y-5 grid grid-cols-1 sm:grid-cols-2 md:gap-y-0 md:grid-cols-3 lg:gap-y-6 lg:grid-cols-1 xl:gap-y-12">
                            <div className="flex space-x-4">
                                <img className="w-10 object-contain lg:w-14 xl:w-16" alt="feature-currency-icon" src={icon4} />
                                <span className="text-left xl:space-y-1">
                                    <h1 className="font-bold text-white text-base lg:text-lg xl:text-xl">Rewards &amp; incentives</h1>
                                    <p className="text-white font-normal text-xs lg:text-sm xl:text-base">Includes invoice buying, selling and repayment rewards as well as social media share2earn.</p>
                                </span>
                            </div>
                            <div className="flex space-x-4">
                                <img className="w-10 object-contain lg:w-14 xl:w-16" alt="feature-currency-icon" src={icon5} />
                                <span className="text-left xl:space-y-1">
                                    <h1 className="font-bold text-white text-base lg:text-lg xl:text-xl">Recognition and awards</h1>
                                    <p className="text-white font-normal text-xs lg:text-sm xl:text-base">Acknowledgement of buyer marketplace participation incl Funder of The Year Award.</p>
                                </span>
                            </div>
                            <div className="flex space-x-4">
                                <img className="w-10 object-contain lg:w-14 xl:w-16" alt="feature-currency-icon" src={icon6} />
                                <span className="text-left xl:space-y-1">
                                    <h1 className="font-bold text-white text-base lg:text-lg xl:text-xl">Governance Membership</h1>
                                    <p className="text-white font-normal text-xs lg:text-sm xl:text-base">Entitles members to vote on certain topics and earn rewards for doing so.</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="grid justify-center">
                        <button className="rounded-md shadow-sm font-bold py-3 bg-gradient-to-r to-fuchsia-600 from-sky-600 text-white px-4 text-center text-sm w-44 sm:w-60 lg:py-4 xl:py-5 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">Join Presale</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Features;
