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

@NgModule({
	imports: [
		CommonModule,
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
