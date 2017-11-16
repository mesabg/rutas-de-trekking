/**
 * Global dependencies
 */
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Pages Dependencies
 */
import { ParkApnPage } from './apn';
import { ParkInfoPage } from './info';
import { ParkLodgmentPage } from './lodgment';
import { ParkRoutesPage } from './routes';
import { ParkSearchPage } from './search';

/**
 * Local dependencies
 */
import { Park } from '../../#interfaces';
import { ParksService } from '../../@api';

@IonicPage({
	name: 'app-park-page',
	segment: 'park/:country/:park-slug'
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

	//-- Page params
	public park:Park;

	constructor(
		public navCtrl:NavController, 
		public navParams:NavParams,
		private api:ParksService) {
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
	private retrieve():void{
		this.api.getActualPark(this.navParams.get('country'), this.navParams.get('park-slug'))
		.subscribe((park:Park) => {
			this.park = park;
			console.log(park);
		});
	}

	public dispose():void{
		console.log("This is a message");
	}
}