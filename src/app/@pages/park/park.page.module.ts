/**
 * Global dependencies
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicPageModule } from 'ionic-angular';

/**
 * Local dependencies (Tabs)
 */
import { ParkPage } from './park.page';
import { ParkSyncModule } from './park.sync.module';


@NgModule({
	imports: [
		CommonModule,
		ParkSyncModule,
		IonicPageModule.forChild(ParkPage),
	],
	declarations: [
		ParkPage
	],
	entryComponents:[
		ParkPage
	],
	exports:[
		ParkPage
	]
})
export class ParkPageModule { }
