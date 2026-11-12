// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.5.16;

contract Simple {
    address public manager;
    constructor() public {
        manager = msg.sender;
    }
}
