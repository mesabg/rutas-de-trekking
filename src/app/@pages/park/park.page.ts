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
	segment: 'park/:park-id'
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
	public park:Park;

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

	/**
	 * Actions
	 */
	private async retrieve(){
		let response = await this.api.getPark(this.navParams.get('park-id'));
		if (response.state != "success") return;
		this.park = <Park> response.data[0];
		console.log("Park is :: ", this.park);
	}

	public dispose():void{
		console.log("This is a message");
	}
}