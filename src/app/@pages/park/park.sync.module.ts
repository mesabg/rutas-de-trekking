/**
 * Global dependencies
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicPageModule } from 'ionic-angular';
import { AgmCoreModule } from '@agm/core';
import { PolylineManager, MarkerManager, GoogleMapsAPIWrapper } from '@agm/core';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicStorageModule } from '@ionic/storage';

/**
 * Local dependencies (modules)
 */
import { ApiModule } from '../../@api';
import { ServicesModule } from '../../@services';

/**
 * Local dependencies (Tabs)
 */
import { ParkApnPage } from './apn';
import { ParkInfoPage } from './info';
import { ParkLodgmentPage } from './lodgment';
import { ParkRoutesPage } from './routes';
import { ParkSearchPage } from './search';
import { RouteDetailPage } from './route-detail';

/**
 * This module contains all the tabs which are gonna be used into the park page
 */
@NgModule({
	imports: [
		CommonModule,
		IonicPageModule,
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyCHbQP3rbxe8JLnQi0qsSRBAdcAw5_uUYg'
		}),
		ApiModule,
		ServicesModule,
		IonicStorageModule.forRoot({
			name: '__trekking-db',
			driverOrder: ['indexeddb', 'sqlite', 'websql']
		})
	],
	declarations:[
        ParkApnPage,
        ParkInfoPage,
        ParkLodgmentPage,
		ParkRoutesPage,
		RouteDetailPage,
        ParkSearchPage
	],
	entryComponents:[
        ParkApnPage,
        ParkInfoPage,
        ParkLodgmentPage,
		ParkRoutesPage,
		RouteDetailPage,
        ParkSearchPage
	],
	exports:[
		ParkApnPage,
		ParkInfoPage,
		ParkLodgmentPage,
		ParkRoutesPage,
		RouteDetailPage,
		ParkSearchPage
	],
	providers:[
		Geolocation,
		PolylineManager,
		MarkerManager,
		GoogleMapsAPIWrapper
	]
})
export class ParkSyncModule { }