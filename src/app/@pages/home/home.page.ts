/**
 * Global dependencies
 */
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({
	name: 'app-home-page',
	segment: 'home'
})
@Component({
	selector: 'app-home-page',
	templateUrl: './home.page.html'
})
export class HomePage implements OnInit {
	constructor(public navCtrl:NavController, public navParams:NavParams) { }
	ngOnInit() { }
	ionViewDidLoad(){ }
	ionViewWillLeave(){ }

	public routing(segment:string):void{
		this.navCtrl.push(segment);
	}
}