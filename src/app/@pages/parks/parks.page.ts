/**
 * Global dependencies
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';

/**
 * Local dependencies
 */
import { ParksApi, CountriesApi } from '../../@api';
import { Park, Country } from '../../#interfaces';


@IonicPage({
	name: 'app-parks-page',
	segment: 'parks/:country-id/:country-slug'
})
@Component({
	selector: 'app-parks-page',
	templateUrl: './parks.page.html',
	styles: [`
	app-parks-page{
		.toolbar-background{
			background-color: red !important;
		}
	}
	`],
	encapsulation: ViewEncapsulation.None
})
export class ParksPage implements OnInit {
	/**
	 * Variables
	 */
	public parks:Promise<any[]>;
	public header:{img:string, title:string} = {
		img: '',
		title: ''
	};

	constructor(
		public navCtrl:NavController, 
		public navParams:NavParams,
		public parksApi:ParksApi,
		public countriesApi:CountriesApi) {
		
	}

	/**
	 * Events
	 */
	ngOnInit() {  }
	ionViewDidLoad(){ }
	async ionViewWillEnter(){ await this.retrieveData( parseInt(this.navParams.get('country-id')) ); }
	ionViewWillLeave(){ }

	/**
	 * Actions
	 */
	private async retrieveData(countryId:number):Promise<any>{
		this.parks = this.parksApi.getParksFromLocal(countryId);
		console.log("Parks here are ", await this.parksApi.getParksFromLocal(countryId));
		let country = await this.countriesApi.getCountryFromLocal(countryId);
		this.header = {
			img: country.logo == undefined ? null : country.logo,
			title: country.country
		};
	}
}