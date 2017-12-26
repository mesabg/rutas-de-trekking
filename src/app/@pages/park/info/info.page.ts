/**
 * Global dependencies
 */
import { 
	Component, 
	OnInit, 
	AfterViewInit } from '@angular/core';
import { NavParams } from 'ionic-angular';

/**
 * Local dependencies
 */
import { ParksApi } from '../../../@api';
import { Park } from '../../../#interfaces';


@Component({
	selector: 'app-park-info-page',
	templateUrl: './info.page.html'
})
export class ParkInfoPage implements OnInit, AfterViewInit {
	public description:string;
	constructor(
		public navParams: NavParams,
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
		//if (response.status != "success") return;
		this.description = (<Park>response.data[0]).descripcion;
		console.log("Descripcion del parque :: ", this.description);
	}
}