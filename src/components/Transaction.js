import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import { contract, USDT, USDC, Null, BNB, TitoICO, matic_testnet } from "../config";
import { useBalance, useAccount, useConnect } from "wagmi";
import USDCABI from "../USDCABI.json";
import USDTABI from "../USDTABI.json";
import WBNBABI from "../WBNBABI.json";
import TitoIcoAbi from "../TitoIcoAbi.json";
function Transaction(props) {

    let {coinAddress,amount} = props;

  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: TitoICO,
    abi: TitoIcoAbi,
    functionName: 'buy',
    args: ["123", coinAddress,
       true ],
    value: parseInt(amount*parseInt(10**18)),
  })

    return (
        <div>

            <button
                onClick={() => write()}
                className="sm:mt-2 mb-2 w-full inline-flex items-center justify-center whitespace-nowrap border-0 rounded-md px-5 py-2 sm:px-5 sm:py-5 3xl:py-4 4xl:py-5 text-sm sm:text-md  font-semibold text-white leading-5 shadow-sm  bg-gradient-to-r from-sky-600 to-fuchsia-600 hover:bg-blue-900"
            >BUY
            </button>
            {isLoading && <div>Check Wallet</div>}
            {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}

        </div>
    )
}

export default Transaction;