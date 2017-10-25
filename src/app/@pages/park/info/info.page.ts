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
import { ParksService } from '../../../@api';
import { Park } from '../../../#interfaces';


@Component({
	selector: 'app-park-info-page',
	templateUrl: './info.page.html'
})
export class ParkInfoPage implements OnInit, AfterViewInit {
	public description:string;
	constructor(
		public navParams: NavParams,
		private api:ParksService) {}

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
	private retrieve():void{
		this.api.getActualPark(this.navParams.data['country'], this.navParams.data['park-slug'])
		.subscribe((park:Park) => {
			this.description = park.description;
		});
	}
}