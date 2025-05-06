const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying CuratedlistNFT contract from:", deployer.address);

  const CuratedlistNFT = await hre.ethers.getContractFactory("CuratedlistNFT");
  const whitelistNFT = await CuratedlistNFT.deploy(); // In ethers v6, this waits for deployment

  console.log("✅ CuratedlistNFT contract deployed at:", whitelistNFT.target); // use .target in ethers v6
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});
