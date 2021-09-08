const { number } = require("yargs");

const universalTokenMultiSigWallet = artifacts.require("./universalTokenMultiSigWallet.sol")

module.exports =  function (deployer, network, accounts) {
  const newowners= accounts.slice(0,2) 
  const newrequired = 2
 deployer.deploy(universalTokenMultiSigWallet,newowners,newrequired);
}


