/**
 * Global dependencies
 */
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({
	name: 'app-parks-page',
	segment: 'parks'
})
@Component({
	selector: 'app-parks-page',
	templateUrl: './parks.page.html'
})
export class ParksPage implements OnInit {
	constructor(public navCtrl:NavController, public navParams:NavParams) { }
	ngOnInit() { }
	ionViewDidLoad(){ }
	ionViewWillLeave(){ }
}