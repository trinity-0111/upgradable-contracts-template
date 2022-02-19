import { expect } from "chai";
import { ethers } from "hardhat";

describe("Upgradable", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Upgradable = await ethers.getContractFactory("Upgradable");
    const upgradable = await Upgradable.deploy("Hello, world!");
    await upgradable.deployed();

    expect(await upgradable.greet()).to.equal("Hello, world!");

    const setGreetingTx = await upgradable.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await upgradable.greet()).to.equal("Hola, mundo!");
  });
});
