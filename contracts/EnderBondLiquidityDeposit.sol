// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/cryptography/EIP712Upgradeable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts-upgradeable/utils/cryptography/ECDSAUpgradeable.sol";
import "hardhat/console.sol";
// import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
// import "@openzeppelin/contracts/utils/cryptography/draft-EIP712.sol";

contract EnderBondLiquidityDeposit is 
    Initializable, 
    EIP712Upgradeable,
    OwnableUpgradeable, 
    ReentrancyGuardUpgradeable {

    string private constant SIGNING_DOMAIN = "depositContract";
    string private constant SIGNATURE_VERSION = "1";

    address public stEth; // address of stEth
    address public lido; // address of lido
    address public admin; // address of admin
    address public enderBond; // address of enderBond
    uint256 public index; // undex is used to track user info
    uint256 public minDepositAmount; // minimum deposit amount for EnderBondLiquidityDeposit
    uint256 public rewardShareIndex; // overall reward share index for users
    uint256 public totalStaked; // total Staked amount
    bool public depositEnable; // Used for go live on a particular time
    // @notice A mapping that indicates whether a token is bondable.
    mapping(address => bool) public bondableTokens; // To allow a particular token to deposit 
    mapping(uint256 => uint256) public rewardSharePerUserIndexStEth; // reward share index of a user at the time of deposit
    mapping(uint256 => uint256) public totalRewardOfUser;
    // mapping(address => bool) public isWhitelisted;
    mapping(uint256 => Bond) public bonds; // user info struct mapping with index
    
    // user info 
    struct Bond {
        address user;
        uint256 principalAmount;
        uint256 totalAmount;
        uint256 bondFees;
        uint256 maturity;
    }

    struct signData{
        address admin;
        uint256 key;
        bytes signature;
    }
    error InvalidAmount();
    error InvalidMaturity();
    error InvalidBondFee();
    error ZeroAddress();
    error NotAllowed();
    error NotBondableToken();
    error addressNotWhitelisted();
    event depositEnableSet(bool depositEnable);
    event MinDepAmountSet(uint256 indexed newAmount);
    event BondableTokensSet(address indexed token, bool indexed isEnabled);
    event WhitelistChanged(address indexed whitelistingAddress, bool indexed action);
    event Deposit(address indexed sender, uint256 index, uint256 bondFees, uint256 principal, uint256 maturity, address token);
    event userInfo(address indexed user, uint256 index, uint256 principal, uint256 Reward, uint256 totalAmount, uint256 bondFees, uint256 maturity);

    function initialize(address _stEth, address _lido) public initializer {
        __Ownable_init();
        __EIP712_init(SIGNING_DOMAIN, SIGNATURE_VERSION);
        stEth = _stEth;
        lido = _lido;
        bondableTokens[_stEth] = true;
        minDepositAmount = 100000000000000000; 
    }

    modifier depositEnabled() {
        if (depositEnable != true) revert NotAllowed();
        _;
    }

    modifier onlyBond() {
        if (msg.sender != enderBond) revert NotAllowed();
        _;
    }

    /**
     * @notice Updates the bondable status for a list of tokens.
     * @dev Sets the bondable status of a list of tokens. Only callable by the contract owner.
     * @param tokens The addresses of the tokens to be updated.
     * @param enabled Boolean value representing whether each token is bondable.
     */
    function setBondableTokens(address[] calldata tokens, bool enabled) external onlyOwner {
        uint256 length = tokens.length;
        for (uint256 i; i < length; ++i) {
            bondableTokens[tokens[i]] = enabled;
        emit BondableTokensSet(tokens[i], enabled);
        }
    }

    /**
     * @notice Updates the minimum deposit amount.
     * @dev Sets the minimum deposit amount. Only callable by the contract owner.
     * @param _amt The amount to be updated.
     */
    function setMinDepAmount(uint256 _amt) public onlyOwner {
        minDepositAmount = _amt;
        emit MinDepAmountSet(_amt);
    }

    /**
     * @notice Updates whether deposit is enabled or not.
     * @dev Sets whether deposit is enabled or not. Only callable by the contract owner.
     * @param _depositEnable true if enabled otherwise false.
     */
    function setDepositEnable(bool _depositEnable) public onlyOwner{
        depositEnable = _depositEnable;
        emit depositEnableSet(depositEnable);
    }

    /**
     * @notice Updates contract addresses.
     * @dev Sets contract addresses. Only callable by the contract owner.
     * @param _addr The address of the token or contracts to be updated.
     * @param _type 1 ==> stETH address, 2 ==> lido adrress, 3 ==> ender bond address.
     */
    function setAddress(address _addr, uint256 _type) public onlyOwner {
        if (_addr == address(0)) revert ZeroAddress();

        if (_type == 1) stEth = _addr;
        else if (_type == 2) lido = _addr;
        else if (_type == 3) enderBond = _addr;
    }

    /**
     * @notice Allows a user to deposit a specified token into a bond
     * @param principal The principal amount of the bond
     * @param maturity The maturity date of the bond (lock time)
     * @param bondFee Self-set bond fee
     * @param token The address of the token (if token is zero address, then depositing ETH)
     * @param userSign To verify user details for whitelisting
     */
    function deposit(
        uint256 principal,
        uint256 maturity,
        uint256 bondFee,
        address token,
        signData memory userSign
    ) external payable nonReentrant depositEnabled {
        if (principal < minDepositAmount) revert InvalidAmount();
        if (maturity < 7 || maturity > 365 ) revert InvalidMaturity();
        if (token != address(0) && !bondableTokens[token]) revert NotBondableToken();
        if (bondFee <= 0 || bondFee >= 10000) revert InvalidBondFee();   
        address signer = _verify(userSign);
        require(signer == userSign.admin, "user is not whitelisted");
        console.log(IERC20(stEth).balanceOf(address(this)), totalStaked);
        uint256 reward = IERC20(stEth).balanceOf(address(this)) - totalStaked;   
        if (reward > 0){
            calculatingSForReward();
            totalStaked += reward;
        }
        // token transfer
        if (token == address(0)) {
            if (msg.value != principal) revert InvalidAmount(); 
            (bool suc, ) = payable(lido).call{value: msg.value}(abi.encodeWithSignature("submit(address)", address(this)));     
            require(suc, "lido eth deposit failed");                                    
        } else {           
            // send directly to the deposit contract      
            IERC20(token).transferFrom(msg.sender, address(this), principal);  
        }        
        totalStaked += principal;  
        console.log(totalStaked, "totalStaked");
        index ++;
        rewardSharePerUserIndexStEth[index] = rewardShareIndex;
        bonds[index] = Bond(
            msg.sender,
            principal,
            principal,
            bondFee,
            maturity
        );
        // IEnderStaking(endStaking).epochStakingReward(stEth);

        emit Deposit(msg.sender, index, bondFee, principal, maturity, token);
    }

    /** 
    * @notice This function is return 1e6 
     */

    function expandTo6Decimal() internal pure returns(uint256){
        return 1e6;
    }

    /** 
    * @notice This function is used to update the reward share index 
     */
    
    
    function calculatingSForReward() internal {
        uint256 reward = IERC20(stEth).balanceOf(address(this)) - totalStaked;
        if (reward > 0){
            // multipling the rewardShareIndex with 1e6 to avoid underflow
            rewardShareIndex = rewardShareIndex + ((reward * expandTo6Decimal())/totalStaked); 
        }
    }

    /**
    * @notice This function is call by ender bond contract when ender bond contract go live
    * @param index this is used to get user info of a particular user
    * @param _bond The address of ender bond
     */
    function depositedIntoBond(uint256 index, address _bond) external   returns(address user, uint256 principal, uint256 bondFees, uint256 maturity){
        totalRewardOfUser[index] =   (bonds[index].principalAmount * (rewardShareIndex - rewardSharePerUserIndexStEth[index]));
        bonds[index].totalAmount = (bonds[index].principalAmount + (totalRewardOfUser[index])/expandTo6Decimal());  // dividing the user amount with 1e6
        IERC20(stEth).transfer(_bond, bonds[index].totalAmount);
        emit userInfo(user, index, bonds[index].principalAmount, totalRewardOfUser[index], bonds[index].totalAmount, bonds[index].bondFees, bonds[index].maturity);
        return (bonds[index].user, bonds[index].totalAmount, bonds[index].bondFees, bonds[index].maturity);
    }

    function _hash(signData memory userSign)
        internal
        view
        returns (bytes32)
    {
        return
            _hashTypedDataV4(
                keccak256(
                    abi.encode(
                        keccak256(
                            "userSign(address admin,uint256 key)"
                        ),
                        userSign.admin,
                        userSign.key
                    )
                )
            );
    }

    /**
    * @notice verifying the owner signature to check whether the user is whitelisted or not
     */
    function _verify(signData memory userSign)
        internal
        view
        returns (address)
    {
        bytes32 digest = _hash(userSign);
        return ECDSAUpgradeable.recover(digest, userSign.signature);
    }
}