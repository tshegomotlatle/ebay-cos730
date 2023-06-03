import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellNFTComponent } from './sell-nft/sell-nft.component';
import { BrowseNFTComponent } from './browse-nft/browse-nft.component';
import { BuyNFTComponent } from './buy-nft/buy-nft.component';
import { MyNFTComponent } from './my-nft/my-nft.component';
import { HomeComponent } from './home/home.component';
import { MintNFTComponent } from './mint-nft/mint-nft.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'mintNFT',
    component: MintNFTComponent
  },
  {
    path: 'browseNFT',
    component: BrowseNFTComponent
  },
  {
    path: 'myNFT',
    component: MyNFTComponent
  },
  {
    path: 'sellNFT',
    component: SellNFTComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'buyNFT',
    component: BuyNFTComponent
  },
  {
    path: '**',
    component: HomeComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
