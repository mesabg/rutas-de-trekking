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


@IonicPage({
	name: 'app-park-page',
	segment: 'park'
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

	constructor(public navCtrl:NavController, public navParams:NavParams) { }
	ngOnInit() { }
	ionViewDidLoad(){ }
	ionViewWillLeave(){ }
}