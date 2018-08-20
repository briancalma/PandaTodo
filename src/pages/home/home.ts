import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
// import { NativeRingtones } from '@ionic-native/native-ringtones';
// import { Media, MediaObject } from '@ionic-native/media';
import { NativeAudio } from '@ionic-native/native-audio';


const ringtone = 'assets/ringtones/tuturu.mp3';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public platform: Platform, private audio: NativeAudio) {

  }

  
  playRingtone() {
    this.platform.ready().then(() => {
      this.audio.preloadSimple('uniqeid1', ringtone).then( () => console.log('Loading . . .'));
      this.audio.play('uniqeid1',() => {
        console.log("Finish Playing!");
      });
    }); 
  }
 
}
