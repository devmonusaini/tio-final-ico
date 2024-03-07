// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        return msg.data;
    }
}

abstract contract Ownable is Context {
    address private _owner;

    event OwnershipTransferred(
        address indexed previousOwner,
        address indexed newOwner
    );

    /**
     * @dev Initializes the contract setting the deployer as the initial owner.
     */
    constructor() {
        _transferOwnership(_msgSender());
    }

    /**
     * @dev Throws if called by any account other than the owner.
     */
    modifier onlyOwner() {
        _checkOwner();
        _;
    }

    /**
     * @dev Returns the address of the current owner.
     */
    function owner() public view virtual returns (address) {
        return _owner;
    }

    /**
     * @dev Throws if the sender is not the owner.
     */
    function _checkOwner() internal view virtual {
        require(owner() == _msgSender(), "Ownable: caller is not the owner");
    }

    /**
     * @dev Leaves the contract without owner. It will not be possible to call
     * `onlyOwner` functions anymore. Can only be called by the current owner.
     *
     * NOTE: Renouncing ownership will leave the contract without an owner,
     * thereby removing any functionality that is only available to the owner.
     */
    // function renounceOwnership() public virtual onlyOwner {
    //     _transferOwnership(address(0));
    // }

    /**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     * Can only be called by the current owner.
     */
    function transferOwnership(address newOwner) public virtual onlyOwner {
        require(
            newOwner != address(0),
            "Ownable: new owner is the zero address"
        );
        _transferOwnership(newOwner);
    }

    /**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     * Internal function without access restriction.
     */
    function _transferOwnership(address newOwner) internal virtual {
        address oldOwner = _owner;
        _owner = newOwner;
        emit OwnershipTransferred(oldOwner, newOwner);
    }
}

library SafeMath {
    function tryAdd(uint256 a, uint256 b)
        internal
        pure
        returns (bool, uint256)
    {
        unchecked {
            uint256 c = a + b;
            if (c < a) return (false, 0);
            return (true, c);
        }
    }

    function trySub(uint256 a, uint256 b)
        internal
        pure
        returns (bool, uint256)
    {
        unchecked {
            if (b > a) return (false, 0);
            return (true, a - b);
        }
    }

    function tryMul(uint256 a, uint256 b)
        internal
        pure
        returns (bool, uint256)
    {
        unchecked {
            if (a == 0) return (true, 0);
            uint256 c = a * b;
            if (c / a != b) return (false, 0);
            return (true, c);
        }
    }

    function tryDiv(uint256 a, uint256 b)
        internal
        pure
        returns (bool, uint256)
    {
        unchecked {
            if (b == 0) return (false, 0);
            return (true, a / b);
        }
    }

    function tryMod(uint256 a, uint256 b)
        internal
        pure
        returns (bool, uint256)
    {
        unchecked {
            if (b == 0) return (false, 0);
            return (true, a % b);
        }
    }

    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        return a + b;
    }

    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        return a - b;
    }

    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        return a * b;
    }

    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        return a / b;
    }

    function mod(uint256 a, uint256 b) internal pure returns (uint256) {
        return a % b;
    }

    function sub(
        uint256 a,
        uint256 b,
        string memory errorMessage
    ) internal pure returns (uint256) {
        unchecked {
            require(b <= a, errorMessage);
            return a - b;
        }
    }

    function div(
        uint256 a,
        uint256 b,
        string memory errorMessage
    ) internal pure returns (uint256) {
        unchecked {
            require(b > 0, errorMessage);
            return a / b;
        }
    }

    function mod(
        uint256 a,
        uint256 b,
        string memory errorMessage
    ) internal pure returns (uint256) {
        unchecked {
            require(b > 0, errorMessage);
            return a % b;
        }
    }
}

interface IBEP20 {
    function balanceOf(address account) external view returns (uint256);

    function totalSupply() external view returns (uint256);

    function transfer(address recipient, uint256 amount)
        external
        returns (bool);

    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) external returns (bool);

    function decimals() external view returns (uint8);
}

// ETH(18), BNB(18), USDT(6), USDC(6) and Card

// 20% ->  0.010
// 20% -> 0.015
// 10% -> 0.020
// 5% -> 0.050

// 3 months or sold out percent
// Sold by Card

// Tokens in 1 ETH = (1 / 0.010) * 1800.4321 = 180043.21

// Tito Token : 0xEC6e7a7C2b70C2Ec319279EcF4ccE1C8717ecF59

contract TitoICO is Ownable {
    address private constant Null = 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE;
    address _wbnbAddress = 0x717742DF2adcCCEf91fc08ed9454Db98c5044ad9;
    address _usdtAddress = 0xd5cD73f27414A22fcf91d3Ef5B1b1aba67088e6d;
    address _usdcAddress = 0x7190e5d48af2646dBa38c2d443CE50E33BFCC1A9;

    uint256 public Beps = 10000;
    uint256[] public rate = [100, 150, 200, 500];

    uint256 startTime; // ICO start time
    uint256 endTime; // ICO End Time
    address TitoContractAddress; // ido Token Contract Address
    uint256 soldTokens;
    uint256 TotalSupply;

    uint256 public stagesTimePeriod;
    uint256 public deployedTime;

    struct Tx {
        uint256 BlockNumber;
        uint256 TransactionDate;
        uint256 Tokens;
        uint256 CryptoAmount;
        address CryptoAddress;
    }
    mapping(address => Tx[]) private txHistory;
    mapping(address => uint256) public tokenPrices;
    mapping(address => uint256) public collectedFund;

    // Constructor for the SaleIDOToken
    constructor(address _titoContractAddress) {
        TitoContractAddress = _titoContractAddress;

        startTime = block.timestamp;
        endTime = block.timestamp + 4 * 90 days;
        TotalSupply = 1_000_000_000 * 1 ether;

        // USD Price in Crypto (means 1 USDT and USDC in 1 USD)
        tokenPrices[Null] = 1620_93; // 1620.93 USD in 1 ETH
        tokenPrices[_wbnbAddress] = 214_82; // 214.82 USD in 1 BNB
        tokenPrices[_usdtAddress] = 1_00; // 1 USDT in 1 USD
        tokenPrices[_usdcAddress] = 1_00; // 1 USDC in 1 USD

        stagesTimePeriod = 90 * 1 days;
        deployedTime = block.timestamp;
    }

    function getData()
        public
        view
        returns (
            uint256 currentState,
            uint256 currentStatePrice,
            uint256 nextStateRate,
            uint256 soldOutTokens,
            uint256 tokenSoldPercent
        )
    {
        uint256 _currentState = getCurrentStage();
        uint256 _tokenSoldPercent = (soldTokens * 100) / TotalSupply;
        uint256 _nextStateRate = _currentState < 3
            ? rate[_currentState + 1]
            : rate[_currentState];
        return (
            _currentState,
            rate[_currentState],
            _nextStateRate,
            soldTokens,
            _tokenSoldPercent
        );
    }

    function calculateToken(
        uint256 _stage,
        address _crypto,
        uint256 _amount
    ) public view returns (uint256 _a) {
        uint256 _rate = rate[_stage];
        uint256 _tokens;
        if (_crypto == Null) {
            _tokens = (tokenPrices[Null] * _amount * 100) / (_rate);
            return _tokens;
        } else if (_crypto == _wbnbAddress) {
            _tokens = (tokenPrices[_wbnbAddress] * _amount * 100) / (_rate);
            return _tokens;
        } else if (_crypto == _usdtAddress) {
            _tokens = (tokenPrices[_usdtAddress] * _amount * 100) / (_rate);
            return _tokens;
        } else if (_crypto == _usdcAddress) {
            _tokens = (tokenPrices[_usdcAddress] * _amount * 100) / (_rate);
            return _tokens;
        }
    }

    // function calculateToken(
    //     uint256 _stage,
    //     address _crypto,
    //     uint256 _amount
    // ) public view returns (uint256 _a) {
    //     uint256 _rate = rate[_stage];
    //     uint256 _tokens;
    //     if (_crypto == Null) {
    //         _tokens = (tokenPrices[Null] * _amount * _rate * 100) / (Beps);
    //         return _tokens;
    //     } else if (_crypto == _wbnbAddress) {
    //         _tokens = (tokenPrices[_wbnbAddress] * _amount * _rate * 100) / (Beps);
    //         return _tokens;
    //     } else if (_crypto == _usdtAddress) {
    //         _tokens = (tokenPrices[_usdtAddress] * _amount * _rate * 100) / (Beps);
    //         return _tokens;
    //     } else if (_crypto == _usdcAddress) {
    //         _tokens = (tokenPrices[_usdcAddress] * _amount * _rate * 100) / (Beps);
    //         return _tokens;
    //     }
    // }

    function setSoldTokens(uint256 _soldTokens) public onlyOwner {
        soldTokens = _soldTokens;
    }

    function setStagesTimePeriod(uint256 _time) public onlyOwner {
        stagesTimePeriod = _time;
    }

    function getCurrentStage() public view returns (uint256) {
        uint256 _tokenSoldPercent = (soldTokens * 100) / TotalSupply;
        if (
            block.timestamp >= (deployedTime + stagesTimePeriod * 3) ||
            _tokenSoldPercent >= 50
        ) {
            return 3; // 3 (forth stage)
        } else if (
            block.timestamp >= (deployedTime + stagesTimePeriod * 2) ||
            _tokenSoldPercent >= 40
        ) {
            return 2; // 2 ( third stage )
        } else if (
            block.timestamp >= (deployedTime + stagesTimePeriod) ||
            _tokenSoldPercent >= 20
        ) {
            return 1; // 1 (second stage )
        } else {
            return 0; // 0 (first stage)
        }
    }

    function buy(
        uint256 _payoutAmount,
        address _tokenContract,
        bool isPromoCode
    ) external payable {
        require(checkContract(_tokenContract), "Invalid Token Contract");
        require((block.timestamp > startTime), "ICO Not Stated Yet");
        require((block.timestamp < endTime), "ICO Sale Time Ended");
        uint256 _tokenAmount;
        uint256 _stage = getCurrentStage();
        if (msg.value != 0) {
            require(_tokenContract == Null, "ETH and Token both can't be send");
            _payoutAmount = msg.value;
            payable(owner()).transfer(msg.value);
            _tokenAmount = calculateToken(_stage, Null, msg.value);
            // _tokenAmount = (_payoutAmount * tokenPrices[_tokenContract]);
        } else {
            require(_payoutAmount != 0, "Zero Amount");
            require(
                IBEP20(_tokenContract).transferFrom(
                    msg.sender,
                    address(this),
                    _payoutAmount
                ),
                "User Fund Transfer Failed"
            );
            require(
                IBEP20(_tokenContract).transfer(owner(), _payoutAmount),
                "Contract Fund Transfer Failed"
            );
            if (_tokenContract == _wbnbAddress) {
                _tokenAmount = calculateToken(
                    _stage,
                    _wbnbAddress,
                    _payoutAmount
                );
            } else {
                _tokenAmount =
                    calculateToken(_stage, _usdtAddress, _payoutAmount) *
                    1e12;
            }
        }
        if (isPromoCode) {
            _tokenAmount += (_tokenAmount * 30) / 100;
        }

        require(_tokenAmount <= availableTito(), "Insufficient Tito Supply");

        require(
            IBEP20(TitoContractAddress).transfer(msg.sender, _tokenAmount),
            "Tito Transfer Failed"
        );

        // transaction history
        Tx memory _tx = Tx(
            block.number,
            block.timestamp,
            _tokenAmount,
            _payoutAmount,
            _tokenContract
        );
        txHistory[msg.sender].push(_tx);

        // payoutCoin Fund Count Update
        soldTokens += _tokenAmount;
        collectedFund[_tokenContract] += _payoutAmount;
        // Collect payoutToken only in this step
    }

    function sell(uint256 _dollar, address _user) public onlyOwner {
        require(_dollar != 0, "Zero Amount");
        require((block.timestamp > startTime), "ICO Not Stated Yet");
        require((block.timestamp < endTime), "ICO Sale Time Ended");
        uint256 _tokenAmount;

        _tokenAmount = _dollar;
        require(_tokenAmount <= availableTito(), "Insufficient Tito Supply");
        require(
            IBEP20(TitoContractAddress).transfer(_user, _tokenAmount),
            "Tito Transfer Failed"
        );

        // transaction history
        Tx memory _tx = Tx(
            block.number,
            block.timestamp,
            _tokenAmount,
            _dollar,
            address(0)
        );
        txHistory[msg.sender].push(_tx);

        // payoutCoin Fund Count Update
        soldTokens += _tokenAmount;
        collectedFund[address(0)] += _dollar;
    }

    function checkContract(address _contractAddress)
        private
        view
        returns (bool)
    {
        if (
            _contractAddress == Null ||
            _contractAddress == _wbnbAddress ||
            _contractAddress == _usdtAddress ||
            _contractAddress == _usdcAddress
        ) {
            return true;
        } else {
            return false;
        }
    }

    // balance of input address (idoCoin)
    function availableTito() public view returns (uint256) {
        return IBEP20(TitoContractAddress).balanceOf(address(this));
    }

    // Admin can Change Start Time and End Time for ICO
    function setTime(uint256 _startTime, uint256 _endTime) public onlyOwner {
        require(
            _endTime > _startTime,
            "Start Time Can not be Greater Than End Time"
        );
        startTime = _startTime;
        endTime = _endTime;
    }

    // Admin can change Token Rate
    function setRate(address _tokenContract, uint256 _rate) public onlyOwner {
        tokenPrices[_tokenContract] = _rate;
    }

    // admin can retrieve any BEP20 Token via this function
    function retrieveStuckedBEP20Token(
        address _tokenAddr,
        uint256 amount,
        address toWallet
    ) public onlyOwner returns (bool) {
        IBEP20(_tokenAddr).transfer(toWallet, amount);
        return true;
    }

    function userTxHistory(address _user) public view returns (Tx[] memory) {
        return txHistory[_user];
    }
}
