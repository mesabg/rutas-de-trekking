/**
 * Global imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicStorageModule } from '@ionic/storage';

/**
 * Local imports
 */
import { ParksService } from './parks';
import { CountriesService } from './countries';
import { PersistsService } from './persist';


/**
 * This module contains all the API calls
 */
@NgModule({
	imports: [
		CommonModule,
		IonicStorageModule.forRoot()
	],
	exports: [
		IonicStorageModule
	],
	providers:[
		ParksService,
		CountriesService,
		PersistsService
	]
})
export class ApiModule { }
