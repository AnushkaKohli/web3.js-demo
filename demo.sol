// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.2 <0.9.0;

contract demo {
    uint x = 10;

    function get() public view returns (uint) {
        return x;
    }

    function set(uint _x) public {
        x = _x;
    }
}
