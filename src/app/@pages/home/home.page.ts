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
	EventEmitter,
	ComponentFactory,
	ComponentFactoryResolver,
	ViewRef,
	ViewContainerRef } from '@angular/core';

import { 
	IonicPage, 
	NavController, 
	NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

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
import { CountriesApi, ParksApi, LoaderApi } from '../../@api';
import { Park } from '../../#interfaces';
import { AriaImageComponent, AriaImageItem, AriaImageExport } from '../../@components';


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
	@ViewChild('render', {read:ViewContainerRef}) private viewRender:ViewContainerRef;
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
		public api:CountriesApi,
		public loader:LoaderApi,
		private storage:Storage,
		private resolver:ComponentFactoryResolver) {}

	/**
	 * Events
	 */
	ngOnInit() { this.retrieve(); }
	ngAfterViewInit() { 
		this.startSlickJS();
		this.viewInit = true;
		this.afterViewInit.emit();
	}

	ionViewDidLoad(){ }
	ionViewWillLeave(){ }
	ionViewWillEnter() {
	}

	ngOnChanges() { }

	/**
	 * Actions
	 */
	private startSlickJS(){
		this.$paises = new SlickJS($(this.paises.nativeElement), SETTINGS);
	}

	private async retrieve():Promise<void>{
		//-- Get INITIAL data
		await this.storage.set('data_arrived', false);
		await this.loader.toLocalStorage();
		await this.loader.dataArrive();

		let paises = await this.api.getCountriesFromLocal();
		console.log("Paises ", paises);

		//-- Wait till´ initial view is rendered
		if (!this.viewInit) 
			this.afterViewInit.subscribe(() => {
				//-- View is initiated, go to process
				this.process(paises);
			});
		else this.process(paises);
	}



	//-- Process data
	//-- After retrieve
	//-- After initial view is rendered
	private process(paises:any):void {
		paises.forEach((pais) => {
			this.render({
				index: pais.id,
				name: pais.country,
				url: pais.logo,
				slug: pais.alpha_2
			});
		});
	}


	//-- Render a single image component
	//-- Subscribe to every event (onClick, basically)
	private render(image:AriaImageItem):void{
		//-- Creating component
		let factory = this.resolver.resolveComponentFactory(AriaImageComponent);
		let reference = this.viewRender.createComponent(factory);

		//-- Setting component params
		(<AriaImageComponent>reference.instance).image = image;

		//-- Suscribe to events
		(<AriaImageComponent>reference.instance)
            .onClick
            .subscribe((response:AriaImageExport) => {
				//-- Do the routing
				this.navCtrl.push('app-parks-page', {
					'country-id': response.data.index,
					'country-slug': response.data.slug
				});
			});
			
		(<AriaImageComponent>reference.instance)
            .afterViewInit
            .subscribe((data:AriaImageExport) => {
				this.$paises.push(data.$target);
            });
		
	}
}