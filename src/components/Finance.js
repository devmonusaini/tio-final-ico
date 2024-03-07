import React from "react";
import manLaptop from "../images/man-laptop.png";
import protocol_logo_1 from "../images/protocol_logo_1.png";
import protocol_logo_2 from "../images/protocol_logo_2.png";
import protocol_logo_3 from "../images/protocol_logo_3.png";
import whitePaper from "../images/whitepaper/TITO_WHITE_PAPER.pdf";

const Finance = () => {
  return (
    <>
      <div
        className="border-t border-neutral-700 px-3 space-y-12 py-16 lg:space-y-20 lg:py-20 xl:px-0 bg-vulcan "
        id="finance"
      >
        <div className="max-w-7xl mx-auto lg:grid gap-x-10 grid-cols-1 gap-y-10 lg:grid-cols-2 flex flex-col flex-col-reverse">
          <div className="items-center justify-center grid w-72 justify-self-center lg:w-96 xl:w-full">
            <img alt="manLaptop" src={manLaptop} className="rounded-lg" />
          </div>
          <div>
            <h1 className="font-bold text-white  text-3xl md:text-5xl">
              Tito Finance
            </h1>
            <p className="text-white font-normal mb-6 mt-4 text-sm leading-6 lg:text-base xl:text-xl xl:mt-6 xl:mb-10">
              Discover Tito Finance: Africa's essential governance token for the
              forthcoming crypto exchange. Uniting community influence,
              fostering financial inclusivity, and driving Africa's crypto
              landscape forward. Your stake in Africa's financial future.
            </p>
            <div className="space-y-10">
              <div className="flex space-y-2 gap-x-3 flex-col sm:flex-row xl:gap-x-5 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                <img
                  className="object-contain w-16 sm:w-20 xl:w-64"
                  alt="protocol-1"
                  src={protocol_logo_1}
                />
                <span className="space-y-2 xl:space-y-4">
                  <h1 className="font-bold text-white text-lg xl:text-[22px]">
                    Empowering the Community
                  </h1>
                  <p className="text-gray-500 font-normal text-sm xl:text-base">
                    Tito Finance unites communities, providing a voice through
                    governance. A decentralized approach ensures decisions are
                    shaped by the people, cultivating financial sovereignty
                    across Africa.
                  </p>
                </span>
              </div>
              <div className="flex space-y-2 gap-x-3 flex-col sm:flex-row xl:gap-x-5 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                <img
                  className="object-contain w-16 sm:w-20 xl:w-64"
                  alt="protocol-2"
                  src={protocol_logo_2}
                />
                <span className="space-y-2 xl:space-y-4">
                  <h1 className="font-bold text-white text-lg xl:text-[22px]">
                    African Focused Need
                  </h1>
                  <p className="text-gray-500 font-normal text-sm xl:text-base">
                    Bridge the financial gap with Tito Finance—an
                    African-centric token poised to empower millions, fostering
                    economic growth and inclusivity across the continent.
                  </p>
                </span>
              </div>
              <div className="flex space-y-2 gap-x-3 flex-col sm:flex-row xl:gap-x-5 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                <img
                  className="object-contain w-16 sm:w-20 xl:w-64"
                  alt="protocol-3"
                  src={protocol_logo_3}
                />
                <span className="space-y-2 xl:space-y-4">
                  <h1 className="font-bold text-white text-lg xl:text-[22px]">
                    Tito Exchange Advantage
                  </h1>
                  <p className="text-gray-500 font-normal text-sm xl:text-base">
                    Tito Exchange, an African innovation, leverages the Tito
                    token for seamless transactions, low fees, and localized
                    support, driving a new era of crypto accessibility.
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid max-w-7xl mx-auto">
          <div className="justify-center flex gap-x-6 sm:flex-row">
            <a
              className="rounded-md shadow-sm font-bold py-3 bg-gradient-to-r to-fuchsia-200 from-blue-100 text-neutral-900 px-4 w-full text-center text-sm sm:w-40 md:w-52 lg:py-4 xl:px-8 xl:py-6 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300"
              href={whitePaper}
              target="_blank"
              rel="noreferrer"
            >
              Read Whitepaper
            </a>
            <a
              href="/"
              className="rounded-md shadow-sm font-bold py-3 bg-gradient-to-r to-fuchsia-600 from-sky-600 text-white px-4 w-full text-center text-sm sm:w-40 md:w-52 lg:py-4 xl:px-8 xl:py-6 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer"
            >
              Join Presale
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Finance;
