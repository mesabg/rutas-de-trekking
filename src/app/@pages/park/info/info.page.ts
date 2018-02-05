/**
 * Global dependencies
 */
import { 
	Component, 
	OnInit, 
	AfterViewInit } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Local dependencies
 */
import { ParksApi } from '../../../@api';
import { PreferencesService } from '../../../@services';
import { Park } from '../../../#interfaces';


@Component({
	selector: 'app-park-info-page',
	templateUrl: './info.page.html'
})
export class ParkInfoPage implements OnInit, AfterViewInit {
	public description:string;
	constructor(
		public navParams: NavParams,
		private storage:Storage,
		private api:ParksApi,
		private preferences:PreferencesService) {}

	/**
	 * Events
	 */
	ngOnInit() {}
	ngAfterViewInit() {
		PreferencesService.propertyChange.subscribe((property:{key:string; value:string}) => {
			if (property.key === 'pref_language') this.retrieve();
		});
	}
	ionViewDidLoad(){ }
	ionViewWillEnter(){ }
	ionViewWillLeave(){ } 
	async ionViewDidEnter(){ await this.retrieve(); }


	/**
	 * Actions
	 */
	private async retrieve(){
		let park = await this.api.getParkByIdFromLocal( parseInt(this.navParams.data['park-id']) );
		let language = await this.storage.get( PreferencesService.PREF_LANGUAGE );
		this.description = park[`descripcion_${language}`];
		this.description = this.description === null || this.description === undefined ? '' : this.description;
	}
}