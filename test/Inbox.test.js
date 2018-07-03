const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

let accounts;
beforeEach(async () => {
    // Get list pf all accounts
    accounts = await web3.eth.getAccounts();
        
    // Use one of these accounts to deploy the contracts
});

describe('Inbox', () => {
    it('Deploys a contract', () => {
        console.log(accounts);
    });
})