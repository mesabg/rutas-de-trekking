/**
 * Global dependencies
 */
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({
	name: 'app-weather-page',
	segment: 'weather'
})
@Component({
	selector: 'app-weather-page',
	templateUrl: './weather.page.html'
})
export class WeatherPage implements OnInit {
	constructor(public navCtrl:NavController, public navParams:NavParams) { }
	ngOnInit() { }
	ionViewDidLoad(){ }
	ionViewWillLeave(){ }
}