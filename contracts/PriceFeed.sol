// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract PriceFeed {

    /*
    Network: Goerli
    BTC_USD = 0xA39434A63A52E749F02807ae27335515BA4b07F7;
    ETH_USD = 0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e;
    EUR_USD = 0x44390589104C9164407A0E0562a9DBe6C24A0E05;
    */
    
    address public BTC_USD = 0xA39434A63A52E749F02807ae27335515BA4b07F7;
    address public ETH_USD = 0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e;
    address public EUR_USD = 0x44390589104C9164407A0E0562a9DBe6C24A0E05;

    function get_BTC_USD_Data() external view returns (int answer, uint8 decimals) {
        return _getLatestData(BTC_USD);
    }

    function get_ETH_USD_Data() external view returns (int answer, uint8 decimals) {
        return _getLatestData(ETH_USD);
    }

    function get_EUR_USD_Data() external view returns (int answer, uint8 decimals) {
        return _getLatestData(EUR_USD);
    }

    function _getLatestData(address _address) internal view returns (int, uint8) {
        (,int answer,,,) = AggregatorV3Interface(_address).latestRoundData();
        uint8 decimals = AggregatorV3Interface(_address).decimals();
        return (answer, decimals);
    }

}