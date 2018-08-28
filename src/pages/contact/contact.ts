import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage';
import { ITodos } from '../../interfaces/todos';
import { ITodo } from '../../interfaces/todo';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

//   private dummyData: ITodos = {
//     title : "",
//     todoList : [],
//     archivedList: []
//   };

//   private dummyTD = {
//         title: 'TODO DUMMY',
//         status: 'pending'
//   };


//   private dummyAL = {
//     title: 'AL DUMMY',
//     status: 'finished'
// };

  constructor(public navCtrl: NavController, private storageCtrl: StorageProvider) {
    // this.dummyData.title = "Its Dummmy!";
    // this.dummyData.todoList = [ this.dummyTD ];
    // this.dummyData.archivedList = [ this.dummyAL ];
    // this.storageCtrl.saveData( "Dummy-Key",this.dummyData );

    // this.storageCtrl.loadData("Dummy-Key");
  }

}
