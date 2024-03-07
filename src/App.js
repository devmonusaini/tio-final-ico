import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet,polygonMumbai } from "wagmi/chains";
import connectContract from "./config";

const chains = [mainnet,polygonMumbai];
const projectId = "6b098530af4797b4b0dcb37e0534845a";
const projectChainId = "1";
// Add Network on wallet
// try {
//   console.log(
//     "window.ethereum.networkVersion : ",
//     window.ethereum.networkVersion,
//     typeof window.ethereum.networkVersion
//   );
//   if (window.ethereum.networkVersion != projectChainId.toString()) {
//     window.ethereum.request({
//       method: "wallet_addEthereumChain",
//       params: [
//         {
//           chainId: "0x1",
//           rpcUrls: ["https://mainnet-infura.brave.com/"],
//           chainName: "Mainnet",
//           nativeCurrency: {
//             name: "ETH",
//             symbol: "ETH",
//             decimals: 18,
//           },
//           blockExplorerUrls: ["https://etherscan.io/"],
//         },
//       ],
//     });
//   }
// } catch (error) {
//     // window.location.replace(
//     //   "https://metamask.app.link/dapp/www.titotoken.me/"
//     // );
//   console.log(error);
// }

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

const App = () => {
  //connectContract();
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/Dashboard" Component={Dashboard} />
        </Routes>
        <Footer />
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
};

export default App;
