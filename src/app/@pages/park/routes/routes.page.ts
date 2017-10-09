/**
 * Global dependencies
 */
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/*
@IonicPage({
	name: 'app-park-routes-page',
	segment: 'park-routes'
})*/
@Component({
	selector: 'app-park-routes-page',
	templateUrl: './routes.page.html'
})
export class ParkRoutesPage implements OnInit {
	constructor(/*public navCtrl:NavController, public navParams:NavParams*/) { }
	ngOnInit() { }
	ionViewDidLoad(){ }
	ionViewWillLeave(){ }
}