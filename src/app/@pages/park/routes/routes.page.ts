/**
 * Global dependencies
 */
import { 
	Component, 
	OnInit } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Local imports
 */
import { ParksApi, RoutesApi } from '../../../@api';
import { StorageService } from '../../../@services';
import { Park, Route } from '../../../#interfaces';
import { Observable } from 'rxjs';

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
	public routes:Observable<Route[]>;

	constructor(
		public navParams: NavParams,
		public navCtrl: NavController,
		private geolocation: Geolocation,
		private parksApi:ParksApi,
		private routesApi:RoutesApi,
		private storage:StorageService) { }

	/**
	 * Events
	 */
	async ngOnInit() {
		await this.retrieve();
		this.geolocate();
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

	private async retrieve(){
		//his.title = (await this.parksApi.getPark(this.navParams.data['country'], this.navParams.data['park-slug']).toPromise()).nombre;
		this.routes = this.routesApi.getRoutes(this.navParams.data['country'], this.navParams.data['park-slug']);
	}

	private async navigate(routeSlug:string){
		await this.storage.create('actual-route-slug', routeSlug);
		await this.navCtrl.parent.select(5);
	}
}