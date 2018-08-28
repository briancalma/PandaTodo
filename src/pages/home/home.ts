import { Component } from '@angular/core';
import { NavController, Platform , AlertController, reorderArray} from 'ionic-angular';
import { TodoProvider } from '../../providers/todo/todo';
import { AudioProvider } from '../../providers/audio/audio';
import { StorageProvider } from '../../providers/storage/storage';


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
    
  }

  showTodoPlaylistPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'TODO Playlist',
      message: "Add a new todo playlist",
      inputs: [
        {
          name: 'todoTxt',
          placeholder: '* Enter Playlist Name'
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
  
  showTodoItemPrompt(playListIndex) {
    const prompt = this.alertCtrl.create({
      title: 'TODO ITEM',
      message: "Add a new todo item",
      inputs: [
        {
          name: 'todoTxt',
          placeholder: '* Enter item'
        },
      ],
      buttons: [{
          text: 'Cancel',
        },
        {
          text: 'Save',
          handler: data => { 
           this.todoCtrl.addTodoItem({ title: data.todoTxt, status: 'PENDING' },playListIndex );
          }
        }
      ]
    });

    prompt.present();
  }

  addTodo(data) {
   // console.log(data.todoTxt);

   let todo = {
     title : data.todoTxt,
     todoList: [],
     archiveList: []
   };

    this.todoCtrl.addTodoPlayList(todo);
  }

  archiveItem(playListIndex ,index) {
    this.todoCtrl.archivedTodoItem(playListIndex, index);
    this.audioCtrl.playAudioFile();
  }

  showEditPrompt( playListIndex, item, i ) {
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
          handler: data => { this.updateItem( playListIndex, data, i); }
        }
      ]
    });

    prompt.present();
  }
  
  updateItem( playListIndex , data, i ) {
    // console.log(data.todoTxt);
    this.todoCtrl.updateTodoItem( playListIndex, data.todoTxt, i);
  }

  itemReOrder(data,todoPlayListIndex) {
    // console.log(todoPlayListIndex);
    reorderArray(this.todoCtrl.todos[todoPlayListIndex].todoList, data);
  }

  saveTodoPlayList() {
    this.todoCtrl.saveTodoList();
  }

}
