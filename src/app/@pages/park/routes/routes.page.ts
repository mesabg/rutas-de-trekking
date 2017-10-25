/**
 * Global dependencies
 */
import { 
	Component, 
	OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Local imports
 */
import { ParksService } from '../../../@api';
import { Park } from '../../../#interfaces';


@Component({
	selector: 'app-park-routes-page',
	templateUrl: './routes.page.html'
})
export class ParkRoutesPage implements OnInit {
	private lat:number;
	private lng:number;

	public title:string;
	public time:string;
	public distance:number;
	public velocity:number;

	constructor(
		public navParams: NavParams,
		private geolocation: Geolocation,
		private api:ParksService) { }

	/**
	 * Events
	 */
	ngOnInit() {
		this.geolocate();
		this.retrieve();
	}
	ionViewDidLoad(){ }
	ionViewWillLeave(){ }


	/**
	 * Actions
	 */
	private geolocate():void{
		//-- Get first position
		this.geolocation.getCurrentPosition().then((resp) => {
			this.lat = resp.coords.latitude;
			this.lng = resp.coords.longitude;
		}).catch((error) => {
			console.log('Error getting location', error);
		});

		//-- Watch location changes
		let watch = this.geolocation.watchPosition();
		watch.subscribe((resp) => {
			this.lat = resp.coords.latitude;
			this.lng = resp.coords.longitude;

			this.time = "1 h 45 min";
			this.distance = 4;
			this.velocity = 350;
		});
	}

	private retrieve():void{
		this.api.getActualPark(this.navParams.data['country'], this.navParams.data['park-slug'])
		.subscribe((park:Park) => {
			this.title = park.name;
		});
	}
}