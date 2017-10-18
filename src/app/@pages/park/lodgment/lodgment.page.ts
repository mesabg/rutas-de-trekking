/**
 * Global dependencies
 */
import { Component, OnInit } from '@angular/core';

/**
 * Local dependencies
 */
import { Park } from '../../../#interfaces';


@Component({
	selector: 'app-park-lodgment-page',
	templateUrl: './lodgment.page.html'
})
export class ParkLodgmentPage implements OnInit {
	private park:Park;
	constructor() { }

	/**
	 * Events
	 */
	ngOnInit() { }
	ionViewDidLoad(){ }
	ionViewWillLeave(){ }

	/**
	 * Actions
	 */
	public load(park:Park):void{
		this.park = park;
	}
}