// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  const AirpodManContractFactory = await hre.ethers.getContractFactory("AirpodMan");
  const args = 
    {
      name: "Tshego",
      email: "Tshego@gmail.com",
      description: "A test for description",
      image: "1.png",
      background: "red",
      skinColour: "blue",
      eyes: "up",
      nose: "round",
      mouth: "smile",
      rarity: "0.55"
    }
  const args2 = 
    {
      name: "Mokgethwa",
    email: "Mokgethwa@gmail.com",
    description: "A test for description Mokgethwa",
      image: "2.png",
      background: "red",
      skinColour: "green",
      eyes: "up",
      nose: "round",
      mouth: "frown",
      rarity: "0.77"
    }
  const AirpodManContract = await AirpodManContractFactory.deploy(
    // args
    );
  await AirpodManContract.deployed();
  console.log('Contract deployed to:', AirpodManContract.address);
  
  // const argsArray = ["Tshego","Tshego@gmail.com","A test for description","1.png"];
  // const argsArray2 = ["red","blue","up","round","smile","0.55"];
  const AirpodManTxn = await AirpodManContract.create(args);
  const AirpodManTxn2 = await AirpodManContract.create(args2);
  await AirpodManTxn.wait();
  await AirpodManTxn2.wait();

  const AirpodMan = await AirpodManContract.getAirpodMan();
  console.log('We got the AirpodMen!', AirpodMan);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
