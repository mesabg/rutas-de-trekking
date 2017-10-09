/**
 * Global dependencies
 */
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/*
@IonicPage({
	name: 'app-park-lodgment-page',
	segment: 'park-lodgment'
})*/
@Component({
	selector: 'app-park-lodgment-page',
	templateUrl: './lodgment.page.html'
})
export class ParkLodgmentPage implements OnInit {
	constructor(/*public navCtrl:NavController, public navParams:NavParams*/) { }
	ngOnInit() { }
	ionViewDidLoad(){ }
	ionViewWillLeave(){ }
}