import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class PreferencesService {
    private _preferences:any;

  static get PREF_INITIALIZED() { return 'preferencesInitialized';}
  static get PREF_DISTANCE() { return 'pref_distance';}
  static get PREF_TEMPERATURE() { return 'pref_temperature';}
  static get PREF_LANGUAGE() { return 'pref_language';}
  static get PREF_NOTIFICATION() { return 'pref_notification';}
  static get PREF_SOUND() { return 'pref_sound';}


  constructor(private _storage:Storage) {
    this._preferences = {};
  }

  initializePreferences(){
    console.log('initializePreferences');
    this._storage.get(PreferencesService.PREF_INITIALIZED).then((result) => {
      if(result == null || result == false){
        console.log('initializePreferences with default values');
        this._storage.set(PreferencesService.PREF_INITIALIZED, true);
        this._storage.set(PreferencesService.PREF_DISTANCE, 'km');
        this._storage.set(PreferencesService.PREF_TEMPERATURE, 'c');
        this._storage.set(PreferencesService.PREF_LANGUAGE, 'es');
        this._storage.set(PreferencesService.PREF_NOTIFICATION, true);
        this._storage.set(PreferencesService.PREF_SOUND, true);

        //initialize in memory preferences
        this._preferences[PreferencesService.PREF_DISTANCE] = 'km';
        this._preferences[PreferencesService.PREF_TEMPERATURE] = 'c';
        this._preferences[PreferencesService.PREF_LANGUAGE] = 'es';
        this._preferences[PreferencesService.PREF_NOTIFICATION] = true;
        this._preferences[PreferencesService.PREF_SOUND] = true;
      }else{
        console.log('preferences obtained from storage');
        let prefs =
          [
            PreferencesService.PREF_DISTANCE,
            PreferencesService.PREF_TEMPERATURE,
            PreferencesService.PREF_LANGUAGE,
            PreferencesService.PREF_NOTIFICATION,
            PreferencesService.PREF_SOUND
          ];

        let thisRef = this;
        this._getAllPreferences(prefs).then(function(results){
            //initialize in memory preferences
            for(let i = 0; i < prefs.length; i++){
              thisRef._preferences[prefs[i]] = results[i];
            }
          }, function (err) {
            // If any of the preferences fail to read, err is the first error
            console.log(err);
          });
      }
    });
  }

  getPreference(key){
    return this._preferences[key];
  }

  setPreference(key, value){
    this._preferences[key] = value;//update pref in memory
    this._storage.set(key, value);//update pref in db
  }

  _getAllPreferences(prefs){
    return Promise.all(prefs.map((key) => {
      return this._storage.get(key);
    }));
  }

  _getPreference(key){
    return this._storage.get(key);
  }
}