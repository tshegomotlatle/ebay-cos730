import { Component, OnInit } from '@angular/core';
import { NftServiceService } from '../../services/nft-service.service';
import { nftInterface } from '../interfaces/nft-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'ebay-cos730-browse-nft',
  templateUrl: './browse-nft.component.html',
  styleUrls: ['./browse-nft.component.scss'],
})
export class BrowseNFTComponent implements OnInit {
  public nfts: any[] = [];
  public nftsPerm: any = [];
  public email!: string;
  public noses = ["up", "down", "teardrop", "pacman", "weird"]
  public skins = ["alien", "avatar", "brown", "dark", "white"]
  public backgrounds = ["blue", "green", "pink", "red", "yellow"]
  public eyes = ["centre", "dialated", "down", "glasses", "up"]
  public mouths = ["frown", "half-smile", "smile", "teeth", "teeth-gold"]
  public modalHeading = ""
  public modalBody = ""
  filters: { type: string, sortTerm: string }[] = []

  constructor(
    private nftService: NftServiceService,
    private router : Router
  ) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.nftService.getNFTSold().then(
      (response) => {
        console.log(response);

        this.nfts = response;
      }
    )
  }

  openModal(type: string, nft: nftInterface) {
    this.modalHeading = "Wishlist";
    this.modalBody = `Item ${nft.name} has been added to your wishlist`;
    document.getElementById('modalClicker')?.click()
  }

  buyNFT(nft :nftInterface) {
    this.router.navigate(["/buyNFT", {"name": nft.name}])
  }

  addToFilter(type: string, sortTerm: string) {
    // console.log(item);
    const newFilter = {
      type: type,
      sortTerm: sortTerm,
    }
    const ifExists = this.filters.filter(
      (filter) => {
        if (filter.type == type)
          return true;
        else
          return false;
      }
    )
    if (ifExists.length == 0) {
      this.filters.push(newFilter)
    }
    else {
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

  filterData() {
    this.nfts = this.nftsPerm;
    this.filters.forEach(
      (filter) => {
        this.nfts = [...this.nfts.filter(
          (nft: nftInterface) => {
            if (filter.type == 'background') {
              if (nft.attributes.background == filter.sortTerm)
                return true;
              else
                return false;
            }
            else if (filter.type == 'mouth') {
              if (nft.attributes.mouth == filter.sortTerm)
                return true;
              else
                return false;
            }
            else if (filter.type == 'eyes') {
              if (nft.attributes.eyes == filter.sortTerm)
                return true;
              else
                return false;
            }
            else if (filter.type == 'skin') {
              if (nft.attributes.skinColour == filter.sortTerm)
                return true;
              else
                return false;
            }
            else if (filter.type == 'nose') {
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

  resetFilters() {
    this.nfts = this.nftsPerm;
    this.filters = [];
    const radios = document.getElementsByClassName('form-check-input') as HTMLCollectionOf<HTMLInputElement>
    for (let k = 0; k < radios.length; k++) {
      console.log(radios[k].checked);
      radios[k].checked = false;
    }

  }
}
