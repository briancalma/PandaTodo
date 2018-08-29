import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

@Injectable()
export class StorageProvider {

  constructor(private storage: Storage) {
    
  }

  loadData( key ) {
    return this.storage.get(key);
  } 

  saveData( key, data ) {
      // this.storage.get(key)
      // .then( (res) => {
      //   this.storage.set(key, data)
      //       .then(() => console.log('SUCCESS IN SAVING ', data))
      //       .catch((e)  =>  console.log("Error in saving : ",e));       
      // });
      
      this.storage.set(key, data)
      .then(() => console.log('SUCCESS IN SAVING ', data))
      .catch((e)  =>  console.log("Error in saving : ",e));   
  }

  getAllSavedData(val='') {
    let keyList = [];

    let todoItems = [];
    
    return this.storage.keys();
    //   .then( (data) => {
    //     keyList = data;
    //     keyList.forEach( (key) => {
    //       if(key !== val) {
    //         this.storage.get(key).then( (res) => {
    //           todoItems.push(res);
    //         });
    //       } 
    //     });
    // });

  // return todoItems;
  }
}
