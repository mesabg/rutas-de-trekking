/**
 * Global dependencies
 */
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({
	name: 'app-configuration-page',
	segment: 'configuration'
})
@Component({
	selector: 'app-configuration-page',
	templateUrl: './configuration.page.html'
})
export class ConfigurationPage implements OnInit {
	constructor(public navCtrl:NavController, public navParams:NavParams) { }
	ngOnInit() { }
	ionViewDidLoad(){ }
	ionViewWillLeave(){ }
}