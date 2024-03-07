import React from "react";
import img1 from "../images/social_logo/twitter.png";
import img2 from "../images/social_logo/telegram.png";
import img3 from "../images/social_logo/youtube.png";
import whitePaper from "../images/whitepaper/TITO_WHITE_PAPER.pdf";

const Community = () => {
  return (
    <>
      <div className="px-3 py-14  bg-vulcan">
        <div className="max-w-7xl mx-auto rounded-lg grid justify-center text-center bg-gradient-to-r from-gray-900 to-gray-800 py-10 lg:py-20">
          <h1 className="font-bold text-white  text-3xl md:text-5xl">
            Join Our Community
          </h1>
          <p className="text-white font-semibold mt-4 text-base sm:text-2xl md:text-3xl lg:mt-8">
            Presale is now LIVE
          </p>
          <p className="font-semibold text-sky-600 mt-4 text-sm sm:text-lg">
            New To Cryptocurrencies - Contact us for help
          </p>
          <div className="gap-x-4 mb-10 mt-6 flex flex-col space-y-3 sm:flex-row sm:space-y-0 md:mt-8 lg:mb-14">
            <a
              className="rounded-md shadow-sm font-bold py-3 text-[10px] bg-gradient-to-r to-fuchsia-200 from-blue-100 text-neutral-900 px-4 w-full text-center sm:w-40 md:w-52 lg:py-4 lg:text-sm lg:w-60 xl:px-8 xl:py-5 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300"
              href={whitePaper}
              target="_blank"
              rel="noreferrer"
            >
              Download Whitepaper
            </a>
            <a
              className="rounded-md shadow-sm font-bold py-3 text-[10px] bg-gradient-to-r to-fuchsia-600 from-sky-600 text-white px-4 w-full text-center sm:w-40 md:w-52 lg:py-4 lg:text-sm lg:w-60 xl:px-8 xl:py-5 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300"
              href="/"
            >
              Contact Us
            </a>
            {/* <a
              className="rounded-md text-white shadow-sm bg-transparent font-bold border border-neutral-500 py-3 text-[10px] px-4 w-full text-center sm:w-40 md:w-52 lg:py-4 lg:text-sm lg:w-60 xl:px-8 xl:py-5 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300"
              href="/howtobuy"
            >
              How To Buy
            </a> */}
          </div>
          {/* <div className="flex justify-center items-center space-x-2 sm:space-x-6">
            <a
              href="https://twitter.com/Borroe_Finance"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-10 md:w-12 xl:w-16  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300"
                alt="twitter"
                src={img1}
              />
            </a>
            <a
              href="https://t.me/borroefinanceofficial"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-10 md:w-12 xl:w-16  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300"
                alt="telegram-community"
                src={img2}
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCGGW8A-mhsM7CU4hTcP1Imw"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-10 md:w-12 xl:w-16  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300"
                alt="youtube"
                src={img3}
              />
            </a>
            <a
              href="https://discord.gg/6yZRk7eFuV"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="66 "
                height="66"
                fill="#fff"
                className="w-10 h-10 md:w-12 md:h-12  lg:w-16 lg:h-16  border border-[#3c404e] rounded-full md:p-3 lg:p-4 p-2  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300"
                viewBox="0 0 16 16"
              >
                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path>
              </svg>
            </a>
            <a href="https://t.me/Borroe" target="_blank" rel="noreferrer">
              <img
                className="w-10 md:w-12 xl:w-16  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300"
                alt="telegram-News"
                src={img2}
              />
            </a>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Community;
