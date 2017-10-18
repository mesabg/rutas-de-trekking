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
	selector: 'app-park-routes-page',
	templateUrl: './routes.page.html'
})
export class ParkRoutesPage implements OnInit {
	private park:Park;
	constructor(public navParams: NavParams) { }

	/**
	 * Events
	 */
	ngOnInit() { }
	ionViewDidLoad(){ }
	ionViewWillLeave(){ }
}