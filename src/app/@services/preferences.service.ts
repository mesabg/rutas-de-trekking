import { Injectable, EventEmitter } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class PreferencesService {
  static propertyChange:EventEmitter<{key:string; value:string;}> = new EventEmitter<{key:string; value:string;}>();

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
    return new Promise((resolve, reject) => {
      this.storage.get(PreferencesService.PREF_INITIALIZED).then(async (result) => {
        if (result == null || result == false){
          await this.storage.set(PreferencesService.PREF_INITIALIZED, true);
          await this.storage.set(PreferencesService.PREF_DISTANCE, "km");
          await this.storage.set(PreferencesService.PREF_TEMPERATURE, "c");
          await this.storage.set(PreferencesService.PREF_LANGUAGE, "es");
          await this.storage.set(PreferencesService.PREF_NOTIFICATION, true);
          await this.storage.set(PreferencesService.PREF_SOUND, true);
        }
        resolve();
      });
    });
  }

  async setPreference(key, value){
    await this.storage.set(key, value);
    PreferencesService.propertyChange.emit({
      key: key,
      value: await this.storage.get(key)
    });
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