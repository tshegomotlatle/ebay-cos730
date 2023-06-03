import { Injectable } from '@angular/core';
import { collection, addDoc, getFirestore, doc, getDoc, getDocs, query, where, deleteDoc, setDoc } from "firebase/firestore"; 
import { initializeApp } from 'firebase/app';
import { nftInterface } from '../app/interfaces/nft-interface';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NftServiceService {

  app = initializeApp(environment.firebaseConfig);

  db = getFirestore(this.app);

  etheruem : any;
  key! : string;
  address! : string;
  
  constructor(
    ) {

   }

  async buyNFT(nft : nftInterface){
    try {
      // const docRef = await addDoc(collection(this.db, "NFTsBought"), nft);
      const docRef = await setDoc(doc(this.db, "NFTsBought", nft.image), {
        name: nft.name,
        email: nft.email,
        description: nft.description,
        image: nft.image,
        attributes:{
          skinColour : nft.attributes.skinColour,
          background : nft.attributes.background,
          eyes : nft.attributes.eyes,
          mouth : nft.attributes.mouth,
          nose : nft.attributes.nose,
          rarity: nft.attributes.rarity,
        } 
      });
      return ({"Document written with ID ": nft.image});
    } catch (e) {
      return ({"Error adding document": e});
    }
   }
  async sellNFT(nft : nftInterface){
    try {
      // const docRef = await addDoc(collection(this.db, "NFTsSold"), nft);
      const docRef = await setDoc(doc(this.db, "NFTsSold", nft.image), {
        name: nft.name,
        email: nft.email,
        description: nft.description,
        image: nft.image,
        attributes: {
          skinColour: nft.attributes.skinColour,
          background: nft.attributes.background,
          eyes: nft.attributes.eyes,
          mouth: nft.attributes.mouth,
          nose: nft.attributes.nose,
          rarity: nft.attributes.rarity,
        }
      });
      return ({"Document written with ID ": nft.image});
    } catch (e) {
      return ({"Error adding document": e});
    }
   }


   async getNFT(){
     const q = query(collection(this.db, "NFTsBought"));
      const nftArray : nftInterface []= []
     const querySnapshot = await getDocs(q);
     querySnapshot.forEach((doc) => {
       // doc.data() is never undefined for query doc snapshots
       nftArray.push(doc.data() as nftInterface)
      //  console.log(doc.id, " => ", doc.data());
     });
    return nftArray
   }

   async getNFTSold(){
     const q = query(collection(this.db, "NFTsSold"));
      const nftArray : nftInterface []= []
     const querySnapshot = await getDocs(q);
     querySnapshot.forEach((doc) => {
       // doc.data() is never undefined for query doc snapshots
       nftArray.push(doc.data() as nftInterface)
      //  console.log(doc.id, " => ", doc.data());
     });
    return nftArray
   }


   // Follow this pattern to import other Firebase services
   // import { } from 'firebase/<service>';
   
   // TODO: Replace the following with your app's Firebase project configuration
    // Get a list of cities from your database
    async test(){
      
    }

    setEthereum(eth : any)
    {
      this.etheruem = eth
    }

    setKey(key: string)
    {
      this.key = key
    }

    setAddress(address: string)
    {
      this.address = address
    }

  async buyNFTFromMarket(nft: nftInterface){
    try {
      // const docRef = await deleteDoc(doc(this.db, "NFTsSold", nft.));
      const temp = await addDoc(collection(this.db, "NFTsBought"), nft).then(
        (response) =>{

          console.log(response);
        }
      );
      
      // return ({ "Delete call Success": docRef });
      return;
    } catch (e) {
      return ({ "Error adding document": e });
    }
  }

  async deleteFromBought(nft: nftInterface){
          const docRef = await deleteDoc(doc(this.db, "NFTsBought", nft.image)).then(
            (response) =>{
              console.log(response);
              
            }
          );
            return docRef;
  }

  async deleteFromSold(nft: nftInterface){
          const docRef = await deleteDoc(doc(this.db, "NFTsSold", nft.image)).then(
            (response) =>{
              console.log(response);
              
            }
          );
            return docRef;
  }
  }