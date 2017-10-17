/**
 * Global dependencies
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Local dependencies
 */
import { ParksService } from '../../@services';
import { Park } from '../../#interfaces';


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
	public parks:Park[];
	public header:{img:string, title:string};

	constructor(
		public navCtrl:NavController, 
		public navParams:NavParams,
		public parksService:ParksService) {
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
	private retrieveData(country:string):void{
		this.parksService.getParksInformation(country).subscribe((parks:Park[]) => {
			this.parks = parks;
		});

		this.parksService.getHeader(country).subscribe((header:{img:string, title:string}) => {
			this.header = header;
		});
	}
}