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
	public PREF_DISTANCE:string;
	public PREF_TEMPERATURE:string;
	public PREF_LANGUAGE:string;
	public PREF_NOTIFICATION:string;
	public PREF_SOUND:string;

	private afterViewWillInit:boolean = false;

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

	
	
	async ionViewWillEnter(){
		this.afterViewWillInit = false;
		await this.preferencesService.initializePreferences();
		await this.getInitialData();
		this.afterViewWillInit = true;
	}
	
	async changePreference(event, key){
		if (!this.afterViewWillInit) return null;
		await this.preferencesService.setPreference(key, event.checked);
	}

	async changePreferenceGroup(event, key){
		if (!this.afterViewWillInit) return null;
		await this.preferencesService.setPreference(key, event);
	}

	//-- Events
	ngOnInit() {}
	ionViewDidLoad(){ }
	ionViewWillLeave(){ }


	private async getInitialData(){
		this.preferences[PreferencesService.PREF_DISTANCE]
		  = await this.preferencesService._getPreference(PreferencesService.PREF_DISTANCE);
		this.preferences[PreferencesService.PREF_TEMPERATURE]
		  = await this.preferencesService._getPreference(PreferencesService.PREF_TEMPERATURE);
		this.preferences[PreferencesService.PREF_LANGUAGE]
		  = await this.preferencesService._getPreference(PreferencesService.PREF_LANGUAGE);
		this.preferences[PreferencesService.PREF_NOTIFICATION]
		  = await this.preferencesService._getPreference(PreferencesService.PREF_NOTIFICATION);
		this.preferences[PreferencesService.PREF_SOUND]
			= await this.preferencesService._getPreference(PreferencesService.PREF_SOUND);
	}
}