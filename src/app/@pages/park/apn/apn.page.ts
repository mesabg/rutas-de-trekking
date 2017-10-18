/**
 * Global dependencies
 */
import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';

/**
 * Local dependencies
 */
import { Park } from '../../../#interfaces';


@Component({
	selector: 'app-park-apn-page',
	templateUrl: './apn.page.html'
})
export class ParkApnPage implements OnInit {
	private park:Park;
	constructor(public navParams: NavParams) { }

	/**
	 * Events
	 */
	ngOnInit() { }
	ionViewDidLoad(){ }
	ionViewWillLeave(){ }
}