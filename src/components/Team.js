import React from "react";
import Line from '../images/line.png';
import linkedin from '../images/team/linkedin.png'
import Michael from '../images/team/Michael-Price.png';
import AnteaCule from '../images/team/Antea-Cule.png';
import mprishchepo from '../images/team/mprishchepo.png';



const Team = () => {
    return (<>
        <div className="mx-auto max-w-5xl md:px-0 py-10 px-3 sm:py-16 xl:py-20">
            <div className="mx-auto grid text-center justify-center max-w-2xl">
                <h1 className="font-bold text-white text-3xl md:text-5xl">Meet The Team</h1>
                <p className="text-white mt-4 font-normal text-sm lg:mt-8 lg:text-base xl:text-lg">The team is made up of seasoned business professionals, with experience in fintech, blockchain, payment processing and agency sales and marketing.</p>
            </div>
            <div className="mx-auto max-w-7xl grid mt-4 gap-x-6 grid-cols-1  md:grid-cols-3">
                <div className="text-center mt-16 md:flex items-center">
                    <div className="">
                        <img className="w-full md:w-auto " alt="michael" src={Michael} />
                        <h3 className="text-lg font-bold text-white mt-4">Michael Price</h3>
                        <img className="w-full md:w-auto my-3" alt="Michael Price" src={Line} />
                        <p className="text-white text-base font-normal">Director</p>
                        <div className="gap-x-4 flex justify-center text-center items-center md:mt-5 mt-3">
                            <a href="https://www.linkedin.com/in/michael-p-4b312892/" className=" transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300" target="_blank" rel="noreferrer">
                                <span className="sr-only">LinkedIn</span>
                                <img className="" alt="LinkedIn" src={linkedin} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-16  md:flex items-center">
                    <div className="">
                        <img className="w-full md:w-auto " alt="michael" src={mprishchepo} />
                        <h3 className="text-lg font-bold text-white mt-4">Maxim Prishchepo</h3>
                        <img className="w-full md:w-auto my-3" alt="Michael Price" src={Line} />
                        <p className="text-white text-base font-normal">Blockchain Lead</p>
                        <div className="gap-x-4 flex justify-center text-center items-center md:mt-5 mt-3">
                            <a href="https://www.linkedin.com/in/mprishchepo/" className=" transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300" target="_blank" rel="noreferrer">
                                <span className="sr-only">LinkedIn</span>
                                <img className="" alt="LinkedIn" src={linkedin} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-16  md:flex items-center">
                    <div className="">
                        <img className="w-full md:w-auto" alt="Antea Cule" src={AnteaCule} />
                        <h3 className="text-lg font-bold text-white mt-4">Antea Cule</h3>
                        <img className="w-full md:w-auto my-3" alt="Antea Cule" src={Line} />
                        <p className="text-white text-base font-normal">Brand Consultant</p>
                        <div className="gap-x-4 flex justify-center text-center items-center md:mt-5 mt-3">
                            <a href="https://hr.linkedin.com/in/antea-cule-194b6551" className=" transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300" target="_blank" rel="noreferrer">
                                <span className="sr-only">LinkedIn</span>
                                <img className="" alt="LinkedIn" src={linkedin} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </>);
}

export default Team;