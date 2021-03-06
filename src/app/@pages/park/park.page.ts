/**
 * Global dependencies
 */
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';

/**
 * Pages Dependencies
 */
import { ParkApnPage } from './apn';
import { ParkInfoPage } from './info';
import { ParkLodgmentPage } from './lodgment';
import { ParkRoutesPage } from './routes';
import { ParkSearchPage } from './search';
import { RouteDetailPage } from './route-detail';

/**
 * Local dependencies
 */
import { Park } from '../../#interfaces';
import { ParksApi } from '../../@api';

@IonicPage({
	name: 'app-park-page',
	segment: 'park/:country-id/:country-slug/:park-id/:park-slug'
})
@Component({
	selector: 'app-park-page',
	templateUrl: './park.page.html'
})
export class ParkPage implements OnInit, AfterViewInit {
    //-- Pages Indexing
	public ApnPageRoot:any = ParkApnPage;
	public InfoPageRoot:any = ParkInfoPage;
	public LodgmentPageRoot:any = ParkLodgmentPage;
	public RoutesPageRoot:any = ParkRoutesPage;
	public SearchPageRoot:any = ParkSearchPage;
	public RouteDetailRoot:any = RouteDetailPage;

	//-- Page params
	public park:any;

	constructor(
		public navCtrl:NavController, 
		public navParams:NavParams,
		private api:ParksApi) {
	}

	
	/**
	 * Events
	 */
	ngOnInit() { this.retrieve(); }
	ngAfterViewInit() { }
	ionViewDidLoad(){ }
	ionViewWillLeave(){ }
	async ionViewDidEnter(){}

	/**
	 * Actions
	 */
	private async retrieve(){
		this.park = await this.api.getParkByIdFromLocal( parseInt(this.navParams.get('park-id')) );
	}

	public dispose():void{
		
	}
}