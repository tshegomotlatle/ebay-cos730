//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

// struct _Attributes {
//   string background;
//   string skinColour;
//   string eyes;
//   string nose;
//   string mouth;
//   string rarity;
// }

struct _Airpodman {
  string name;
  string email;
  string description;
  string image;
  string background;
  string skinColour;
  string eyes;
  string nose;
  string mouth;
  string rarity;
}

contract AirpodMan {
  _Airpodman[] public airpodMan;
  // _Attributes public attributes;

  function getAirpodMan() view public returns(_Airpodman[] memory) {
    return airpodMan;
  }

  // function setAttributes(
  //   string calldata _background
  // ) external {
  //   attributes.background = _background;
  // }

  // constructor(
  //   _Airpodman memory airpodMans
  //   )
  // {
  //   console.log(airpodMans.name);
  // }

  function create(
    _Airpodman memory airpodMans
    // _Attributes calldata attr
  ) external {

  console.log("OK I am making the contract, just this once mind");


    // _Attributes memory newAttr = _Attributes({
    //   background : attr.background,
    //   skinColour : attr.skinColour,
    //   eyes : attr.eyes,
    //   nose : attr.nose,
    //   mouth : attr.mouth,
    //   rarity : attr.rarity
    // });

    _Airpodman memory newAirpodMan = _Airpodman({
      name: airpodMans.name,
      email: airpodMans.email,
      description : airpodMans.description,
      image : airpodMans.image,
      background: airpodMans.background,
      skinColour: airpodMans.skinColour,
      eyes: airpodMans.eyes,
      nose: airpodMans.nose,
      mouth: airpodMans.mouth,
      rarity: airpodMans.rarity
    });

    airpodMan.push(newAirpodMan);
  }
}
