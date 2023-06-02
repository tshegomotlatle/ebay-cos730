import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  FirestoreModule,
  getFirestore,
  provideFirestore,
} from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { SellNFTComponent } from './sell-nft/sell-nft.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { BuyNFTComponent } from './buy-nft/buy-nft.component';
import { BrowseNFTComponent } from './browse-nft/browse-nft.component';

@NgModule({
  declarations: [
    AppComponent,
    SellNFTComponent,
    BuyNFTComponent,
    BrowseNFTComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirestoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
