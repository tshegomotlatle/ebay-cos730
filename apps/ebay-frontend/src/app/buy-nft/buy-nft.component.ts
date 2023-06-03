import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ethers } from 'ethers';
import { NftServiceService } from '../../services/nft-service.service';
import { nftInterface } from '../interfaces/nft-interface';
import contract from './../AirpodMan.json';


@Component({
  selector: 'ebay-cos730-buy-nft',
  templateUrl: './buy-nft.component.html',
  styleUrls: ['./buy-nft.component.scss'],
})
export class BuyNFTComponent implements OnInit {
  nft: nftInterface = {} as nftInterface;
  readonly CONTRACT_ADDRESS: string =
    '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9';
  public contractABI = contract.abi;
  name: string = "";
  price: number = 0

  constructor(
    private activateRoute: ActivatedRoute,
    private nftService: NftServiceService
  ) {
    
  }

  ngOnInit(): void {
    this.nft = {
      name: "",
      description: "",
      email: "",
      image: "",
      attributes: {
        background: "",
        eyes: "",
        mouth: "",
        nose: "",
        rarity: "",
        skinColour: ""
      }

    }
    this.name = this.activateRoute.snapshot.paramMap.get('name') || " ";
    
    this.fetchNFTs().then(
      async (response) => {
        console.log(response);

        let temp = response.filter(
          (data: any) => {
            if (data.name == this.name)
              return true;
            else
              return false
          });

        temp = temp[0];
        console.log(temp);

        if (response.length != 0) {
          this.nft.name = temp.name;
          this.nft.description = temp.description;
          this.nft.email = temp.email;
          this.nft.image = temp.image;
          this.nft.attributes.eyes = temp.eyes;
          this.nft.attributes.background = temp.background;
          this.nft.attributes.mouth = temp.mouth;
          this.nft.attributes.nose = temp.nose;
          this.nft.attributes.rarity = temp.rarity;
          this.nft.attributes.skinColour = temp.skinColour;
        }
        else {

          temp = await this.nftService.getNFT();
          this.nft = temp.filter(
            (data: any) => {
              if (data.name == this.name)
                return true;
              else
                return false
            })[0];
          console.log(this.nft);


        }
        this.price = 10000 - (parseFloat(this.nft.attributes.rarity) * 100 * 100)
        this.nft.attributes.rarity = (parseFloat(this.nft.attributes.rarity) * 100) + "%";
      }
    )
  }

  async sellNFT() {
    if (await this.checkIfExists(this.nft) == false)
      this.nftService.sellNFT(this.nft).then(
        (response) => {
          console.log(response);

        }
      )
  }

  private async fetchNFTs(): Promise<any> {
    try {

      const provider = new ethers.providers.Web3Provider((window as any).ethereum);
      const signer = provider.getSigner();
      const airpodmanContract = new ethers.Contract(
        this.CONTRACT_ADDRESS,
        this.contractABI,
        signer
      );

      const airpodmans = await airpodmanContract['getAirpodMan']();
      console.log('Retrieved keyboards...', airpodmans);
      return airpodmans;
    }
    catch {
      return [];
    }
  }

  async checkIfExists(nft: nftInterface) {
    const nfts = await this.nftService.getNFTSold();
    const imageArray: string[] = []
    nfts.forEach(
      (nft) => {
        imageArray.push(nft.image)
      }
    )
    console.log(imageArray.includes(this.nft.image));

    return imageArray.includes(this.nft.image);
  }
}
