/**
 * Global dependencies
 */
import { 
	Component, 
	OnInit, 
	AfterViewInit,
	ElementRef,
	ViewChild } from '@angular/core';

import { 
	IonicPage, 
	NavController, 
	NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';

/**
 * Plugins
 */
import * as $ from "jquery";

/**
 * Local dependencies
 */
import { SlickJS } from '../../../@ms/components';
import { SETTINGS, SETTINGS_ICONS } from './home.page.slick-config';
import { Country } from '../../#interfaces';
import { CountriesService } from '../../@api';


@IonicPage({
	name: 'app-home-page',
	segment: 'home'
})
@Component({
	selector: 'app-home-page',
	templateUrl: './home.page.html'
})
export class HomePage implements OnInit, AfterViewInit {
	/**
	 * Variables
	 */
	@ViewChild('paises') private paises:ElementRef;
	@ViewChild('options') private options:ElementRef;
	private $paises:SlickJS;
	private $options:SlickJS;
	public countries:Observable<Country[]>;

	constructor(
		public navCtrl:NavController, 
		public navParams:NavParams,
		public api:CountriesService) {}

	/**
	 * Events
	 */
	ngOnInit() {
		this.retrieve();
	}
	ngAfterViewInit() { this.startSlickJS(); }
	ionViewDidLoad(){ }
	ionViewWillLeave(){ }

	/**
	 * Actions
	 */
	private startSlickJS():void{
		this.$paises = new SlickJS($(this.paises.nativeElement), SETTINGS);
		this.$options = new SlickJS($(this.options.nativeElement), SETTINGS_ICONS);
	}

	private retrieve():void{
		this.countries = this.api.getCountries();
	}
}