import React from "react";
import step1 from "../images/step_1.png";
import step2 from "../images/step_2.png";
import step3 from "../images/step_3.png";
import step4 from "../images/step_4.png";
import playBtn from "../images/playBtn.png";
import Coin1 from "../images/currencies/eth.png";
import Coin2 from "../images/currencies/usdt.png";
import Coin3 from "../images/currencies/usdc.png";
import Coin4 from "../images/currencies/busd.png";
import Coin5 from "../images/currencies/bnb.png";
import Coin6 from "../images/currencies/crypto.png";
import Coin7 from "../images/currencies/btc.png";
import Coin8 from "../images/currencies/mastercard.png";
import Coin9 from "../images/currencies/visa.png";

const Explained = () => {
  return (
    <>
      <div
        className="py-10 px-3 border-t border-neutral-700 xl:px-0 bg-vulcan"
        id="howtobuy"
      >
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg px-5 py-10 sm:px-10 sm:py-16 xl:py-20">
          <div className="mx-auto grid text-center justify-center max-w-2xl">
            <h1 className="font-bold text-white text-3xl md:text-5xl">
              Tito Explained
            </h1>
            <p className="text-white mt-4 font-normal text-sm lg:mt-8 lg:text-base xl:text-lg">
              Tito believes in the power of Web3 to transform online
              interactions and empower users by giving them more ownership and
              value. <br />
              <br />
              The platform is paving the way for a new era where billions of
              people can enjoy a greater share of the value they help to create.
              <br />
              <br />
              Follow the steps below to buy $TITO:
              <br />
            </p>
          </div>
          <div className="grid gap-x-20 mt-10 grid-cols-1 gap-y-10 lg:gap-x-10 lg:grid-cols-4 lg:gap-y-0 xl:gap-x-10">
            <div>
              <div className="grid space-y-8 sm:flex sm:space-y-0 lg:grid lg:space-y-12">
                <div>
                  <img
                    className="w-24 object-contain xl:w-32"
                    alt="step_1"
                    src={step1}
                  />
                  <span>
                    <h1 className="font-bold text-white text-base my-3 xl:text-lg xl:my-4">
                      Connect Wallet
                    </h1>
                    <p className="text-gray-500 font-normal text-sm xl:text-base">
                      Click on your preferred crypto icon or connect wallet and
                      choose your preferred wallet including Metamask or Trust
                      Wallet
                    </p>
                  </span>
                </div>
                <div>
                  <img
                    className="w-24 object-contain xl:w-32"
                    alt="step_2"
                    src={step2}
                  />
                  <span>
                    <h1 className="font-bold text-white text-base my-3 xl:text-lg xl:my-4">
                      Select Payment method
                    </h1>
                    <p className="text-gray-500 font-normal text-sm xl:text-base">
                      Choose to buy with CARD and follow the onscreen process
                      via a third party provider or select ETH, BNB, USDC, USDT.
                      Alternatively, select More to see a list of over 25
                      cryptocurrencies including BTC, Litecoin, DOGE, Shiba Inu
                      etc (Enter amount and click Buy to access full crypto
                      list).
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <div className="items-center grid col-span-full lg:col-span-2 ">
              <div className="h-64 items-center justify-center rounded-lg bg-cover w-full grid content-center text-center justify-items-center space-y-6 md:h-72 lg:h-60 xl:h-72 xl:space-y-10 ComponentSection_VideoFallBackImg__uL_MJ">
                <h1 className="font-bold text-white text-2xl md:text-3xl">
                  What is Tito?
                </h1>
                <a href="/" target="_blank">
                  <img
                    className="w-16 xl:w-20 cursor-pointer"
                    alt="Youtube Play Btn"
                    src={playBtn}
                  />
                </a>
                <h1 className="text-white font-semibold text-base md:text-lg">
                  Watch Video
                </h1>
              </div>
            </div>
            <div>
              <div className="space-y-8 grid sm:space-y-0 sm:flex lg:grid lg:space-y-12">
                <div>
                  <img
                    className="w-24 objecet-contain xl:w-32"
                    alt="step_3"
                    src={step3}
                  />
                  <span>
                    <h1 className="font-bold text-white text-base my-3 xl:text-lg xl:my-4">
                      Amount
                    </h1>
                    <p className="text-gray-500 font-normal text-sm xl:text-base">
                      Enter the $ amount you want and click on Buy (To see a
                      full list of all cryptocurrencies available for payment
                      you need to select More, enter amount and click Buy).
                    </p>
                  </span>
                </div>
                <div>
                  <img
                    className="w-24 object-contain xl:w-32"
                    alt="step_4"
                    src={step4}
                  />
                  <span>
                    <h1 className="font-bold text-white text-base my-3 xl:text-lg xl:my-4">
                      Confirmation
                    </h1>
                    <p className="text-gray-500 font-normal text-sm xl:text-base">
                      Pay with QR code, copy address or pay directly from your
                      connected wallet. You have successfully purchased $TITO
                      and your tokens will appear on your dashboard. You can
                      claim your tokens based on vesting schedule from the date
                      of Token Generation Event (TGE).{" "}
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid justify-center mt-10 gap-y-6 lg:mt-0 lg:gap-y-10 xl:gap-y-14">
            <div className="flex space-x-3 md:space-x-6">
              <img
                className="aspect-square object-contain w-6 sm:w-8 md:w-7 lg:w-8 xl:w-9"
                alt="eth"
                src={Coin1}
              />
              <img
                className="aspect-square object-contain w-6 sm:w-8 md:w-7 lg:w-8 xl:w-9"
                alt="usdt"
                src={Coin2}
              />
              <img
                className="aspect-square object-contain w-6 sm:w-8 md:w-7 lg:w-8 xl:w-9"
                alt="usdc"
                src={Coin3}
              />
              <img
                className="aspect-square object-contain w-6 sm:w-8 md:w-7 lg:w-8 xl:w-9"
                alt="busd"
                src={Coin4}
              />
              <img
                className="aspect-square object-contain w-6 sm:w-8 md:w-7 lg:w-8 xl:w-9"
                alt="bnb"
                src={Coin5}
              />
              <img
                className="aspect-square object-contain w-6 sm:w-8 md:w-7 lg:w-8 xl:w-9"
                alt="crypto"
                src={Coin6}
              />
              <img
                className="aspect-square object-contain w-6 sm:w-8 md:w-7 lg:w-8 xl:w-9"
                alt="btc"
                src={Coin7}
              />
              <img
                className="aspect-square object-contain w-6 sm:w-8 md:w-7 lg:w-8 xl:w-12"
                alt="mastercard"
                src={Coin8}
              />
              <img
                className="aspect-square object-contain w-6 sm:w-8 md:w-7 lg:w-8 xl:w-9"
                alt="visa"
                src={Coin9}
              />
            </div>
            <div className="grid justify-center">
              <a
                href="/"
                className="rounded-md shadow-sm font-bold py-3 bg-gradient-to-r to-fuchsia-600 from-sky-600 text-white px-4 text-center text-sm w-44 sm:w-60 lg:py-4 xl:py-5 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer"
              >
                Join Presale{" "}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 px-3 xl:px-0 bg-vulcan" id="roenomics">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="border-b border-gray-800 space-y-3 pb-8">
            <h1 className="font-bold text-white text-3xl">Token Overview</h1>
            <p className="font-normal text-gray-200 text-sm md:text-base lg:text-lg">
              The marketplace will be built on Ethereum sidechain Polygon
              because of the platform's flexibility, low transaction fees, quick
              transfer times, and excellent scaling capabilities, all while
              offering the security, interoperability, and structural benefits
              of the Ethereum Mainnet.
            </p>
          </div>
          <div className="justify-between grid gap-y-5 grid-cols-2 sm:grid-cols-3 lg:flex lg:gap-y-0">
            <div>
              <div className="flex">
                <p className="text-sky-600 font-bold text-base xl:text-lg">
                  $TITO Token
                </p>
                <a
                  className="text-sky-600 cursor-pointer pl-1.5"
                  href="https://etherscan.io/token/0xec6e7a7c2b70c2ec319279ecf4cce1c8717ecf59#code"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    ></path>
                  </svg>
                </a>
              </div>
              <div className="flex">
                <p className="text-gray-200 font-normal text-sm xl:text-lg truncate w-48">
                  0xec6e7a7c2b70c2ec319279ecf4cce1c8717ecf59
                </p>
                <span className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5 cursor-pointer text-sky-600 "
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <p className="text-sky-600 font-bold text-base xl:text-lg">
                Token Name
              </p>
              <p className="text-gray-200 font-normal text-sm xl:text-lg">
                Tito
              </p>
            </div>
            <div>
              <p className="text-sky-600 font-bold text-base xl:text-lg">
                Token Symbol
              </p>
              <p className="text-gray-200 font-normal text-sm xl:text-lg">
                $TITO
              </p>
            </div>
            <div>
              <p className="text-sky-600 font-bold text-base xl:text-lg">
                Token Supply
              </p>
              <p className="text-gray-200 font-normal text-sm xl:text-lg">
                1,000,000,000
              </p>
            </div>
            <div>
              <p className="text-sky-600 font-bold text-base xl:text-lg">
                Token Type
              </p>
              <p className="text-gray-200 font-normal text-sm xl:text-lg">
                ETHEREUM (ERC20)
              </p>
            </div>
            <div>
              <p className="text-sky-600 font-bold text-base xl:text-lg">
                Decimals
              </p>
              <p className="text-gray-200 font-normal text-sm xl:text-lg">18</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Explained;
