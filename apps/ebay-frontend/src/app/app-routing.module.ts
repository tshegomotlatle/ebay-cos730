import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellNFTComponent } from './sell-nft/sell-nft.component';

const routes: Routes = [
  {
    path: 'sellNFT',
    component: SellNFTComponent
  },
  {
    path: '**',
    redirectTo: "/"
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
