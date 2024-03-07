import React from "react";
import { useState } from "react";
import TitoLogo from "../images/tito-logo.png";
import { NavLink } from "react-router-dom";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount } from "wagmi";
import whitePaper from "../images/whitepaper/TITO_WHITE_PAPER.pdf";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { isConnected, address } = useAccount();
  const { isOpen, open, close, setDefaultChain } = useWeb3Modal();

  return (
    <>
      <div className="">
        <header style={{ backgroundcolor: "transparent" }}>
          <nav className="mx-auto flex items-center justify-between gap-x-6 p-6 max-w-screen lg:px-8">
            <div className="flex">
              <a
                className="-m-1.5 p-1.5 text-white flex justify-center items-center "
                href="/"
              >
                <span className="sr-only">Your Company</span>
                <img className="w-16 h-16" src={TitoLogo} alt="Tito" />
              </a>
            </div>
            <div className="hidden gap-x-6 lg:flex xl:gap-x-12">
              <a
                target=""
                className="text-white font-normal text-sm xl:text-base hover:text-sky-600"
                href="/#finance"
              >
                About
              </a>
              <a
                target="_blank"
                className="text-white font-normal text-sm xl:text-base hover:text-sky-600"
                href={whitePaper}
              >
                Whitepaper
              </a>
              <a
                target=""
                className="text-white font-normal text-sm xl:text-base hover:text-sky-600"
                href="/#Tito"
              >
                Tito
              </a>
              {/* <a
                target="_blank"
                className="text-white font-normal text-sm xl:text-base hover:text-sky-600"
                href="https://gleam.io/4bs1I/borroe-gleam-summer-defi-giveaway"
              >
                Win 50K
              </a> */}
              {/* <a
                target=""
                className="text-white font-normal text-sm xl:text-base hover:text-sky-600"
                href="/howtobuy"
              >
                How to buy
              </a> */}
            </div>
            <div className="items-center justifybox height same and content size same, Its difficult to manage the ssection becuase images sizes is too much, if i set the images its look strechable -end hidden gap-x-4 lg:flex xl:gap-x-8">
              <NavLink
                to="/Dashboard"
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                {" "}
                <button className="rounded-md text-white shadow-sm bg-transparent font-bold border border-neutral-500 py-3 px-4 text-[10px] xl:py-4 xl:px-8 xl:text-sm transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                  Dashboard
                </button>
              </NavLink>
              <button
                className="rounded-md  shadow-sm bg-transparent font-bold  py-3 px-4 text-[10px] xl:py-4 xl:px-8 xl:text-sm transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300 text-white bg-gradient-to-r from-sky-600 to-fuchsia-600"
                onClick={() => open()}
              >
                {isConnected
                  ? `${address.substring(0, 4)}....${address.substring(
                      address.length - 4,
                      address.length
                    )}`
                  : "Connect Wallet"}
              </button>
            </div>
            <div className="flex lg:hidden">
              <button
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                <span className="sr-only">Open main menu</span>
                <span className="w-fit">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </nav>
          {toggle && (
            <div className="lg:hidden">
              <div className="fixed inset-y-0 right-0 z-50 w-full bg-black px-6 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="gap-x-6 flex justify-between">
                  <a className="-m-1.5 p-1.5" href="/">
                    <span className="sr-only">Your Company</span>
                    Tito
                  </a>
                  <button
                    className="-m-2.5 rounded-md p-2.5 text-white"
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                  >
                    <span className="sr-only">Close menu</span>
                    <span className="w-fit">
                      <svg
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      <a
                        target=""
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-sky-600"
                        href="/#finance"
                        onClick={() => {
                          setToggle(!toggle);
                        }}
                      >
                        About
                      </a>
                      <a
                        target="_blank"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-sky-600"
                        href={whitePaper}
                        onClick={() => {
                          setToggle(!toggle);
                        }}
                      >
                        Whitepaper
                      </a>
                      <a
                        target=""
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-sky-600"
                        href="/#Tito"
                        onClick={() => {
                          setToggle(!toggle);
                        }}
                      >
                        Tito
                      </a>
                      {/* <a
                        target="_blank"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-sky-600"
                        href="https://gleam.io/4bs1I/borroe-gleam-summer-defi-giveaway"
                        onClick={() => {
                          setToggle(!toggle);
                        }}
                      >
                        Win 50K
                      </a> */}
                      {/* <a
                        target=""
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-sky-600"
                        href="/howtobuy"
                        onClick={() => {
                          setToggle(!toggle);
                        }}
                      >
                        How to buy
                      </a> */}
                    </div>
                    <div className="flex flex-1 items-center gap-x-6 py-6">
                      <NavLink
                        to="/Dashboard"
                        onClick={() => {
                          setToggle(!toggle);
                        }}
                      >
                        {" "}
                        <button className="rounded-md text-white shadow-sm bg-transparent font-bold border border-neutral-500 py-3 px-4 text-[10px] xl:py-4 xl:px-8 xl:text-sm transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                          Dashboard
                        </button>
                      </NavLink>
                      <button
                        // className="sm:mt-2 mb-2 w-full inline-flex items-center justify-center whitespace-nowrap border-0 rounded-md px-5 py-2 sm:px-5 sm:py-5 3xl:py-4 4xl:py-5 text-sm sm:text-md  font-semibold text-white leading-5 shadow-sm  bg-gradient-to-r from-sky-600 to-fuchsia-600 hover:bg-blue-900"
                        className="rounded-md shadow-sm bg-transparent font-bold  py-3 px-4 text-[10px]  xl:py-5 xl:px-8 xl:text-sm transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300 text-white bg-gradient-to-r from-sky-600 to-fuchsia-600"
                        onClick={() => open()}
                      >
                        {isConnected
                          ? `${address.substring(0, 4)}....${address.substring(
                              address.length - 4,
                              address.length
                            )}`
                          : "Connect Wallet"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </header>
      </div>
    </>
  );
};

export default Header;
