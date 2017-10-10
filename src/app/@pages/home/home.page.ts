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

/**
 * Plugins
 */
import * as $ from "jquery";

/**
 * Local dependencies
 */
import { SlickJS } from '../../../@ms/components';
import { SETTINGS, SETTINGS_ICONS } from './home.page.slick-config';


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

	constructor(public navCtrl:NavController, public navParams:NavParams) { }

	/**
	 * Events
	 */
	ngOnInit() { }
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
}