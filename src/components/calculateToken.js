import { contract, USDT, USDC, Null, BNB, TitoICO,matic_testnet } from "../config";

const tokenPrices = {};

// const Null = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
// // const _wbnbAddress = "0x90D694ab4eA9737b21a363E35b406e740238D239";
// // const _usdtAddress = "0xaB0011b2Ac2B095c6EeC8e82eE7E55CE7A1e1a22";
// // const _usdcAddress = "0xa0106242975e8281EBb2dcdab5F3705d424c74a8";
// const _wbnbAddress = "0xB8c77482e45F1F44dE1745F52C74426C631bDD52";
// const _usdtAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
// const _usdcAddress = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";

tokenPrices[Null] = 1620.93; // 1620.93 USD in 1 ETH
tokenPrices[BNB] = 214.82; // 214.82 USD in 1 BNB
tokenPrices[USDT] = 1.0; // 1 USDT in 1 USD
tokenPrices[USDC] = 1.0; // 1 USDC in 1 USD

const rate = [100, 150, 200, 500];

function calculateToken(_stage, _crypto, _amount) {
  const _rate = rate[_stage];
  let _tokens;

  if (_crypto === Null) {
    _tokens = tokenPrices[Null] * _amount * (10000 / _rate);
  } else if (_crypto === BNB) {
    _tokens = tokenPrices[BNB] * _amount * (10000 / _rate);
  } else if (_crypto === USDT) {
    _tokens = tokenPrices[USDT] * _amount * (10000 / _rate);
  } else if (_crypto === USDC) {
    _tokens = tokenPrices[USDC] * _amount * (10000 / _rate);
  }
  return _tokens;
}
export default calculateToken;
// const token = calculateToken(0, _wbnbAddress, 1);
// console.log("token", token);
