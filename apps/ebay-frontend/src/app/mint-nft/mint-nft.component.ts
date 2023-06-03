import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ethers } from 'ethers';
import { NftServiceService } from '../../services/nft-service.service';
import { nftInterface } from '../interfaces/nft-interface';
import contract from './../AirpodMan.json'

@Component({
  selector: 'ebay-cos730-mint-nft',
  templateUrl: './mint-nft.component.html',
  styleUrls: ['./mint-nft.component.scss'],
})
export class MintNFTComponent implements OnInit {
  nft!: nftInterface;
  // nftTest : any;
  ethereum!: any;
  currentOwner!: string;
  // readonly METAMASK_KEY: string = 'metamask';
  readonly CONTRACT_ADDRESS: string = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";
  isTipping!: boolean;
  contractABI = contract.abi;
  modalHeading!: string;
  modalBody!: string;
  // public contractABI = contract.abi;

  constructor(
    private http: HttpClient,
    private nftService: NftServiceService
  ) {
    this.nft = {
      name: "",
      email: "",
      description: "",
      image: "",
      attributes: {
        background: "",
        skinColour: "",
        eyes: "",
        nose: "",
        mouth: "",
        rarity: ""
      },
    }
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.


    // this.nftService.test();
    this.getRandomNFT();
    // this.checkIfExists(this.nft);
  }


  getRandomNFT() {
    const max = 999;
    const randomNFT = Math.floor(Math.random() * (max + 1));
    this.http.get<nftInterface>(`/assets/${randomNFT}.json`).subscribe(
      async (response) => {
        if (await this.checkIfExists(response))
          this.getRandomNFT();
        else
          this.nft = response;

      }
    )
  }

  async checkIfExists(nft: nftInterface) {
    const nfts = await this.nftService.getNFT();
    const imageArray: string[] = []
    nfts.forEach(
      (nft) => {
        imageArray.push(nft.image)
      }
    )
    console.log(imageArray.includes(this.nft.image));

    return imageArray.includes(this.nft.image);
  }

  async mintNFT() {
    this.ethereum = (window as any).ethereum
    this.nft.email = localStorage.getItem("email") || "";;


    if (!this.ethereum) {
      console.error('Ethereum object is required to submit a tip');
      return;
    }
    this.isTipping = true;
    try {
      const provider = new ethers.providers.Web3Provider(this.ethereum);
      const signer = provider.getSigner();
      const keyboardsContract = new ethers.Contract(this.CONTRACT_ADDRESS, this.contractABI, signer);
      const args =
      {
        name: this.nft.name,
        email: this.nft.email,
        description: this.nft.description,
        image: this.nft.image,
        background: this.nft.attributes.background,
        skinColour: this.nft.attributes.skinColour,
        eyes: this.nft.attributes.eyes,
        nose: this.nft.attributes.nose,
        mouth: this.nft.attributes.mouth,
        rarity: this.nft.attributes.rarity
      }
      const createTxn = await keyboardsContract['create'](args);
      await createTxn.wait();
      console.log('Sent tip!', createTxn.hash);
      this.nftService.buyNFT(this.nft).then(
        (response) => {
          console.log(response);
          this.openModal("mint", this.nft)
        }
      )
    } catch (err: any) {
      console.error(err.message);
    } finally {
      this.isTipping = false;
    }
  }

  openModal(type: string, nft: nftInterface) {
    this.modalHeading = "Mint NFT";
    this.modalBody = `Item ${nft.name} has been minted to your account`;
    document.getElementById('modalClicker')?.click()
  }


}
