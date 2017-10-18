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

@IonicPage({
	name: 'app-park-page',
	segment: 'park/:park-slug'
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

	constructor(
		public navCtrl:NavController, 
		public navParams:NavParams) {
		console.log("Page slug :: ", this.navParams.get('park-slug'));
		console.log("Park object :: ", this.navParams.get('park'));
	}

	
	/**
	 * Events
	 */
	ngOnInit() { }
	ngAfterViewInit() { }
	ionViewDidLoad(){ }
	ionViewWillLeave(){ }
}