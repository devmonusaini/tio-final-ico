import React from "react";
import arrowLeft from '../images/powered/arrow_right.png';
import arrowRight from '../images/powered/arrow_left.png';
import coin1 from '../images/powered/ethereum.png';
import coin2 from '../images/powered/metamask.png';
import coin3 from '../images/powered/coinbase.png';
import coin4 from '../images/powered/trust_wallet.png';
import coin5 from '../images/powered/wallet_connect.png';
import coin6 from '../images/powered/uniswap.png';
import coin7 from '../images/powered/blockaudit.png';
import coin8 from '../images/powered/polygon.png';
// import ContentPasteIcon from '@mui/icons-material/ContentPaste';
// import InventoryIcon from '@mui/icons-material/Inventory';

const Powered = () => {
    return (
        <>
            <div className="border-t border-neutral-700 bg-vulcan px-3 pb-10 pt-10 space-y-6 md:pt-12 md:pb-16 md:space-y-12 xl:pt-20 xl:space-y-20 xl:px-0">
                <h1 className="font-bold text-white text-center text-3xl md:text-5xl">Powered by</h1>
                <div className="max-w-7xl mx-auto grid md:grid-cols-11 items-center justify-center md:py-0 py-6">
                    <div className="mr-3 sm:mr-7 md:block hidden">
                        <img alt="arrow_right" src={arrowLeft} />
                    </div>
                    <div className="col-span-8 grid md:grid-cols-8 grid-cols-2 justify-center  items-center md:gap-y-0 gap-y-8 md:px-0 px-3">
                        <div className="bg-gradient-to-r rounded-full items-center justify-center grid z-0  from-sky-50 to-fuchsia-200  opacity-90 -mr-1 -ml-1 p-12 md:p-5 lg:p-8 md:-ml-2 md:-mr-2">
                            <img className="aspect-square object-contain  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300" alt="ethereum" src={coin1} />
                        </div>
                        <div className="bg-gradient-to-r rounded-full items-center justify-center grid z-10 bg-white  from-sky-50 to-fuchsia-200  opacity-90 -mr-1 -ml-1 p-14 md:p-5 lg:p-7 md:-ml-2 md:-mr-2">
                            <img className="aspect-square object-contain  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300" alt="metamask" src={coin2} />
                        </div>
                        <div className="bg-gradient-to-r rounded-full items-center justify-center grid bg-opacity-50 z-20  from-sky-50 to-fuchsia-200  opacity-90 -mr-1 -ml-1 p-14 md:p-5 lg:p-7 md:-ml-2 md:-mr-2">
                            <img className="aspect-square object-contain  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300" alt="coinbase" src={coin3} />
                        </div>
                        <div className="bg-gradient-to-r rounded-full items-center justify-center grid bg-opacity-50 z-30  from-sky-50 to-fuchsia-200  opacity-90 -mr-1 -ml-1 p-12 md:p-5 lg:p-7 md:-ml-2 md:-mr-2">
                            <img className="aspect-square object-contain  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300" alt="trust_wallet" src={coin4} />
                        </div>
                        <div className="bg-gradient-to-r rounded-full items-center justify-center grid bg-opacity-50 z-40  from-sky-50 to-fuchsia-200  opacity-90 -mr-1 -ml-1 p-12 md:p-5 lg:p-7 md:-ml-2 md:-mr-2">
                            <img className="aspect-square object-contain  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300" alt="wallet_connect" src={coin5} />
                        </div>
                        <div className="bg-gradient-to-r rounded-full items-center justify-center grid bg-opacity-50 z-50  from-sky-50 to-fuchsia-200  opacity-90 -mr-1 -ml-1 p-12 md:p-5 lg:p-7 md:-ml-2 md:-mr-2">
                            <img className="aspect-square object-contain  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300" alt="uniswap" src={coin6} />
                        </div>
                        <div className="bg-gradient-to-r  rounded-full items-center justify-center grid  z-[60]  from-sky-50 to-fuchsia-200  opacity-90 -mr-1 -ml-1 p-10 md:p-5 lg:p-6 md:-ml-2 md:-mr-2">
                            <img className="aspect-square object-contain  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300" alt="blockaudit" src={coin7} />
                        </div>
                        <div className="bg-gradient-to-r rounded-full items-center justify-center grid bg-opacity-50 z-[70]  from-sky-50 to-fuchsia-200  opacity-90 -mr-1 -ml-1 p-5 md:p-2 lg:p-2 md:-ml-2 md:-mr-2">
                            <img className="aspect-square object-contain  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300" alt="polygon" src={coin8} />

                        </div>
                    </div>
                    <div className="ml-3 sm:ml-7 md:block hidden">
                        <img alt="arrow_left" src={arrowRight} />

                    </div>
                </div>
            </div>
        </>
    );
}
export default Powered;