const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("Deploy Gas Challenge Contract", () => {
  let gas_contract;

  beforeEach(async () => {
    const gas_challenge_contract = await ethers.getContractFactory(
      "gasChallenge"
    );
    gas_contract = await gas_challenge_contract.deploy();
  });

  describe("Compute Gas", () => {
    it("Should return lower gas", async () => {
      await gas_contract.notOptimizedFunction();
      await gas_contract.optimizedFunction();
    });
  });

      // Write test block here to check sum of array equals 0
      describe("Check Sum Of Array", () => {
        it("Should return 0", async () => {
          const sum = await gas_contract.sumOfArray();
          expect(sum).to.equal(0);
      
    });
  });
});
