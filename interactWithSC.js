// INTERACTING WITH SMART CONTRACT USING PLAIN REMIX IDE

const Contract = require('web3--eth-contract');
// Connect to Ganache
Contract.setProvider("HTTP://127.0.0.1:7545");

async function instanceContract() {
    ABI = "ABI of the contract";
    ContractAddress = "Address of the contract where it is deployed";
    // first way to get an instance of our smart contract
    const contract = new Contract(ABI, ContractAddress);
    console.log(contract);
    contract.methods
        .get()
        .call({from : "account address"})
        .then((result) => {
            console.log(result);
        });
    contract.methods
        .set(50)
        // use send() if the method changes the state of the contract
        .send({from : "account address"})
    contract.methods
        .get()
        // use call() if the method does not change the state of the contract
        .call({from : "account address"})
        .then((result) => {
            console.log(result);
        });
}

instanceContract();

// Deployed contract - 
// // SPDX-License-Identifier: GPL-3.0
// pragma solidity >=0.8.2 <0.9.0;
// contract demo {
//     uint x = 10;
//     function get() public view returns(uint) {
//         return x;
//     }
//     function set(uint _x) public {
//         x = _x;
//     }
// }

// Deployment in Remix - 
// 1. Select web3 provider as the environment and add the endpoint of ganache - http://127.0.0.1:7545
// 2. Select the account from which you want to deploy the contract
// 3. Select the contract file
// 4. Compile the contract
// 5. Deploy the contract
// 6. Copy the ABI and the contract address
// 7. Paste it in the above code
// 8. Run the above code
// 9. You will get the contract instance
// 10. Now you can call the methods of the contract using the contract instance