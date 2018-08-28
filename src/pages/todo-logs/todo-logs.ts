import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TodoProvider } from '../../providers/todo/todo';

@Component({
  selector: 'page-todo-logs',
  templateUrl: 'todo-logs.html',
})
export class TodoLogsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public todoCtrl: TodoProvider) {

  }
 
  ionViewDidLoad() {
    
  }

}
