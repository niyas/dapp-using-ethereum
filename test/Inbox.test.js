const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let accounts,
    inbox,
    initialString = 'Hi There!'

beforeEach(async () => {
    // Get list pf all accounts
    accounts = await web3.eth.getAccounts();
        
    // Use one of these accounts to deploy the contracts
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({
            data: bytecode, 
            arguments: [initialString]
        })
        .send({from: accounts[0], gas: '1000000'});
});

describe('Inbox', () => {
    it('Deploys a contract', () => {
        assert.ok(inbox.options.address)
    });

    it('has a default message', async () => {
        const message = await  inbox.methods.message().call();
        assert.equal(message, initialString)
    });

    it('can set a message', async () => {
        let newMessage = 'Hello there!';
        await inbox.methods.setMessage(newMessage).send({
            from: accounts[0]
        });
        const message = await inbox.methods.message().call();

        assert.equal(message, newMessage)
    })
});