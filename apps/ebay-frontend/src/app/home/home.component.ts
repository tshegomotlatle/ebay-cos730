import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NftServiceService } from '../../services/nft-service.service';

@Component({
  selector: 'ebay-cos730-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  readonly METAMASK_KEY: string = 'metamask';

  public isIdentified: boolean = false;
  public mintNFT: boolean = false;
  public browseNFT: boolean = false;
  public myNFT: boolean = false;
  public login: boolean = true;
  public sellNFT: boolean = false;
  public isConnected: boolean = false;
  public ownerAddress: string = '';
  public ethereum: any;

  constructor(
    private nftService: NftServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.checkIfMetamaskInstalled()) {
      this.isIdentified = true;

      // if (this.checkIfMetamaskConnected()) {
      //   this.connected();
      // }
      if (this.ethereum) {
        this.connectMetamask();
      }
    }

    const tempLogin = localStorage.getItem("loggedIn");
    console.log(tempLogin);

    if (tempLogin == "true")
      this.login = true;
    else {
      this.login = false;
      this.router.navigate(["/login"])
    }
  }
  private checkIfMetamaskInstalled(): boolean {
    if (typeof (window as any).ethereum !== 'undefined') {
      this.ethereum = (window as any).ethereum;
      return true;
    }
    return false;
  }

  private checkIfMetamaskConnected(): boolean {
    if (localStorage.getItem(this.METAMASK_KEY)) {
      return true;
    }
    return false;
  }

  private storeMetamask() {
    this.nftService.setAddress(this.ownerAddress);
    console.log("ownerAddress");
    console.log(this.ownerAddress);
    this.nftService.setKey(this.METAMASK_KEY);
    console.log("METAMASK_KEY");
    console.log(this.METAMASK_KEY);
    this.nftService.setEthereum(this.ethereum)
    console.log("ethereum");
    console.log(this.ethereum);
    // localStorage.setItem("key",this.METAMASK_KEY);
    // localStorage.setItem("ethereum",this.ethereum);
  }

  private connected() {
    this.isConnected = true;
  }

  public async connectMetamask() {
    const accounts = await (window as any).ethereum.request({
      method: 'eth_requestAccounts',
    });
    const account = accounts[0];
    this.ownerAddress = account;
    // console.log(localStorage.getItem("ethereum"));

    this.storeMetamask();
    this.connected();
  }

  public mintNFTs() {
    // this.browseNFT = false;
    // this.myNFT = false;
    // this.sellNFT = false;
    // this.mintNFT = true;
    this.router.navigate(["/mintNFT"])
  }

  public browseNFTs() {
    // this.browseNFT = true;
    // this.mintNFT = false;
    // this.sellNFT = false;
    // this.myNFT = false;
    this.router.navigate(["/browseNFT"])

  }

  public myNFTs() {
    // this.sellNFT = false;
    // this.browseNFT = false;
    // this.mintNFT = false;
    // this.myNFT = true;
    this.router.navigate(["/myNFT"])
  }

  public logout() {
    // this.sellNFT = false;
    // this.browseNFT = false;
    // this.mintNFT = false;
    // this.myNFT = true;
    localStorage.removeItem("loggedIn")
    localStorage.removeItem("email")
    this.login = false;
    this.router.navigate(["/login"])
  }
}
