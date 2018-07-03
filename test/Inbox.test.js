const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let accounts,
    inbox;
beforeEach(async () => {
    // Get list pf all accounts
    accounts = await web3.eth.getAccounts();
        
    // Use one of these accounts to deploy the contracts
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode, arguments: ['Hi There!']})
        .send({from: accounts[0], gas: '1000000'});
});

describe('Inbox', () => {
    it('Deploys a contract', () => {
        console.log(inbox);
    });
})