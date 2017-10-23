/**
 * Global dependencies
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicPageModule } from 'ionic-angular';
import { AgmCoreModule } from '@agm/core';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Local dependencies (Tabs)
 */
import { ParkApnPage } from './apn';
import { ParkInfoPage } from './info';
import { ParkLodgmentPage } from './lodgment';
import { ParkRoutesPage } from './routes';
import { ParkSearchPage } from './search';

/**
 * This module contains all the tabs which are gonna be used into the park page
 */
@NgModule({
	imports: [
		CommonModule,
		IonicPageModule,
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyCHbQP3rbxe8JLnQi0qsSRBAdcAw5_uUYg'
		})
	],
	declarations:[
        ParkApnPage,
        ParkInfoPage,
        ParkLodgmentPage,
        ParkRoutesPage,
        ParkSearchPage
	],
	entryComponents:[
        ParkApnPage,
        ParkInfoPage,
        ParkLodgmentPage,
        ParkRoutesPage,
        ParkSearchPage
	],
	exports:[
		ParkApnPage,
		ParkInfoPage,
		ParkLodgmentPage,
		ParkRoutesPage,
		ParkSearchPage
	],
	providers:[
		Geolocation
	]
})
export class ParkSyncModule { }