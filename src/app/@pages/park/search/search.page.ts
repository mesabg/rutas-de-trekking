/**
 * Global dependencies
 */
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NavParams } from 'ionic-angular';

/**
 * Local dependencies
 */
import { Park } from '../../../#interfaces';
import { ParksApi } from '../../../@api';
import $ from 'jquery';


@Component({
	selector: 'app-park-search-page',
	templateUrl: './search.page.html'
})
export class ParkSearchPage implements OnInit {
	private park:Park;
	@ViewChild('main') private main:ElementRef;
	
	public parkName:string; 
	public currentHour:string;

	constructor(
		public navParams: NavParams, 
		private api:ParksApi,
		private elementRef:ElementRef ) { }

	/**
	 * Events
	 */
	ngOnInit() { }
	ionViewDidLoad(){ }
	ionViewWillLeave(){ }
	async ionViewDidEnter(){
		console.log("Entering Weather Page");
		this.retrieve();
		this.counterHour();
	}

	private async counterHour(){
		let self = this;
		let date = new Date();
		self.currentHour = `${date.getHours()}:${date.getMinutes()}`;
		setInterval(() => {
			self.currentHour = `${date.getHours()}:${date.getMinutes()}`;
		}, 60*1000);
	}

	//-- General functions
	private async retrieve(){
		try {
			let park = await this.api.getParkByIdFromLocal( parseInt(this.navParams.get('park-id')) );
			this.parkName = park.nombre;

			let clima = await this.api.getParkWeather( parseInt(this.navParams.get('park-id')) );
			console.log("Clima is :: ", clima);
			
		} catch (error) {
			console.log("An error ocurred");
			console.log("Details :: ", error);
		}
	}
}