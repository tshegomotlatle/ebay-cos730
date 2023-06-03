const hre = require("hardhat");

async function main() {
    const AirpodManContractFactory = await hre.ethers.getContractFactory("AirpodMan");

    const AirpodManContract = await AirpodManContractFactory.deploy(
        // args
    );
    await AirpodManContract.deployed();

    console.log('Contract deployed to:', AirpodManContract.address);
    const airpodmans = await AirpodManContract.getAirpodMan();
    console.log('We got the keyboards!', airpodmans);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
