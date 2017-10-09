/**
 * Global dependencies
 */
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({
	name: 'app-about-us-page',
	segment: 'about-us'
})
@Component({
	selector: 'app-about-us-page',
	templateUrl: './about-us.page.html'
})
export class AboutUsPage implements OnInit {
	constructor(public navCtrl:NavController, public navParams:NavParams) { }
	ngOnInit() { }
	ionViewDidLoad(){ }
	ionViewWillLeave(){ }
}
