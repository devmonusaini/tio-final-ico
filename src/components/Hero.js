import { useEffect, useState } from "react";
import blockaudit from "../images/blockaudit.jpg";
import logo from "../images/logo-sm.png";
import { contract, USDT, USDC, Null, BNB, TitoICO, matic_testnet } from "../config";
import { useBalance, useAccount, useConnect } from "wagmi";
import { ethers } from "ethers";
import { writeContract } from '@wagmi/core'
import { parseEther } from 'viem'
//import { WBNBToken, USDTToken, USDCToken } from "../config";
import calculateToken from "./calculateToken";
import Web3 from "web3";
import USDCABI from "../USDCABI.json";
import USDTABI from "../USDTABI.json";
import WBNBABI from "../WBNBABI.json";
import TitoIcoAbi from "../TitoIcoAbi.json";
import Transaction from "./Transaction";

const Hero = () => {
  // let web3 = new Web3(window.ethereum);

  const { address, isConnecting, isDisconnected } = useAccount();
  const balance = useBalance({ address: address });
  const { isConnected, connector, connectors, connectAsync } = useConnect();
  const [loader, setLoader] = useState(false);
  const [txDone, setTxDone] = useState();
  const [crypto, setCrypto] = useState("ETH");
  const [stage, setStage] = useState(0);
  const [nextStagePrice, setNextStagePrice] = useState(0);
  const [currentStagePrice, setCurrentStagePrice] = useState(0);
  const [availableTito, setAvailableTito] = useState(0);
  const [soldTokens, setSoldTokens] = useState(0);
  const [inputAmount, setInputAmount] = useState(0);
  const [tokenAmount, setTokenAmount] = useState(0);
  const [soldPercent, setSoldPercent] = useState(0);
  const [userBalance, setUserBalance] = useState();
  const [wbnbBalance, setWBNBBalance] = useState();
  const [usdtBalance, setUSDTBalance] = useState();
  const [usdcBalance, setUSDCBalance] = useState();
  const [isallowed, setIsAllowed] = useState(false);
  const [approveTxDone, setApproveTxDone] = useState(false);
  const [promocode, setPromocode] = useState("");
  const [CryptoAddress, setCryptoAddress] = useState(
    "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
  );
  const totalSupply = 1000000000;
  const approveAmount =
    //"115792089237316195423570985008687907853269984665640564039457584007913129639935";
    "1000000000000000000000000000000";
  //user balance

  const getBalance = async () => {
    try {
      let web3 = new Web3(matic_testnet);

      let WBNBToken = new web3.eth.Contract(WBNBABI, BNB);
      let USDTToken = new web3.eth.Contract(USDTABI, USDT);
      let USDCToken = new web3.eth.Contract(USDCABI, USDC);

      const wbnbbalance = await WBNBToken.methods.balanceOf(address).call();
      setWBNBBalance(
        parseFloat(ethers.utils.formatEther(wbnbbalance)).toFixed(2)
      );
      const usdtbalance = await USDTToken.methods.balanceOf(address).call();
      setUSDTBalance(
        parseFloat(ethers.utils.formatUnits(usdtbalance, 6)).toFixed(2)
      );
      const usdcbalance = await USDCToken.methods.balanceOf(address).call();
      setUSDCBalance(
        parseFloat(ethers.utils.formatUnits(usdcbalance, 6)).toFixed(2)
      );
      // const wbnbbalance = await WBNBToken.balanceOf(address);
      // setWBNBBalance(
      //   parseFloat(ethers.utils.formatEther(wbnbbalance)).toFixed(2)
      // );
      // const usdtbalance = await USDTToken.balanceOf(address);
      // setUSDTBalance(
      //   parseFloat(ethers.utils.formatUnits(usdtbalance, 6)).toFixed(2)
      // );
      // const usdcbalance = await USDCToken.balanceOf(address);
      // setUSDCBalance(
      //   parseFloat(ethers.utils.formatUnits(usdcbalance, 6)).toFixed(2)
      // );
      switch (crypto) {
        case "ETH":
          setUserBalance(parseFloat(balance?.data?.formatted).toFixed(2));
          break;
        case "BNB":
          setUserBalance(
            parseFloat(ethers.utils.formatEther(wbnbbalance)).toFixed(2)
          );
          break;
        case "USDT":
          setUserBalance(
            parseFloat(ethers.utils.formatUnits(usdtbalance, 6)).toFixed(2)
          );
          break;
        case "USDC":
          setUserBalance(
            parseFloat(ethers.utils.formatUnits(usdcbalance, 6)).toFixed(2)
          );
          break;
      }
      console.log("all balance", wbnbBalance, usdtBalance, usdcBalance);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBalance();
  }, [txDone, address, isConnected, crypto]);

  //set balance
  useEffect(() => {
    switch (crypto) {
      case "ETH":
        setUserBalance(parseFloat(balance?.data?.formatted).toFixed(2));
        break;
      case "BNB":
        setUserBalance(wbnbBalance);
        break;
      case "USDT":
        setUserBalance(usdtBalance);
        break;
      case "USDC":
        setUserBalance(usdcBalance);
        break;
    }
  }, [crypto, wbnbBalance, usdtBalance, usdcBalance]);

  //set address
  const setAddress = () => {
    switch (crypto) {
      case "ETH":
        setCryptoAddress(Null);
        break;
      case "BNB":
        setCryptoAddress(BNB);
        break;
      case "USDT":
        setCryptoAddress(USDT);
        break;
      case "USDC":
        setCryptoAddress(USDC);
        break;
      case "USD":
        setCryptoAddress(Null);
        break; //have to change for card payment
    }
  };
  useEffect(() => {
    setAddress();
    //console.log(CryptoAddress);
  }, [crypto]);

  //fetch data about the  token
  const getData = async () => {
    try {
      let web3 = new Web3(matic_testnet);

      //getstage

      let contract = new web3.eth.Contract(TitoIcoAbi, TitoICO);

      let stageData = await contract.methods.getCurrentStage().call();
      setStage(Number(stageData));

      // //get rate
      let nextStage =
        parseInt(stageData) < 2 ? parseInt(stageData) + 1 : parseInt(stageData);
      const rateData = await contract.methods.rate(nextStage).call();
      // //const rateData = await contract.methods.rate(stage < 2 ? stage + 1 : stage).call();
      setNextStagePrice(Number(rateData));

      // //get current stage price
      let xx = parseInt(stageData);
      const currentRateData = await contract.methods.rate(xx).call();
      setCurrentStagePrice(Number(currentRateData));

      // //get available tito
      const tokens = await contract.methods.availableTito().call();
      const tito = ethers.utils.formatEther(tokens);
      setAvailableTito(tito);

      // //get sold tokens
      const tokendata = await contract.methods.getData().call();
      const sold = ethers.utils.formatEther(tokendata[3]);
      setSoldTokens(sold);

      // console.log("sold : ", sold);

      // //get sold percent
      const percent = (parseFloat(sold) * 100) / totalSupply;
      setSoldPercent(percent.toFixed(2));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [address, txDone, isConnected, stage]);

  //calculate tokens
  const setAmountValue = (e) => {
    // e.preventDefault();
    setInputAmount(e.target.value);
  };
  const calculateTokens2 = () => {
    if (inputAmount) {
      let tokens = calculateToken(
        Number(stage),
        CryptoAddress,
        Number(inputAmount)
      );
      setTokenAmount(tokens);
    }
  };
  useEffect(() => {
    calculateTokens2();
  }, [inputAmount, CryptoAddress]);

  // // buy tokens
  //buy tokens


 

  const buy = async () => {
    if (address === undefined) {
      alert("please connect wallet to proceed");
      return;
    }
    if (userBalance <= inputAmount) {
      alert("Insuficient funds");
      return;
    }
    setLoader(true);
    if (!isallowed) {
      let result = await approveToken()
      if (result) {
        await buy1()
      }
    }else{
      await buy1()
    }
  }


  //  const buy1 = async () => {
  //   try {
  //     const polygonProvider = new Web3.providers.HttpProvider('https://rpc-mumbai.maticvigil.com/');

  // let web3 = new Web3(polygonProvider);
  //   let acc = await web3.eth.getAccounts()
    
  //     if (address === undefined) {
  //       alert("please connect wallet to proceed");
  //       return;
  //     }
  //     let contract = new web3.eth.Contract(TitoIcoAbi, TitoICO);

  //     setLoader(true);
  //     let isethtype;
  //     if (crypto === "USDC" || crypto === "USDT") isethtype = false;
  //     else isethtype = true;

  //     // for eth

  //     if (crypto === "ETH") {
  //       const tx = await contract.methods.buy(
  //         "123", //ethers.utils.parseUnits(inputAmount, isethtype ? 18 : 6),
  //         CryptoAddress,
  //         promocode.toUpperCase() === "DOUG" ? true : false
  //       );
  //       let encoded_tx = tx.encodeABI();
  //       let gasPrice = await web3.eth.getGasPrice();
       
  //       let gasLimit = await web3.eth.estimateGas({
  //         gasPrice: web3.utils.toHex(gasPrice),
  //         to: TitoICO,
  //         from: address,
  //         data: encoded_tx,
  //         value: inputAmount * 10 ** 18, //ethers.utils.parseUnits(inputAmount,18)
  //       });

  //       let trx = await web3.eth.sendTransaction({
  //         gasPrice: web3.utils.toHex(gasPrice),
  //         gas: web3.utils.toHex(gasLimit),
  //         to: TitoICO,
  //         from: address,
  //         data: encoded_tx,
  //         value: inputAmount * 10 ** 18, //ethers.utils.parseUnits(inputAmount,18)
  //       });
  //       // await tx.wait();
  //       if (trx.transactionHash) {
  //         console.log(trx);
  //         setLoader(false);
  //         setTxDone(true);
  //       }
  //       return;
  //     }

  //     //for other
  //     const tx = await contract.methods.buy(
  //       ethers.utils.parseUnits(inputAmount, isethtype ? 18 : 6),
  //       CryptoAddress,
  //       promocode.toUpperCase() === "DOUG" ? true : false
  //     );
  //     let encoded_tx = tx.encodeABI();

  //     let gasPrice = await web3.eth.getGasPrice();

  //     let gasLimit = await web3.eth.estimateGas({
  //       gasPrice: web3.utils.toHex(gasPrice),
  //       to: TitoICO,
  //       from: address,
  //       data: encoded_tx,
  //     });

  //     let trx = await web3.eth.sendTransaction({
  //       gasPrice: web3.utils.toHex(gasPrice),
  //       gas: web3.utils.toHex(gasLimit),
  //       to: TitoICO,
  //       from: address,
  //       data: encoded_tx,
  //     });
  //     // await tx.wait();
  //     if (trx.transactionHash) {
  //       console.log(trx);
  //       setLoader(false);
  //       setTxDone(true);
  //     }
  //   } catch (error) {
  //     setLoader(false);
  //     let err = error.data ? error.data.message : error.message;
  //     alert(err);
  //     console.log(err);
  //   }
  // };


  const buy1 = async () => {
    try {


      if (address === undefined) {
        alert("please connect wallet to proceed");
        return;
      }


      setLoader(true);



      let isethtype;
      if (crypto === "USDC" || crypto === "USDT") isethtype = false;
      else isethtype = true;

      // for eth

      if (crypto === "ETH") {
        setLoader(true);
      
        let amount = ((inputAmount) * parseInt(10 ** 18)).toLocaleString("fullwide", {
          useGrouping: false,
        });;
        console.log(amount)
        const { hash } = await writeContract({
          address: TitoICO,
          abi: TitoIcoAbi,
          functionName: 'buy',
          args: [amount, CryptoAddress,
            promocode.toUpperCase() === "DOUG" ? true : false],
          value: parseEther('0.001'),
        })

        if (hash) {

          setTimeout(() => {
            setLoader(false);
            setTxDone(true);
          }, 4000)

        }


        return
      }

      //for other
      let dacimals = crypto === "USDC" || crypto === "USDT" ? 6 : 18
      
      let amount = parseInt((inputAmount) * parseInt(10 ** dacimals))
     
      const { hash } = await writeContract({
        address: TitoICO,
        abi: TitoIcoAbi,
        functionName: 'buy',
        args: [amount, CryptoAddress,
          promocode.toUpperCase() === "DOUG" ? true : false],
      })
      // await tx.wait();
      if (hash) {
        console.log(hash);
        setTimeout(() => {
          setLoader(false);
          setTxDone(true);
        }, 4000)
      }






    } catch (error) {
      setLoader(false);
      let err = error.data ? error.data.message : error.message;
      alert(err);
      console.log(err);
    }
  };

  //approve contract address for token transfer


  // const approveToken = async () => {
  //   try {



  //     if (address === undefined) {
  //       alert("please connect wallet to proceed");
  //       return;
  //     }
  //     const polygonProvider = new Web3.providers.HttpProvider('https://rpc-mumbai.maticvigil.com/');

  //     let web3 = new Web3(polygonProvider);

  //     let WBNBToken = new web3.eth.Contract(WBNBABI, BNB);
  //     let USDTToken = new web3.eth.Contract(USDTABI, USDT);
  //     let USDCToken = new web3.eth.Contract(USDCABI, USDC);

  //     setLoader(true);
  //     if (crypto === "BNB") {
  //       const tx = await WBNBToken.methods.approve(TitoICO, approveAmount);
  // //const data = await tx.wait();
  //       //web3
  //       let encoded_tx = tx.encodeABI();

  //       let gasPrice = await web3.eth.getGasPrice();

  //       gasPrice = parseInt(gasPrice) + 100000;

  //       let gasLimit = await web3.eth.estimateGas({
  //         gasPrice: web3.utils.toHex(gasPrice),
  //         to: BNB,
  //         from: address,
  //         data: encoded_tx,
  //       });

  //       let trx = await web3.eth.sendTransaction({
  //         gasPrice: web3.utils.toHex(gasPrice),
  //         gas: web3.utils.toHex(gasLimit),
  //         to: BNB,
  //         from: address,
  //         data: encoded_tx,
  //       });

  //       // await tx.wait();
  //       if (trx.transactionHash) {
  //         console.log(trx);
  //         setLoader(false);
  //         setApproveTxDone(true);
  //       }
  //       //web3

  //       // setLoader(false);
  //       // setApproveTxDone(true);
  //     } else if (crypto === "USDT") {
  //       const tx = await USDTToken.methods.approve(TitoICO, approveAmount);
  //       // const data = await tx.wait();
  //       //setLoader(false);
  //       //setApproveTxDone(true);

  //       //web3
  //       let encoded_tx = tx.encodeABI();

  //       let gasPrice = await web3.eth.getGasPrice();

  //       let gasLimit = await web3.eth.estimateGas({
  //         gasPrice: web3.utils.toHex(gasPrice),
  //         to: USDT,
  //         from: address,
  //         data: encoded_tx,
  //       });

  //       let trx = await web3.eth.sendTransaction({
  //         gasPrice: web3.utils.toHex(gasPrice),
  //         gas: web3.utils.toHex(gasLimit),
  //         to: USDT,
  //         from: address,
  //         data: encoded_tx,
  //       });
  //       // await tx.wait();
  //       if (trx.transactionHash) {
  //         console.log(trx);
  //         setLoader(false);
  //         setApproveTxDone(true);
  //       }
  //       //web3
  //     } else if (crypto === "USDC") {
  //       const tx = await USDCToken.methods.approve(TitoICO, approveAmount);
  //       // const data = await tx.wait();
  //       //setLoader(false);
  //       // setApproveTxDone(true);
  //       //web3
  //       let encoded_tx = tx.encodeABI();

  //       let gasPrice = await web3.eth.getGasPrice();

  //       let gasLimit = await web3.eth.estimateGas({
  //         gasPrice: web3.utils.toHex(gasPrice),
  //         to: USDC,
  //         from: address,
  //         data: encoded_tx,
  //       });

  //       let trx = await web3.eth.sendTransaction({
  //         gasPrice: web3.utils.toHex(gasPrice),
  //         gas: web3.utils.toHex(gasLimit),
  //         to: USDC,
  //         from: address,
  //         data: encoded_tx,
  //       });
  //       // await tx.wait();
  //       if (trx.transactionHash) {
  //         console.log(trx);
  //         setLoader(false);
  //         setApproveTxDone(true);
  //       }
  //       //web3
  //     } else console.log("not default crypto");

  //     // if (crypto === "BNB") {
  //     //   const tx = await WBNBToken.methods.approve(contract.address, approveAmount);
  //     //   const data = await tx.wait();
  //     //   setLoader(false);
  //     //   setApproveTxDone(true);
  //     // } else if (crypto === "USDT") {
  //     //   const tx = await USDTToken.methods.approve(contract.address, approveAmount);
  //     //   const data = await tx.wait();
  //     //   setLoader(false);
  //     //   setApproveTxDone(true);
  //     // } else if (crypto === "USDC") {
  //     //   const tx = await USDCToken.methods.approve(contract.address, approveAmount);
  //     //   const data = await tx.wait();
  //     //   setLoader(false);
  //     //   setApproveTxDone(true);
  //     // } else console.log("not default crypto");

  //     setLoader(false);
  //   } catch (error) {
  //     setLoader(false);
  //     let err = error.data ? error.data.message : error.message;
  //     alert(err);
  //     console.log(err);
  //   }
  // };
  
  const approveToken = async () => {
    try {



      if (address === undefined) {
        alert("please connect wallet to proceed");
        return;
      }
    
      setLoader(true);
      let decimals = crypto == "USDT" || crypto == "USDC" ? 6 : 8;
      let amount = parseInt((inputAmount) * parseInt(10 ** decimals))
      const { hash } = await writeContract({
        address: crypto == "USDT" ? USDT : crypto == "USDC" ? USDC : BNB,
        abi: crypto == "USDT" ? USDTABI : crypto == "USDC" ? USDCABI : WBNBABI,
        functionName: 'approve',
        args: [TitoICO, amount],
      })

      setLoader(false);
      return true
    } catch (error) {
      setLoader(false);
      let err = error.data ? error.data.message : error.message;
      alert(err);
      console.log(err);
      return false

    }
  };


  useEffect(() => {
    if (txDone) {
      window.location.replace("/dashboard");
    }
  }, [txDone]);

  //check allowance
  const checkAllowance = async () => {
    try {
      let web3 = new Web3(matic_testnet);

      let WBNBToken = new web3.eth.Contract(WBNBABI, BNB);
      let USDTToken = new web3.eth.Contract(USDTABI, USDT);
      let USDCToken = new web3.eth.Contract(USDCABI, USDC);

      if (crypto === "ETH") setIsAllowed(true);
      else {
        if (crypto === "BNB") {
          const allowance = await WBNBToken.methods
            .allowance(address, TitoICO)
            .call();

          if (allowance >= ethers.utils.parseEther(inputAmount)) {

            setIsAllowed(true);
          }
        } else if (crypto === "USDT") {
          const allowance = await USDTToken.methods
            .allowance(address, TitoICO)
            .call();
          if (allowance >= ethers.utils.parseUnits(inputAmount, 6)) {
            setIsAllowed(true);
          }
        } else if (crypto === "USDC") {
          const allowance = await USDCToken.methods
            .allowance(address, TitoICO)
            .call();
          if (allowance >= ethers.utils.parseUnits(inputAmount, 6)) {
            setIsAllowed(true);
          }
        }
      }

      // if (crypto === "ETH") setIsAllowed(true);
      // else {
      //   if (crypto === "BNB") {
      //     const allowance = await WBNBToken.methods.allowance(
      //       address,
      //       contract.address
      //     ).call();
      //     if (allowance >= ethers.utils.parseEther(inputAmount)) {
      //       setIsAllowed(true);
      //     }
      //   } else if (crypto === "USDT") {
      //     const allowance = await USDTToken.methods.allowance(
      //       address,
      //       contract.address
      //     ).call();
      //     if (allowance >= ethers.utils.parseUnits(inputAmount, 6)) {
      //       setIsAllowed(true);
      //     }
      //   } else if (crypto === "USDC") {
      //     const allowance = await USDCToken.methods.allowance(
      //       address,
      //       contract.address
      //     ).call();
      //     if (allowance >= ethers.utils.parseUnits(inputAmount, 6)) {
      //       setIsAllowed(true);
      //     }
      //   }
      // }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setIsAllowed(false);
    checkAllowance();
  }, [inputAmount, crypto, address, isConnected, approveTxDone]);

 
  return (
    <>
      <div className="bg-cover bg-vulcan bg-no-repeat bg-center mt-[-105px] md:mt-[-131px] px-3 pt-40 pb-12 lg:block xl:px-0 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="lg:grid max-w-7xl mx-auto gap-x-10 grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-y-0 xl:gap-x-20 flex flex-col flex-col-reverse ">
          <div className="grid items-center">
            <div className="space-y-4 md:space-y-7">
              <h1 className="font-semibold text-white text-lg md:text-xl lg:text-2xl">
                It's Tito Reinvented
              </h1>
              <h1 className="font-bold text-white text-2xl md:text-3xl lg:text-4xl xl:text-6xl">
                Unlocking New Opportunities for Economic Growth
              </h1>
              <p className="text-white font-semibold text-base md:text-lg lg:text-xl xl:text-2xl">
                Tito: The Governance Token of Africa's upcoming 2025 crypto
                exchange. Empowering users with influence and rewards, shaping
                the future of crypto.
              </p>
              <div className="flex gap-x-4 xl:gap-x-8">
                <span className="flex rounded-md items-center space-x-3 bg-gradient-to-r from-sky-600 to-fuchsia-600 py-2 px-4 lg:px-6 xl:py-4 xl:px-8  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                  <img alt="blockaudit" className="w-8 h-8" src={blockaudit} />
                  <a
                    className="font-bold text-white text-xs xl:text-sm"
                    href="https://etherscan.io/token/0xec6e7a7c2b70c2ec319279ecf4cce1c8717ecf59#code"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Smart Contract
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div className="  border border-neutral-500 rounded-xl py-8 bg-black bg-opacity-30 mb-6">
            <div className="bg-transparent text-center px-4 py-2 sm:pt-3 sm:px-18">
              <div className="px-2 flex justify-between mb-2 lg:px-3 3xl:px-6">
                <div className="text-left space-y-1">
                  <p className="text-[11px] sm-text-sm font-bold text-white 3xl:text-base">
                    Current stage
                  </p>
                  {/* <h2 className="text-xs sm:text-sm font-bold text-white 3xl:text-base capitalize">stage 1</h2> */}
                  <h2 className="text-xs sm:text-sm font-semibold text-sky-600 3xl:text-base capitalize">
                    Stage {stage + 1}
                  </h2>
                </div>
                <div className="text-right space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3 ">
                      <span className="animate-ping  absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-white">Live</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between md-4 md:my-6  lg:px-2 3xl:px-5">
                <div className="bg-gradient-to-b from-gray-900 to-gray-800 px-3 py-2 sm:px-4 sm:py-2.5 rounded-md text-left space-y-1">
                  <p className="text-[11px] sm:text-xs font-bold text-white 3xl:text-sm">
                    Next Stage Price
                  </p>
                  <h2 className="text-xs sm:text-sm font-semibold text-sky-600 3xl:text-lg">
                    {nextStagePrice / 10000} USD
                  </h2>
                </div>
                <div className="bg-gradient-to-b from-gray-900 to-gray-800 px-3 py-2 sm:px-4 sm:py-2.5 rounded-md text-right space-y-1">
                  <p className="text-[11px] sm:text-xs font-bold text-white 3xl:text-sm">
                    Remaining Tokens
                  </p>
                  <h2 className="text-xs sm:text-sm font-semibold text-sky-600 3xl:text-lg capitalize">
                    <span className="text-sky-600">{availableTito} $TITO</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-b-xl text-white bg-transparent shadow">
              <div className="px-4 pb-4 bg-transparent bg-opacity-70  lg:px-6 3xl:px-10 ">
                <div className="flex flex-col md:flex-row justify-around px-8 text-fuchsia-600 font-bold text-sm mt-3 md:mt-0">
                  <div>BUY NOW BEFORE PRICE INCREASE!</div>
                </div>
                <div className="bg-transparent relative rounded-[2rem] mt-0 py-4 mb-2 flex justify-between items-center">
                  <div className="bg-zinc-100 h-[20px] w-full absolute bottom-0 left-0 rounded-[2rem]">
                    <span className="text-xs text-center absolute left-[40%] md:left-[45%] py-0.5 font-semibold z-20 text-sky-600">
                      {soldPercent}% Sold
                    </span>
                    <div
                      className="py-1 w-full h-full bg-gradient-to-r from-sky-600 to-fuchsia-600 relative rounded-[2rem] w-[20%]"
                      style={{ width: `${soldPercent}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between items-center text-white font-semibold mb-2 sm:mb-4 text-xs px-1">
                  <div className="text-left">
                    Total Tokens Sold:
                    <span className="text-sky-600">{soldTokens} TITO</span>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="flex flex-row items-center gap-2 text-center text-sm font-semibold leading-[30px] text-white before:h-[2px] before:w-auto before:flex-1 before:bg-gradient-to-r before:from-fuchsia-600  before:via-blue-800  before:to-[#572bf7] before:inline-block before:align-middle after:h-[2px] after:w-auto after:bg-gradient-to-r after:from-[#572bf7]  after:via-fuchsia-600  after:to-blue-800 after:inline-block after:align-middle after:flex-1">
                    {currentStagePrice / 10000} USD = 1 $TITO
                  </h4>
                </div>
                <div className="px-2 bg-transparent lg:px-2">
                  <div className="p-2 sm:p-0 flex flex-col items-center mb-2 lg:mb-5"></div>
                  <div className="grid gap-2 md:gap-1 grid-cols-3 md:grid-cols-4 grid-rows-1 md:grid-rows-1 justify-center items-center self-center">
                    <button
                      type="button"
                      onClick={() => {
                        setCrypto("ETH");
                      }}
                      className={
                        crypto === "ETH"
                          ? "mb-2 w-full inline-flex items-center justify-center whitespace-nowrap rounded-md px-2 py-2 sm:px-1.5 sm:py-3.5 3xl:py-4 4xl:py-5 text-xs sm:text-xs font-semibold text-white leading-6 shadow-sm bg-gradient-to-r from-sky-600 to-fuchsia-600"
                          : "mb-2 w-full inline-flex items-center justify-center whitespace-nowrap rounded-md px-2 py-2 sm:px-1.5 sm:py-3.5 3xl:py-4 4xl:py-5 text-xs sm:text-xs font-semibold text-neutral-900 hover:text-white leading-6 shadow-sm bg-gradient-to-r to-fuchsia-200 from-blue-100 hover:from-sky-600 hover:to-fuchsia-600"
                      }
                    >
                      <img
                        className="w-5 pr-1"
                        alt="eth"
                        src="https://nowpayments.io/images/coins/eth.svg"
                      />
                      &nbsp;ETH
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setCrypto("BNB");
                      }}
                      className={
                        crypto === "BNB"
                          ? "mb-2 w-full inline-flex items-center justify-center whitespace-nowrap rounded-md px-2 py-2 sm:px-1.5 sm:py-3.5 3xl:py-4 4xl:py-5 text-xs sm:text-xs font-semibold text-white leading-6 shadow-sm bg-gradient-to-r from-sky-600 to-fuchsia-600"
                          : "mb-2 w-full inline-flex items-center justify-center whitespace-nowrap rounded-md px-2 py-2 sm:px-1.5 sm:py-3.5 3xl:py-4 4xl:py-5 text-xs sm:text-xs font-semibold text-neutral-900 hover:text-white leading-6 shadow-sm bg-gradient-to-r to-fuchsia-200 from-blue-100 hover:from-sky-600 hover:to-fuchsia-600"
                      }
                    >
                      <img
                        className="w-5 pr-1"
                        alt="bnbbsc"
                        src="https://nowpayments.io/images/coins/bnb.svg"
                      />
                      &nbsp;BNB
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setCrypto("USDT");
                      }}
                      className={
                        crypto === "USDT"
                          ? "mb-2 w-full inline-flex items-center justify-center whitespace-nowrap rounded-md px-2 py-2 sm:px-1.5 sm:py-3.5 3xl:py-4 4xl:py-5 text-xs sm:text-xs font-semibold text-white leading-6 shadow-sm bg-gradient-to-r from-sky-600 to-fuchsia-600"
                          : "mb-2 w-full inline-flex items-center justify-center whitespace-nowrap rounded-md px-2 py-2 sm:px-1.5 sm:py-3.5 3xl:py-4 4xl:py-5 text-xs sm:text-xs font-semibold text-neutral-900 hover:text-white leading-6 shadow-sm bg-gradient-to-r to-fuchsia-200 from-blue-100 hover:from-sky-600 hover:to-fuchsia-600"
                      }
                    >
                      <img
                        className="w-5 pr-1"
                        alt="usdterc20"
                        src="https://nowpayments.io/images/coins/usdt.svg"
                      />
                      &nbsp;USDT
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setCrypto("USDC");
                      }}
                      className={
                        crypto === "USDC"
                          ? "mb-2 w-full inline-flex items-center justify-center whitespace-nowrap rounded-md px-2 py-2 sm:px-1.5 sm:py-3.5 3xl:py-4 4xl:py-5 text-xs sm:text-xs font-semibold text-white leading-6 shadow-sm bg-gradient-to-r from-sky-600 to-fuchsia-600"
                          : "mb-2 w-full inline-flex items-center justify-center whitespace-nowrap rounded-md px-2 py-2 sm:px-1.5 sm:py-3.5 3xl:py-4 4xl:py-5 text-xs sm:text-xs font-semibold text-neutral-900 hover:text-white leading-6 shadow-sm bg-gradient-to-r to-fuchsia-200 from-blue-100 hover:from-sky-600 hover:to-fuchsia-600"
                      }
                    >
                      <img
                        className="w-5 pr-1"
                        alt="usdc"
                        src="https://nowpayments.io/images/coins/usdc.svg"
                      />
                      &nbsp;USDC
                    </button>
                    {/* <div className="group flex relative">
                      <button
                        type="button"
                        onClick={() => {
                          alert("Card option not available");
                          return;
                          // setCrypto("USD");
                        }}
                        className={
                          crypto === "USD"
                            ? "mb-2 w-full inline-flex items-center justify-center whitespace-nowrap rounded-md px-2 py-2 sm:px-1.5 sm:py-3.5 3xl:py-4 4xl:py-5 text-xs sm:text-xs font-semibold text-white leading-6 shadow-sm bg-gradient-to-r from-sky-600 to-fuchsia-600"
                            : "mb-2 w-full inline-flex items-center justify-center whitespace-nowrap rounded-md px-2 py-2 sm:px-1.5 sm:py-3.5 3xl:py-4 4xl:py-5 text-xs sm:text-xs font-semibold text-neutral-900 hover:text-white leading-6 shadow-sm bg-gradient-to-r to-fuchsia-200 from-blue-100 hover:from-sky-600 hover:to-fuchsia-600"
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="w-4 text-gray-800 pr-0.5 md:pr-0"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                          ></path>
                        </svg>
                        &nbsp;CARD
                      </button>
                    </div> */}
                  </div>
                  <div className="mt-4">
                    <h4 className="flex flex-row items-center gap-2 text-center text-[1rem] font-semibold leading-[30px] text-white before:h-[2px] before:w-auto before:flex-1 before:bg-gradient-to-r before:from-fuchsia-600  before:via-blue-800  before:to-[#572bf7] before:inline-block before:align-middle after:h-[2px] after:w-auto after:bg-gradient-to-r after:from-[#572bf7]  after:via-fuchsia-600  after:to-blue-800 after:inline-block after:align-middle after:flex-1">
                      Balance: {userBalance=='NaN'?0:userBalance} {crypto}
                    </h4>
                  </div>

                  <div className="flex justify-between flex-col md:flex-row">
                    <div className="mt-1.5 text-left">
                      <label
                        for="amount"
                        className="block text-white font-medium text-sm sm:text-sm"
                      >
                        Amount in {crypto}
                      </label>
                      <div className="relative mt-0.5 rounded-md shadow-sm">
                        <input
                          type="number"
                          onChange={setAmountValue}
                          min="0"
                          name="amount"
                          id="amount"
                          autocomplete="off"
                          aria-invalid="true"
                          aria-describedby="amount-error"
                          className="block w-full rounded-md border-0 py-2.5 sm:py-1.5 pl-4 pr-10 text-white bg-gradient-to-r from-gray-900 to-gray-800  shadow-sm ring-0 ring-inset focus:ring-2 focus:ring-inset text-sm sm:text-base font-medium sm:leading-10 text-white ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-blue-800 outline-none"
                        />
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-6 w-6 text-sky-600"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="mt-1.5 text-left pt-2 md:pt-0">
                      <label
                        for="tokens"
                        className="block text-white font-medium text-sm sm:text-sm"
                      >
                        Tokens
                      </label>
                      <div className="relative mt-0.5 rounded-md shadow-sm">
                        <input
                          type="text"
                          disabled={true}
                          name="token"
                          id="token"
                          value={tokenAmount}
                          readOnly=""
                          placeholder=""
                          className="block w-full rounded-md border-0 py-2.5 sm:py-1.5 pl-4 pr-10 text-white  bg-gradient-to-r from-gray-900 to-gray-800  shadow-sm ring-1 ring-inset ring-blue-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-800 sm:text-base font-medium sm:leading-10 outline-none"
                        />
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                          <img className="w-6" src={logo} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="flex justify-between flex-col md:flex-row">
                    <div className="mt-1.5 text-left">
                      <label
                        for="promocode"
                        className="block text-white font-medium text-sm sm:text-sm"
                      >
                        Promocode
                      </label>
                      <div className="relative mt-0.5 rounded-md shadow-sm">
                        <input
                          type="text"
                          onChange={(e) => {
                            setPromocode(e.target.value);
                          }}
                          name="code"
                          style={{ textTransform: "uppercase" }}
                          id="code"
                          autocomplete="off"
                          aria-invalid="true"
                          aria-describedby="amount-error"
                          className="block w-full rounded-md border-0 py-2.5 sm:py-1.5 pl-4 pr-10 text-white bg-gradient-to-r from-gray-900 to-gray-800  shadow-sm ring-0 ring-inset focus:ring-2 focus:ring-inset text-sm sm:text-base font-medium sm:leading-10 text-white ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-blue-800 outline-none"
                        />
                      </div>
                    </div>
                    <div className="mt-1.5 text-left pt-2 md:pt-0">
                      <label
                        for="tokens"
                        className="block text-white font-medium text-sm sm:text-sm"
                      >
                        Bonus Tokens
                      </label>
                      <div className="relative mt-0.5 rounded-md shadow-sm">
                        <input
                          type="text"
                          disabled={true}
                          name="token"
                          id="token"
                          value={
                            promocode.toUpperCase() === "DOUG"
                              ? tokenAmount * 0.3
                              : 0
                          }
                          readOnly=""
                          placeholder=""
                          className="block w-full rounded-md border-0 py-2.5 sm:py-1.5 pl-4 pr-10 text-white  bg-gradient-to-r from-gray-900 to-gray-800  shadow-sm ring-1 ring-inset ring-blue-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-800 sm:text-base font-medium sm:leading-10 outline-none"
                        />
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                          <img className="w-6" src={logo} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="flex justify-center text-contentclr">
                    Total tokens in {inputAmount} {crypto} is{" "}
                    {promocode.toUpperCase() === "DOUG"
                      ? tokenAmount + tokenAmount * 0.3
                      : tokenAmount}{" "}
                    TITO
                  </div>

                  <button
                    onClick={buy}
                    className="sm:mt-2 mb-2 w-full inline-flex items-center justify-center whitespace-nowrap border-0 rounded-md px-5 py-2 sm:px-5 sm:py-5 3xl:py-4 4xl:py-5 text-sm sm:text-md  font-semibold text-white leading-5 shadow-sm  bg-gradient-to-r from-sky-600 to-fuchsia-600 hover:bg-blue-900"
                  >

                    {loader
                      ? "Processing...."
                      : isallowed
                        ? "Buy $TITO"
                        : "Approve Token"}
                  </button>
                   {/* <Transaction coinAddress={CryptoAddress} amount={inputAmount} /> */}

                  {/* <div className="text-center mb-5 mt-2">

                                        <span className="flex justify-center text-white font-medium text-xs sm:text-base">Use Promo code “WELCOME”
                                            <span className="px-0.5 text-sky-500">
                                                <span className="relative">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="h-4 w-4 sm:h-5 sm:w-5 cursor-pointer ">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"></path>
                                                    </svg>
                                                </span>
                                            </span> to get 5% bonus!</span>
                                    </div> */}
                  {/* <div className="text-center mb-5 mt-2"><span className="flex justify-center text-white font-medium text-xs sm:text-base">Use Promo code “WELCOME” <span className="px-0.5 text-sky-500"><span className="relative"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="h-4 w-4 sm:h-5 sm:w-5 cursor-pointer "><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"></path></svg></span></span> to get 5% bonus!</span></div> */}
                  {/* <div className="my-5"><label for="promo-code" className="block text-white font-medium text-sm sm:text-base text-left">Enter a Promo code</label><div className="mt-1 sm:flex sm:items-center"><div className="relative flex items-center w-full sm:max-w-full"><input type="text" name="promocode" id="promo-code" aria-invalid="true" aria-describedby="promo-error" className="block w-full rounded-md bg-gradient-to-r from-gray-900 to-gray-800 border-0 py-1.5 pr-14 text-white shadow-sm font-medium ring-1 ring-inset ring-blue-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-800 text-xs leading-7 sm:text-sm sm:leading-7"><div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5"><div className="inline-flex items-center px-1 font-sans text-xs text-primary-500"></div></div></div><button type="button" className="mt-3 inline-flex w-full items-center justify-center rounded-md border-2 border-blue-800  bg-gradient-to-r to-fuchsia-200 from-blue-100  px-5 py-2 text-sm font-semibold  shadow-sm text-neutral-800 hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 sm:ml-3 sm:mt-0 sm:max-w-fit">Apply Code</button></div></div> */}
                </div>
                <div className="flex justify-center text-contentclr underline">
                  {/* <a
                    className="text-xs sm:text-sm text-white 3xl:text-lg 3xl:py-3 font-medium hover:text-sky-600"
                    href="/"
                  >
                    How to buy?
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};
export default Hero;
