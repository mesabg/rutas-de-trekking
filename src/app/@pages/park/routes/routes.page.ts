/**
 * Global dependencies
 */
import { 
	Component, 
	OnInit } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

/**
 * Local imports
 */
import { RoutesApi } from '../../../@api';
import { StorageService } from '../../../@services';
import { Park, Route } from '../../../#interfaces';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-park-routes-page',
	templateUrl: './routes.page.html'
})
export class ParkRoutesPage implements OnInit {
	public routes:Promise<Route[]>;

	constructor(
		public navParams: NavParams,
		public navCtrl: NavController,
		private routesApi:RoutesApi,
		private storage:StorageService) { }

	/**
	 * Events
	 */
	ngOnInit() { this.retrieve(); }
	ionViewDidLoad(){ }
	ionViewWillLeave(){ }

	private async retrieve(){
		this.routes = this.routesApi.getRoutes(this.navParams.data['park-slug']);
		let response = await this.routesApi.getRoutes(this.navParams.data['park-slug']);
		console.log("Park slug :: ", this.navParams.data['park-slug']);
		console.log("Bunch of routes :: ", response);
	}

	private async navigate(routeSlug:string){
		await this.storage.create('actual-route-slug', routeSlug);
		await this.navCtrl.parent.select(5);
	}
}