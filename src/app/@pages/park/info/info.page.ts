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
		private api:ParksApi) {}

	/**
	 * Events
	 */
	ngOnInit() {
		this.retrieve();
	}
	ngAfterViewInit() { }
	ionViewDidLoad(){ }
	ionViewWillLeave(){ }


	/**
	 * Actions
	 */
	private async retrieve(){
		console.log("Before retrieve");
		let response = await this.api.getPark(this.navParams.data['park-id']);
		let language = await this.storage.get( PreferencesService.PREF_LANGUAGE );
		this.description = (<Park>response.data[0])[`descripcion_${language}`];
		this.description = this.description === null || this.description === undefined ? '' : this.description;
		console.log("Descripcion del parque :: ", this.description);
	}
}