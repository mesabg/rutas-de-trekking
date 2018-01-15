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
import { Storage } from '@ionic/storage';
import { Park, Route } from '../../../#interfaces';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-park-routes-page',
	templateUrl: './routes.page.html'
})
export class ParkRoutesPage implements OnInit {
	public routes:Promise<any[]>;

	constructor(
		public navParams: NavParams,
		public navCtrl: NavController,
		private routesApi:RoutesApi,
		private storage:Storage) { }

	/**
	 * Events
	 */
	ngOnInit() { this.retrieve(); }
	ionViewDidLoad(){ }
	ionViewWillLeave(){ }

	private async retrieve(){
		this.routes = this.routesApi.getRoutesByParkFromLocal( parseInt(this.navParams.data['park-id']) );
	}

	public async navigate(routeId:number){
		await this.storage.set('actual-route-id', routeId);
		await this.navCtrl.parent.select(5);
	}
}