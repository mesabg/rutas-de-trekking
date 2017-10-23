/**
 * Global dependencies
 */
import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Local dependencies
 */
import { Park } from '../../../#interfaces';


@Component({
	selector: 'app-park-routes-page',
	templateUrl: './routes.page.html'
})
export class ParkRoutesPage implements OnInit {
	private park:Park;
	private lat:number;
	private lng:number;
	constructor(
		public navParams: NavParams,
		private geolocation: Geolocation) { }

	/**
	 * Events
	 */
	ngOnInit() {
		
	}
	ionViewDidLoad(){ }
	ionViewWillLeave(){ }


	/**
	 * Actions
	 */
	private geolocate():void{
		//-- Get first position
		this.geolocation.getCurrentPosition().then((resp) => {
			console.log('Location fetched', location);
			this.lat = resp.coords.latitude;
			this.lng = resp.coords.longitude;
		}).catch((error) => {
			console.log('Error getting location', error);
		});

		//-- Watch location changes
		let watch = this.geolocation.watchPosition();
		watch.subscribe((data) => {
			console.log('Location changed', data);
		});
	}
}