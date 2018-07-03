const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

beforeEach(() => {
    // Get list pf all accounts
    web3.eth.getAccounts()
        .then(fetchedAccounts => {
            console.log(fetchedAccounts);
        });
    // Use one of these accounts to deploy the contracts
});

describe('Inbox', () => {
    it('Deploys a contract', () => {
        
    })
})