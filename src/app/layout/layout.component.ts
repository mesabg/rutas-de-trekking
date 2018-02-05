/**
 * Global dependencies
 */
import { Component, OnInit, ViewEncapsulation,ViewChild } from '@angular/core';
import { Platform, NavController, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage'; 
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/**
 * Local dependencies
 */

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit {
	rootPage:string = 'app-home-page';
	@ViewChild('navigator') public nav:NavController;
    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, storage:Storage) {
		platform.ready().then(async () => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			let localForage:LocalForage = await storage.ready();
			statusBar.styleDefault();
			splashScreen.hide();
		});
	}
	
	ngOnInit(){}

	//-- General functions
	displayPage(name:string){
		let previousPages:ViewController[] = this.nav.getViews();
		let canMove:Boolean = true;
		previousPages.forEach((page) => {
			canMove = canMove && page.id != name;
		});
		if (canMove) this.nav.push(name);
	}
}
