import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { TodoProvider } from '../providers/todo/todo';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  rootPage:any = TabsPage;

  public pages = [
                    { title: "Home", component: TabsPage },
                    { title: "About", component: AboutPage }
                 ];

  public helperButtons = [
      { title: "Save" }
  ];              

  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public todoCtrl: TodoProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {
    this.rootPage = page;
  }


  saveItems() {
    console.log('I am called saveitems');
    this.todoCtrl.saveTodoList();
  }

  exit() {
    // console.log('I am called');
    // this.todoCtrl.saveTodoList();
    // this.platform.exitApp();
  }


}
