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
	segment: 'parks/:country'
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
	public parks:Observable<Park[]>;
	public header:{img:string, title:string} = {
		img: '',
		title: ''
	};

	constructor(
		public navCtrl:NavController, 
		public navParams:NavParams,
		public parksApi:ParksApi,
		public countriesApi:CountriesApi) {
		this.retrieveData(this.navParams.get('country'));
	}

	/**
	 * Events
	 */
	ngOnInit() { }
	ionViewDidLoad(){ }
	ionViewWillLeave(){ }

	/**
	 * Actions
	 */
	private async retrieveData(countrySlug:string):Promise<any>{
		//this.parks = this.parksApi.getParks(countrySlug);
		let country:Country = await this.countriesApi.getCountry(countrySlug).toPromise();
		this.header = {
			img: country.img,
			title: country.titulo
		};
	}
}