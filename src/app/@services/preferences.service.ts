import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class PreferencesService {

  static get parameters() {
    return [[Storage]];
  }

  static get PREF_INITIALIZED() { return 'preferencesInitialized';}
  static get PREF_DISTANCE() { return 'pref_distance';}
  static get PREF_TEMPERATURE() { return 'pref_temperature';}
  static get PREF_LANGUAGE() { return 'pref_language';}
  static get PREF_NOTIFICATION() { return 'pref_notification';}
  static get PREF_SOUND() { return 'pref_sound';}


  constructor(private storage:Storage) {}

  async initializePreferences(){
    console.log('Initializing preferences');

    return new Promise((resolve, reject) => {
      this.storage.get(PreferencesService.PREF_INITIALIZED).then(async (result) => {
        if (result == null || result == false){
          console.log('Initializing preferences with default values');
          await this.storage.set(PreferencesService.PREF_INITIALIZED, true);
          await this.storage.set(PreferencesService.PREF_DISTANCE, "km");
          await this.storage.set(PreferencesService.PREF_TEMPERATURE, "c");
          await this.storage.set(PreferencesService.PREF_LANGUAGE, "es");
          await this.storage.set(PreferencesService.PREF_NOTIFICATION, true);
          await this.storage.set(PreferencesService.PREF_SOUND, true);

          /*await this.storage.forEach((value, key, index) => {
            console.log("key-value :: ", key, value);
          });*/
        } else console.log("Getting values from storage");
        resolve();
      });
    });
  }

  async setPreference(key, value){
    console.log("Setting preference");
    await this.storage.set(key, value);
  }

  async _getAllPreferences(prefs){
    return Promise.all(prefs.map((key) => {
      return this.storage.get(key);
    }));
  }

  async _getPreference(key){
    return this.storage.get(key);
  }
}