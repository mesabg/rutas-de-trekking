/**
 * Global dependencies
 */
import { Component, OnInit } from '@angular/core';

/**
 * Local dependencies
 */
import { Park } from '../../../#interfaces';


@Component({
	selector: 'app-park-search-page',
	templateUrl: './search.page.html'
})
export class ParkSearchPage implements OnInit {
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