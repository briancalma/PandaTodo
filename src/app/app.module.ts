import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TodoLogsPage } from '../pages/todo-logs/todo-logs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NativeRingtones } from '@ionic-native/native-ringtones';
import { Media } from '@ionic-native/media';
import { NativeAudio } from '@ionic-native/native-audio';
import { IonicStorageModule } from '@ionic/storage';

import { TodoProvider } from '../providers/todo/todo';
import { AudioProvider } from '../providers/audio/audio';
import { StorageProvider } from '../providers/storage/storage';
import { ArchivedItemsPage } from '../pages/archived-items/archived-items';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ArchivedItemsPage,
    TodoLogsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ArchivedItemsPage,
    TodoLogsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NativeRingtones,
    Media,
    NativeAudio,
    TodoProvider,
    AudioProvider,
    StorageProvider
  ]
})
export class AppModule {}
