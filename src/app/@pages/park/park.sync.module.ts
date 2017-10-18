/**
 * Global dependencies
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicPageModule } from 'ionic-angular';

/**
 * Local dependencies (Tabs)
 */
import { ParkApnPage } from './apn';
import { ParkInfoPage } from './info';
import { ParkLodgmentPage } from './lodgment';
import { ParkRoutesPage } from './routes';
import { ParkSearchPage } from './search';

import { ParkService } from './park.service';

@NgModule({
	imports: [
		CommonModule,
		IonicPageModule
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
		ParkService
	]
})
export class ParkSyncModule { }