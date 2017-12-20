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
	async ngOnInit() {
		await this.retrieve();
	}
	ngAfterViewInit() { }
	ionViewDidLoad(){ }
	ionViewWillLeave(){ }


	/**
	 * Actions
	 */
	private async retrieve(){
		this.description = (await this.api.getPark(this.navParams.data['country'], this.navParams.data['park-slug']).toPromise()).descripcion;
	}
}