import { expect } from "chai";
import { ethers, upgrades } from "hardhat";

describe("Upgradable", function () {
  it("Should deploy version 1", async function () {
    const Upgradable = await ethers.getContractFactory("Upgradable");
    const upgradable = await upgrades.deployProxy(Upgradable, ["Hello, world!"]);
    await upgradable.deployed();
    
    await expect(upgradable.initialize("Hello, world!")).to.be.revertedWith("Initializable: contract is already initialized");
    expect(await upgradable.greet()).to.equal("Hello, world!");
    expect(await upgradable.getVersion()).to.equal(1);
  });

  it("Should upgrade to version 2", async function () {
    const Upgradable = await ethers.getContractFactory("Upgradable");
    const upgradable = await upgrades.deployProxy(Upgradable, ["Hello, world!"]);
    await upgradable.deployed();

    const UpgradableV2 = await ethers.getContractFactory("UpgradableV2");
    const upgradableV2 = await upgrades.upgradeProxy(upgradable.address, UpgradableV2);
    
    await expect(upgradableV2.initialize("Hello, world!")).to.be.revertedWith("Initializable: contract is already initialized");
    expect(await upgradableV2.greet()).to.equal("Hello, world!");
    expect(await upgradableV2.getVersion()).to.equal(2);
  });
});
