import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TodoProvider } from '../../providers/todo/todo';

@Component({
  selector: 'page-archived-items',
  templateUrl: 'archived-items.html',
})
export class ArchivedItemsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public todoCtrl: TodoProvider) {
    
  }

  ionViewDidLoad() { 
  }
}
