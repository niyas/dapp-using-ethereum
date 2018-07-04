const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'absurd camera lake hurt sniff inquiry liquid bid lift earn security lottery',
    'https://rinkeby.infura.io/cA9UUVGEirI1dErdkLNE',
);

const web3 = new Web3(provider);