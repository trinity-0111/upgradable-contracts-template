//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract UpgradableV2 is Initializable {
    string private greeting;

    function initialize(string memory _greeting) public initializer {
        greeting = _greeting;
    }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function getVersion() public pure returns (uint256) {
        return 2;
    }
}
