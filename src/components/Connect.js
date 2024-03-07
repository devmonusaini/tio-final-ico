import React from "react";
import telegram from "../images/telegram.png";
import email from "../images/email_image.png";
import twitter from "../images/twitter_image.png";

const Connect = () => {
    return (<>
        <div className="px-3 py-24 border-y border-neutral-700 xl:px-0 bg-vulcan">
            <div className="max-w-7xl mx-auto bg-gradient-to-r rounded-lg grid from-[#151a22] to-[#1a212c] grid-cols-1 py-6 px-6 sm:py-10 sm:px-14 lg:py-12 lg:grid-cols-10 xl:py-16">
                <div className="content-center grid col-span-4">
                    <h1 className="font-bold text-white text-2xl sm:text-3xl xl:text-5xl">Ways to connect with the community</h1>
                </div>
                <div className="col-span-1">
                </div>
                <div className="grid gap-x-10 col-span-5 space-y-6 xl:gap-x-0 xl:space-y-12">
                    <div className="grid grid-cols-12 rounded-md bg-gradient-to-r from-[#33485f] to-[#41325a] w-full py-4 lg:mr-24 lg:-ml-24 xl:py-6 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                        <div className="pt-6 col-span-1 -ml-4 sm:-ml-8 xl:-ml-12">
                            <img className="w-10 sm:w-14 md:w-16 lg:w-14 xl:w-full transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300" alt="discord_image" src={telegram} />

                        </div>
                        <div className="pr-10 col-span-11 space-y-2 ml-4 sm:ml-1 md:ml-2 lg:ml-4 xl:ml-8 xl:space-y-4">
                            <h1 className="text-white font-bold text-base xl:text-xl">Join our Telegram</h1>
                            <p className="text-white font-normal text-xs sm:text-sm xl:text-base">Join the Web3 conversation and stay up to date</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 rounded-md bg-gradient-to-r from-[#33485f] to-[#41325a] w-full py-4 lg:-ml-12 lg:mr-12 xl:py-6 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                        <div className="pt-6 col-span-1 -ml-4 sm:-ml-8 xl:-ml-9">
                            <img className="w-10 sm:w-14 md:w-16 lg:w-14 xl:w-full transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300" alt="twitter_image" src={twitter} />

                        </div>
                        <div className="pr-10 col-span-11 space-y-2 ml-4 sm:ml-1 md:ml-2 lg:ml-4 xl:ml-8 xl:space-y-4">
                            <h1 className="text-white font-bold text-base xl:text-xl">Follow us on Twitter</h1>
                            <p className="text-white font-normal text-xs sm:text-sm xl:text-base">Follow our journey and receive updates</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 rounded-md bg-gradient-to-r from-[#33485f] to-[#41325a] py-6 xl:py-10 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                        <div className="pt-6 col-span-1 -ml-4 sm:-ml-8 xl:-ml-11">
                            <img className="w-10 sm:w-14 md:w-16 lg:w-14 xl:w-full transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300" alt="email_image" src={email} />
                        </div>
                        <div className="pr-10 col-span-11 space-y-2 ml-4 sm:ml-1 md:ml-2 lg:ml-4 xl:ml-8 xl:space-y-4">
                            <h1 className="text-white font-bold text-base xl:text-xl">Get our Newsletter</h1>
                            <p className="text-white font-normal text-xs sm:text-sm xl:text-base">Receive bonuses, rewards and more</p>
                            <form className="" action="#" method="post" data-hs-cf-bound="true">
                                <div className="grid gap-x-3 grid-cols-1 space-y-2 sm:grid-cols-3 sm:space-y-0">
                                    <div className="rounded-lg bg-gradient-to-r from-blue-100 to-fuchsia-200 p-1 sm:col-span-2 lg:p-2 xl:p-4">
                                        <input className="bg-transparent placeholder-white::placeholder focus:outline-none text-neutral-900" name="amount" placeholder="" />
                                    </div>
                                    <a className="rounded-md shadow-sm font-bold bg-gradient-to-r to-fuchsia-600 from-sky-600 text-white px-4 text-center text-sm py-2 xl:py-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300" href="#">Sign up</a>
                                </div>
                                <div className="gap-x-3 flex mt-2 md:mt-3">
                                    <input type="checkbox" className="rounded-md bg-gradient-to-r from-blue-100 to-fuchsia-200 p-2 sm:p-2.5 lg:p-2 xl:p-2.5" />
                                    <p className="text-white text-[13px] font-normal lg:text-xs xl:text-[13px] md:mt-1">Agree to T&amp;C's. We won't spam you.</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
    );
}
export default Connect;