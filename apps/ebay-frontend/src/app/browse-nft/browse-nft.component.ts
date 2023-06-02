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
  public email!: string;
  public noses = ["up", "down", "teardrop", "pacman", "weird"]
  public skins = ["alien", "avatar", "brown", "dark", "white"]
  public backgrounds = ["blue", "green", "pink", "red", "yellow"]
  public eyes = ["centre", "dialated", "down", "glasses", "up"]
  public mouths = ["frown", "half-smile", "smile", "teeth", "teeth-gold"]
  public modalHeading = ""
  public modalBody = ""

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
    if (type == 'wishlist') {
      this.modalHeading = "Wishlist";
      this.modalBody = `Item ${nft.name} has been added to your wishlist`;
    }
    else {

    }
    document.getElementById('modalClicker')?.click()
  }

  buyNFT(nft :nftInterface) {
    this.router.navigate(["/buyNFT", {"name": nft.name}])
  }
}
