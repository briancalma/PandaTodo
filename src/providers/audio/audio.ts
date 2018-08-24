import { Injectable } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio';
import { Platform } from 'ionic-angular';

@Injectable()
export class AudioProvider {

  public audioFilePath = "assets/ringtones/tuturu.mp3";

  public id = 'tuturu';

  constructor( private audio: NativeAudio, private platform: Platform ) {
    this.loadAudioFile();
  }

  loadAudioFile() {
    this.platform.ready()
    .then( () => {
      this.audio.preloadSimple(this.id, this.audioFilePath)
      .then(() => { console.log('AUDIO is been successfully loaded.'); })
      .catch( e => console.error('ERROR LOADING : ', e));
    });
  }

  playAudioFile() {
    this.platform.ready()
      .then( () => {
        this.audio.play(this.id,() => {
          console.log('Played the ringtone successfully!');
        });
      });
  }
}
