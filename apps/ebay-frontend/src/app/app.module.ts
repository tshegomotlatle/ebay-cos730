import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SellNFTComponent } from './sell-nft/sell-nft.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, SellNFTComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
