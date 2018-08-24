import { Component } from '@angular/core';
import { NavController, Platform , AlertController, reorderArray} from 'ionic-angular';
import { TodoProvider } from '../../providers/todo/todo';
import { AudioProvider } from '../../providers/audio/audio';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor( public navCtrl: NavController, 
               public platform: Platform, 
               public todoCtrl: TodoProvider,
               private alertCtrl: AlertController,
               private audioCtrl: AudioProvider
             ) {
    
               }


  ionViewDidLoad() {
    // this.audioCtrl.loadAudioFile();
  }
  
  showTodoPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'TODO ITEM',
      message: "Add a new todo item",
      inputs: [
        {
          name: 'todoTxt',
          placeholder: '* Enter new todo item'
        },
      ],
      buttons: [{
          text: 'Cancel',
        },
        {
          text: 'Save',
          handler: data => { this.addTodo(data); }
        }
      ]
    });

    prompt.present();
  }

  addTodo(data) {
   // console.log(data.todoTxt);
    
    this.todoCtrl.addTodo(data.todoTxt);
  }

  archiveItem(index) {
    this.todoCtrl.archivedTodoItem(index);
    this.audioCtrl.playAudioFile();
  }

  showEditPrompt( item, i ) {
    const prompt = this.alertCtrl.create({
      title: 'EDIT TODO ITEM',
      message: "Edit your todo item",
      inputs: [
        {
          name: 'todoTxt',
          value: item.title ,
          placeholder: '* Enter new todo item'
        },
      ],
      buttons: [{
          text: 'Cancel',
        },
        {
          text: 'Update',
          handler: data => { this.updateItem(data,i); }
        }
      ]
    });

    prompt.present();
  }
  
  updateItem( data, i ) {
    // console.log(data.todoTxt);
    this.todoCtrl.updateTodoItem(data.todoTxt,i);
  }

  itemReOrder(data) {
    // console.log(data);
    reorderArray(this.todoCtrl.todoList, data);
  }

}
