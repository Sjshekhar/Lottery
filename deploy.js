const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
  'talent lab shallow field bean exhibit envelope power antique defy ozone caught',
  'https://rinkeby.infura.io/v3/4d41a265f3634680a3485d84ac8876d2'
);

const web3 = new Web3(provider);


const deploy = async () => {
const accounts = await web3.eth.getAccounts();
console.log('Attemptimg to deploy from account', accounts[0]);

const result = await new web3.eth.Contract(JSON.parse(interface))
.deploy({data: '0x' + bytecode})
.send({from: accounts[0]});

console.log(interface);
console.log('Contract deployed to', result.options.address);
};

deploy();
