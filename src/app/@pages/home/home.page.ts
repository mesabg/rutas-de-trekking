/**
 * Global dependencies
 */
import { 
	Component, 
	OnInit, 
	AfterViewInit,
	ElementRef,
	ViewChild,
	OnChanges,
	EventEmitter } from '@angular/core';

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
import { CountriesApi, ParksApi } from '../../@api';


@IonicPage({
	name: 'app-home-page',
	segment: 'home'
})
@Component({
	selector: 'app-home-page',
	templateUrl: './home.page.html'
})
export class HomePage implements OnInit, AfterViewInit, OnChanges {
	/**
	 * Variables
	 */
	@ViewChild('paises') private paises:ElementRef;
	@ViewChild('options') private options:ElementRef;
	private $paises:SlickJS;
	private $options:SlickJS;
	public parques:Observable<{
		id:number;
		nombre:string;
		logo:string;
	}>;

	private viewInit:boolean = false;
	private afterViewInit:EventEmitter<void> = new EventEmitter<void>();

	constructor(
		public navCtrl:NavController, 
		public navParams:NavParams,
		public api:ParksApi) {}

	/**
	 * Events
	 */
	ngOnInit() {
		this.retrieve();
	}
	ngAfterViewInit() { 
		this.startSlickJS();
		this.viewInit = true;
		this.afterViewInit.emit();
	}
	ionViewDidLoad(){ }
	ionViewWillLeave(){ }

	ngOnChanges() {
		console.log("Some changes here");
	}

	/**
	 * Actions
	 */
	private startSlickJS():void{
		this.$paises = new SlickJS($(this.paises.nativeElement), SETTINGS);
		//this.$options = new SlickJS($(this.options.nativeElement), SETTINGS_ICONS);
	}

	private retrieve():void{
		//this.countries = this.api.getCountries();
		this.api.getParks().subscribe(response => {
			let data = response.data;
			console.log("Response is :: ", data);
		});
		/*this.api.getCountries().subscribe((countries:Country[]) => {
			this.$paises = new SlickJS($(this.paises.nativeElement), SETTINGS);
			countries.forEach((country) => {
				if (this.viewInit)
					this.$paises.push($('<span>HOLAAAA COMO ESTASSS</span>'));
				else this.afterViewInit.subscribe(() => {
					this.$paises.push($('<span>HOLAAAA COMO ESTASSS</span>'));
				});
			});
		});*/
	}
}