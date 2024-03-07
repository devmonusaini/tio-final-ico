import React, { useEffect } from "react";
// import { contract } from "../config";
import { ethers } from "ethers";
import { useAccount, useConnect } from "wagmi";
import { USDC, USDT, Null, BNB, TitoICO } from "../config";
import TitoIcoAbi from "../TitoIcoAbi.json"
import Web3 from "web3";
const Dashboard = () => {

  let web3 = new Web3(window.ethereum);
  const { address, isConnecting, isDisconnected } = useAccount();
  const { isConnected, connector, connectors, connectAsync } = useConnect();
  const [loader, setLoader] = React.useState(false);
  const [history, setHistory] = React.useState([]);
  const [totalTx, setTotalTx] = React.useState(0);

  function epochToFormattedDate(epochTimestamp) {
    // Create a new Date object and set it to the epoch timestamp
    const date = new Date(epochTimestamp * 1000); // Multiply by 1000 to convert from seconds to milliseconds

    // Define an array of month names
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    // Get the day, month, year, hour, minute, and AM/PM
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const ampm = hour >= 12 ? "PM" : "AM";

    // Format the date and time
    const formattedDate = `${day} ${month} ${year} ${hour % 12}:${minute
      .toString()
      .padStart(2, "0")} ${ampm}`;

    return formattedDate;
  }

  // // Example usage:
  // const epochTimestamp = 1601185500; // Replace with your epoch timestamp
  // const formattedDate = epochToFormattedDate(epochTimestamp);
  // console.log(formattedDate);

  const txhistory = async () => {
    try {
      setLoader(true);
  let contract =   new web3.eth.Contract(TitoIcoAbi,TitoICO)
      const res = await contract.methods.userTxHistory(address).call();
      console.log(res);
      setTotalTx(res.length);
      const historyArray = [];
      res.forEach((item) => {
        const date = epochToFormattedDate(item.TransactionDate);

        let crypto;
        let isethtype;
        switch (item.CryptoAddress) {
          case USDC:
            crypto = "USDC";
            break;
          case USDT:
            crypto = "USDT";
            break;
          case Null:
            crypto = "ETH";
            break;
          case BNB:
            crypto = "BNB";
            break;
        }
        if (crypto === "USDC" || crypto === "USDT") isethtype = false;
        else isethtype = true;
        historyArray.push({
          txid: Number(item.BlockNumber),
          date: date,
          tokens: ethers.utils.formatEther(item.Tokens),
          amount: ethers.utils.formatUnits(
            item.CryptoAmount,
            isethtype ? 18 : 6
          ),
          crypto: crypto,
        });
      });
      setHistory(historyArray);
      setLoader(false);
    } catch (err) {
      setLoader(false);
      alert("Error in fetching transaction history");
      console.log(err);
    }
  };
  useEffect(() => {
    txhistory();
    console.log("history: ", history);
  }, [address, isConnected]);
  return (
    <>
      <section class="bg-no-repeat bg-vulcan mx-0 py-4 md:py-8 lg:h-[767px] mb-32 xl:mx-0 bg-cover">
        <div class="max-w-7xl shadow-xl mx-auto bg-vulcan rounded-lg px-4 py-6 sm:px-14 md:py-20">
          <h2 class="font-bold text-white leading-10 text-3xl text-center">
            Transaction History
          </h2>
          <div class="py-2 text-xs sm:text-base text-center text-neutral-700 font-semibold">
            <div class="p-0 pr-0.5">
              <span class="text-white">
                You have <span class="text-sky-600">{totalTx}</span> Tokens
              </span>
            </div>
          </div>
          <div class="px-4 sm:px-6 bg-transparent lg:px-8">
            <div class="mt-8 flow-root">
              <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 max-h-[53vh]">
                  <table class="min-w-full divide-y-2 divide-neutral-300">
                    <thead class="sticky top-0 bg-vulcan">
                      <tr>
                        <th
                          scope="col"
                          class="whitespace-nowrap py-3.5 px-2 text-center text-sm font-semibold text-white sm:pl-0"
                        >
                          S.No.
                        </th>
                        <th
                          scope="col"
                          class="whitespace-nowrap py-3.5 px-2 text-center text-sm font-semibold text-white sm:pl-0"
                        >
                          Transaction ID
                        </th>
                        <th
                          scope="col"
                          class="whitespace-nowrap px-2 py-3.5 text-center text-sm font-semibold text-white"
                        >
                          Transaction Date
                        </th>
                        <th
                          scope="col"
                          class="whitespace-nowrap px-2 py-3.5 text-center text-sm font-semibold text-white"
                        >
                          Tokens
                        </th>
                        <th
                          scope="col"
                          class="whitespace-nowrap px-2 py-3.5 text-center text-sm font-semibold text-white"
                        >
                          Amount in Crypto Currency
                        </th>
                        {/* <th
                          scope="col"
                          class="whitespace-nowrap px-2 py-3.5 text-center text-sm font-semibold text-white"
                        >
                          Amount in US Dollars
                        </th> */}
                      </tr>
                    </thead>
                    <tbody class="divide-y-2 divide-neutral-200 bg-transparent overflow-y-auto">
                      {loader ? (
                        <tr>
                          <td
                            colSpan="5"
                            className="text-center text-white mt-10 pt-12 text-xl"
                          >
                            Loading...
                          </td>
                        </tr>
                      ) : (
                        history
                          .slice()
                          .reverse()
                          .map((item, index) => (
                            <tr key={index} className=" text-center">
                              <td className="whitespace-nowrap py-3.5 px-2 text-center text-sm font-semibold text-white sm:pl-0">
                                {index + 1}
                              </td>
                              <td className="whitespace-nowrap py-3.5 px-2 text-center text-sm font-semibold text-white sm:pl-0">
                                {item.txid}
                              </td>
                              <td className="whitespace-nowrap py-3.5 px-2 text-center text-sm font-semibold text-white sm:pl-0">
                                {item.date}
                              </td>
                              <td className="whitespace-nowrap py-3.5 px-2 text-center text-sm font-semibold text-white sm:pl-0">
                                {item.tokens}
                              </td>
                              <td className="whitespace-nowrap py-3.5 px-2 text-center text-sm font-semibold text-white sm:pl-0">
                                {item.amount} {item.crypto}
                              </td>
                              {/* <td className="whitespace-nowrap py-3.5 px-2 text-center text-sm font-semibold text-white sm:pl-0">
                                ${item.amount} USD
                              </td> */}
                            </tr>
                          ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="max-w-7xl mx-auto items-center text-center justify-center">
          <button class="rounded-md shadow-sm font-bold py-3 bg-gradient-to-r to-fuchsia-600 from-sky-600 text-white px-4 w-full text-center text-sm sm:w-40 md:w-52 lg:py-4 xl:px-8 xl:py-6 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
            Buy $ROE
          </button>
        </div>
      </section>
    </>
  );
};
export default Dashboard;
