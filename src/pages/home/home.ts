import { Component } from '@angular/core';
import { NavController, Platform , AlertController, reorderArray} from 'ionic-angular';
// import { NativeRingtones } from '@ionic-native/native-ringtones';
// import { Media, MediaObject } from '@ionic-native/media';
import { NativeAudio } from '@ionic-native/native-audio';
import { TodoProvider } from '../../providers/todo/todo';


const ringtone = 'assets/ringtones/tuturu.mp3';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor( public navCtrl: NavController, 
               public platform: Platform, 
               private audio: NativeAudio,
               public todoCtrl: TodoProvider,
               private alertCtrl: AlertController
             ) {
    
  }


  ionViewDidLoad() {

  }
  
  // playRingtone() {
  //   this.platform.ready().then(() => {
  //     this.audio.preloadSimple('uniqeid1', ringtone).then( () => console.log('Loading . . .'));
  //     this.audio.play('uniqeid1',() => {
  //       console.log("Finish Playing!");
  //     });
  //   }); 
  // }

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
