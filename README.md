# Upgradable Contracts Template

This project provides Solidity Smart Contract templates and deployment script for upgradable contracts.

The project comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts. It also comes with a variety of other tools, preconfigured to work with the project code.

## Usage

Follow the below steps try out a complete process to deploy to Ropsten testnet, and upgrade the contract.
* run `yarn install` install dependencies
* run `npx hardhat test` make sure all tests pass
* run `npm run deploy` to deploy proxyAdmin, proxy, and implementation, proxy address is your contract to read from.
* Update `proxyAddress`'s value to the dewly deployed proxy address in `read.ts` file 
* run `npm run read`, you will see data from the contract, including its version that should have value 1.
* Update `proxyAddress`'s value to the dewly deployed proxy address in `upgrade.ts` file 
* run `npm run upgrade` to upgrade contract `Upgradable` to `UpgradableV2`
* run `npm run read`, you will see its version is updated to 2 while other data aren't changed (by choice).

Other useful hardhat commands:
```shell
yarn install
npx hardhat compile
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat coverage
```

# Deploy and Etherscan verification

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Ropsten.

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Etherscan API key, your Ropsten node URL (eg from Alchemy), and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
npx hardhat run scripts/deploy.ts --network ropsten 
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```shell
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS
```

## References
* [Hardhat](https://hardhat.org/getting-started/)
* [Writing Upgradable](https://docs.openzeppelin.com/upgrades-plugins/1.x/writing-upgradeable)