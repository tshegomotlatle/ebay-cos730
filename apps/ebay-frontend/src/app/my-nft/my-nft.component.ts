import { Component, OnInit } from '@angular/core';
import { ethers } from 'ethers';
import contract from './../AirpodMan.json';
import { HttpClient } from '@angular/common/http';
import { NftServiceService } from './../../services/nft-service.service';



@Component({
  selector: 'ebay-cos730-my-nft',
  templateUrl: './my-nft.component.html',
  styleUrls: ['./my-nft.component.scss'],
})
export class MyNFTComponent implements OnInit {
  ethereum: any;
  currentOwner: string = '';
  // readonly METAMASK_KEY: string = 'metamask';
  readonly CONTRACT_ADDRESS: string =
    '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9';
  public contractABI = contract.abi;
  public nfts: any = [];
  public email!: string;
  public noses = ["up", "down", "teardrop", "pacman", "weird"]
  public skins = ["alien", "avatar", "brown", "dark", "white"]
  public backgrounds = ["blue", "green", "pink", "red", "yellow"]
  public eyes = ["centre", "dialated", "down", "glasses", "up"]
  public mouths = ["frown", "half-smile", "smile", "teeth", "teeth-gold"]
  constructor(private _httpClient: HttpClient, private nftService: NftServiceService) { }

  ngOnInit(): void {
    this.email = localStorage.getItem("email") || "";
    this.fetchNFTs();
    this.ethereum = this.nftService.etheruem
    console.log(this.ethereum);
    this.nftService.getNFT().then(
      (response) => {
        console.log(response);

        response = response.filter(
          (nft) => {
            if (nft.email == this.email)
              return true;
            else
              return false;
          }
        )
        this.nfts = [...response]
      }
    )
    // this.currentOwner = this.nftService.
  }

  private async fetchNFTs(): Promise<any> {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    const airpodmanContract = new ethers.Contract(
      this.CONTRACT_ADDRESS,
      this.contractABI,
      signer
    );

    const airpodmans = await airpodmanContract['getAirpodMan']();
    console.log('Retrieved keyboards...', airpodmans);
    this.nfts = [...airpodmans];
  }
}
