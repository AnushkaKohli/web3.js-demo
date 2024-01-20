// COMPILING THE SMART CONTRACT USING WEB.JS LIBRARY AND SOLC (without remix)

// npm i solc
// fs is a part of js. it helps to read files from the file system
const solc = require('solc');
const fs = require('fs');
const { Web3 } = require('web3');

const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

// reading the file
const fileContent = fs.readFileSync('demo.sol', 'utf-8');
// const fileContent = fs.readFileSync('demo.sol').toString();
// console.log(fileContent);
var input = {
    language: 'Solidity',
    sources: {
        'demo.sol': {
            content: fileContent
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*']
            },
        },
    },
};

// COMPILING OUR SMART CONTRACT
var output = JSON.parse(solc.compile(JSON.stringify(input)));
// console.log(output);
var ABI = output.contracts['demo.sol']['demo'].abi;
// console.log(ABI);
var bytecode = output.contracts['demo.sol']['demo'].evm.bytecode.object;
// console.log(bytecode);

// DEPLOYING THE CONTRACT OVER GANACHE BLOCKCHAIN USING WEB3.JS LIBRARY
// second way to get an instance of our smart contract
const contract = new web3.eth.Contract(ABI);
// account to deploy our smart contract
let defaultAccount;

web3.eth.getAccounts().then((accounts) => {
    // console.log("Accounts: ", accounts); //it will show all the ganache accounts
    defaultAccount = accounts[0];
    // console.log("Default Account: ", defaultAccount); //to deploy the contract from default Account
    contract
        .deploy({ data: bytecode })
        // gas - gas limit
        // .send({ from: defaultAccount, gas: 470000 })
        // .on("receipt", (receipt) => { //event,transactions,contract address will be returned by blockchain
        //     console.log("Contract Address: ", receipt.contractAddress);
        //     console.log("Receipt: ", receipt);
        // })
        // .then((demoContract) => {
        //     demoContract.methods.get().call((err, data) => {
        //         console.log("Initial value: ", data);
        //         console.log("Error: ", err);
        //     })
        // })
})