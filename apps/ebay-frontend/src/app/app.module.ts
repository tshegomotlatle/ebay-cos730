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
import { MyNFTComponent } from './my-nft/my-nft.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { MintNFTComponent } from './mint-nft/mint-nft.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SellNFTComponent,
    BuyNFTComponent,
    BrowseNFTComponent,
    MyNFTComponent,
    HomeComponent,
    MintNFTComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirestoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
