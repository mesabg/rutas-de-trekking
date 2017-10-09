/**
 * Global dependencies
 */
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/*
@IonicPage({
	name: 'app-park-info-page',
	segment: 'park-info'
})*/
@Component({
	selector: 'app-park-info-page',
	templateUrl: './info.page.html'
})
export class ParkInfoPage implements OnInit {
	constructor(/*public navCtrl:NavController, public navParams:NavParams*/) { }
	ngOnInit() { }
	ionViewDidLoad(){ }
	ionViewWillLeave(){ }
}