import { Component, OnInit } from '@angular/core';
import { ethers } from 'ethers';
import contract from './../AirpodMan.json';
import { HttpClient } from '@angular/common/http';
import { NftServiceService } from './../../services/nft-service.service';
import { nftInterface } from '../interfaces/nft-interface';



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
  public nftsPerm: any = [];
  public email!: string;
  public noses = ["up", "down", "teardrop", "pacman", "weird"]
  public skins = ["alien", "avatar", "brown", "dark", "white"]
  public backgrounds = ["blue", "green", "pink", "red", "yellow"]
  public eyes = ["centre", "dialated", "down", "glasses", "up"]
  public mouths = ["frown", "half-smile", "smile", "teeth", "teeth-gold"]
  modalHeading: string = "";
  modalBody: string = "";
  filters : {type: string, sortTerm : string} [] = []
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
        this.nftsPerm = this.nfts;
      }
    )
    // this.currentOwner = this.nftService.
  }

  private async fetchNFTs(): Promise<any> {
    try{
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
    catch{
      
    }
  }

  addToFavourite(nft : nftInterface){
    this.modalHeading = "Favourites";
    this.modalBody = `Item ${nft.name} has been added to your favourites`;
    document.getElementById('modalClicker')?.click()
  }

  addToFilter(type: string,sortTerm : string){
    // console.log(item);
    const newFilter = {
      type: type,
      sortTerm: sortTerm,
    }
    const ifExists = this.filters.filter(
      (filter) =>{
        if (filter.type == type)
          return true;
        else
          return false;
      }
    )
    if (ifExists.length == 0)
    {
      this.filters.push(newFilter)
    }
    else{
      this.filters = this.filters.filter(
        (filter) => {
          if (filter.type != type)
            return true;
          else
            return false;
        }
      )
      this.filters.push(newFilter)
    }
    this.filterData()
    console.log(this.filters);
    
  }

  filterData(){
    this.nfts = this.nftsPerm;
    this.filters.forEach(
      (filter) => {
        this.nfts = [...this.nfts.filter(
          (nft : nftInterface) => {
            if (filter.type == 'background')
            {
              if (nft.attributes.background == filter.sortTerm)
                return true;
              else
                return false;
            }
            else if (filter.type == 'mouth')
            {
              if (nft.attributes.mouth == filter.sortTerm)
                return true;
              else
                return false;
            }
            else if (filter.type == 'eyes')
            {
              if (nft.attributes.eyes == filter.sortTerm)
                return true;
              else
                return false;
            }
            else if (filter.type == 'skin')
            {
              if (nft.attributes.skinColour == filter.sortTerm)
                return true;
              else
                return false;
            }
            else if (filter.type == 'nose')
            {
              if (nft.attributes.nose == filter.sortTerm)
                return true;
              else
                return false;
            }
            else
              return false;
          }
        )]
      })
  }

  resetFilters(){
    this.nfts = this.nftsPerm;
    this.filters = [];
    const radios = document.getElementsByClassName('form-check-input') as HTMLCollectionOf<HTMLInputElement>
    for (let k = 0; k < radios.length; k++) {
      console.log(radios[k].checked);
      radios[k].checked = false;
    }
    
  }
}
