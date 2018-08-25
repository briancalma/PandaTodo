import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {

  constructor(private storage: Storage) {
    
  }

  loadData( key ) {
    this.storage.get(key)
        .then( (data) => console.log('Data Retrieve : ', data));
  }

  saveData( key, data ) {

    this.storage.get(key)
        .then( (res) => {
          
          if( res === null ) {
            this.storage.set(key, data)
                .then(() => console.log('SUCCESS IN SAVING ', data))
                .catch((e)  =>  console.log("Error in saving : ",e));       
          }

        })    
    // let isNull = this.storage.getItem( key ) === null ? true : false;   

  }
}
