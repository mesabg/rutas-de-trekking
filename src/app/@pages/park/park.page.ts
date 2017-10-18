/**
 * Global dependencies
 */
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Pages Dependencies
 */
import { ParkApnPage } from './apn';
import { ParkInfoPage } from './info';
import { ParkLodgmentPage } from './lodgment';
import { ParkRoutesPage } from './routes';
import { ParkSearchPage } from './search';

//-- Services
import { ParkService } from './park.service';


@IonicPage({
	name: 'app-park-page',
	segment: 'park/:park-slug'
})
@Component({
	selector: 'app-park-page',
	templateUrl: './park.page.html'
})
export class ParkPage implements OnInit {
    //-- Pages Indexing
	public ApnPageRoot:any = ParkApnPage;
	public InfoPageRoot:any = ParkInfoPage;
	public LodgmentPageRoot:any = ParkLodgmentPage;
	public RoutesPageRoot:any = ParkRoutesPage;
	public SearchPageRoot:any = ParkSearchPage;

	constructor(
		public navCtrl:NavController, 
		public navParams:NavParams,
		public parkService:ParkService) {
		console.log("Page slug :: ", this.navParams.get('park-slug'));
		console.log("Park object :: ", this.navParams.get('park'));
		this.parkService.set(this.navParams.get('park'));

		let self:ParkPage = this;
		setTimeout(function(){
			console.log("Park (áge) :: ", self.parkService.get());
		}, 50);
	}
	ngOnInit() { }
	ionViewDidLoad(){ }
	ionViewWillLeave(){ }
}