// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const { upgrades } = require("hardhat");

async function upgrade() {
  const proxyAddress = "";

  const UpgradableV2 = await ethers.getContractFactory("UpgradableV2");
  const upgradableV2 = await upgrades.upgradeProxy(proxyAddress, UpgradableV2);

  console.log("upgradableV2 deployed to:", upgradableV2.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
upgrade().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
