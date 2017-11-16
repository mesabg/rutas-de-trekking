/**
 * Global dependencies
 */
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PreferencesService } from '../../@services/preferences.service';


@IonicPage({
	name: 'app-configuration-page',
	segment: 'configuration'
})
@Component({
	selector: 'app-configuration-page',
	templateUrl: './configuration.page.html',
	providers: [PreferencesService]
})
export class ConfigurationPage implements OnInit {
	//-- Declare vars
	public preferences:any;
	public PREF_DISTANCE:any;
	public PREF_TEMPERATURE:any;
	public PREF_LANGUAGE:any;
	public PREF_NOTIFICATION:any;
	public PREF_SOUND:any;

	static get parameters() {
		return [[PreferencesService]];
	}

	constructor(public preferencesService:PreferencesService, public navCtrl:NavController, public navParams:NavParams) {
		this.preferences = {};
		this.PREF_DISTANCE = PreferencesService.PREF_DISTANCE;
		this.PREF_TEMPERATURE = PreferencesService.PREF_TEMPERATURE;
		this.PREF_LANGUAGE = PreferencesService.PREF_LANGUAGE;
		this.PREF_NOTIFICATION = PreferencesService.PREF_NOTIFICATION;
		this.PREF_SOUND = PreferencesService.PREF_SOUND;
	}

	
	
	ionViewWillEnter(){
		this.preferences[PreferencesService.PREF_DISTANCE]
		  = this.preferencesService.getPreference(PreferencesService.PREF_DISTANCE);
		this.preferences[PreferencesService.PREF_TEMPERATURE]
		  = this.preferencesService.getPreference(PreferencesService.PREF_TEMPERATURE);
		this.preferences[PreferencesService.PREF_LANGUAGE]
		  = this.preferencesService.getPreference(PreferencesService.PREF_LANGUAGE);
		this.preferences[PreferencesService.PREF_NOTIFICATION]
		  = this.preferencesService.getPreference(PreferencesService.PREF_NOTIFICATION);
		this.preferences[PreferencesService.PREF_SOUND]
		  = this.preferencesService.getPreference(PreferencesService.PREF_SOUND);
	}
	
	changePreference(event, key){
		this.preferencesService.setPreference(key, event.checked);
	}

	changePreferenceGroup(event, key){
		console.log(event);
	}

	//-- Events
	ngOnInit() {
		console.log(this.preferencesService);
	}
	ionViewDidLoad(){ }
	ionViewWillLeave(){ }
}