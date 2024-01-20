let {Web3} = require('web3');
// creating instance of web3 - connecting to blockchain using ganache
let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

async function getBalance() {
    // gives the balance of the account in wei
    const balance = await web3.eth.getBalance("0xec695e76eAe00f72F500730103CEf8f7676b6f5d");
    console.log(balance);
    // unit conversion from wei to ether
    const balanceInEther = await web3.utils.fromWei(balance, 'ether');
    console.log(balanceInEther);
    // unit conversion from ether to wei
    const balanceInWei = await web3.utils.toWei(balanceInEther, "ether");
    console.log(balanceInWei)
}

getBalance(); 

// sending ether from one account to another
async function sendEther() {
    const txn = await web3.eth.sendTransaction({
        from: "0x5619De8f6FFc366FDf67F4F0EEB7FDCB474fAb6f",
        to: "0xd7a5d5B6c4223e9074fBbF49eb45Ea42A807cFF7",
        value: web3.utils.toWei("1", "ether")
    });
    console.log(txn);
}
sendEther();
