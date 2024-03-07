import React from "react";
import whitePaper from "../images/whitepaper/TITO_WHITE_PAPER.pdf";

const Future = () => {
  return (
    <>
      <div className="px-3 py-14 border-t border-neutral-700 bg-vulcan">
        <div className="max-w-7xl mx-auto rounded-lg grid justify-center text-center py-10 lg:py-24 px-6 md:px-0 bg-gradient-to-r from-gray-900 to-gray-800">
          <div className="max-w-2xl mx-auto">
            <h1 className="font-bold text-white  text-3xl md:text-5xl">
              Put your future income to work by converting it to liquidity you
              need today.
            </h1>
          </div>
          <div className="justify-center flex mt-6 py-8 gap-x-4 sm:flex-row">
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
              className="rounded-md shadow-sm font-bold py-3 bg-gradient-to-r to-fuchsia-600 from-sky-600 text-white px-4 w-full text-center text-sm sm:w-40 md:w-52 lg:py-4 xl:px-8 xl:py-6 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300"
            >
              Join Presale
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Future;
