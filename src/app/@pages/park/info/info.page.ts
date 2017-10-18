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
import { Park } from '../../../#interfaces';


@Component({
	selector: 'app-park-info-page',
	templateUrl: './info.page.html'
})
export class ParkInfoPage implements OnInit, AfterViewInit {
	public description:string = '';
	constructor(public navParams: NavParams) {
		this.description = this.navParams.data['description'];
	}

	/**
	 * Events
	 */
	ngOnInit() { }
	ngAfterViewInit() { }
	ionViewDidLoad(){ }
	ionViewWillLeave(){ }
}