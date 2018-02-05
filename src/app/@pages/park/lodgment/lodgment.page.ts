/**
 * Global dependencies
 */
import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';

/**
 * Local dependencies
 */


@Component({
	selector: 'app-park-lodgment-page',
	templateUrl: './lodgment.page.html'
})
export class ParkLodgmentPage implements OnInit {
	constructor(public navParams: NavParams) { }

	/**
	 * Events
	 */
	ngOnInit() { }
	ionViewDidLoad(){ }
	ionViewWillLeave(){ }
}