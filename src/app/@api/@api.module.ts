/**
 * Global imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Local imports
 */
import { ServicesModule } from '../@services';
import { CountriesApi } from './countries.api';
import { ParksApi } from './parks.api';
import { RoutesApi } from './routes.api';
import { ApiModule as MsApiModule } from '../../@ms/api';


/**
 * This module contains all the API calls
 */
@NgModule({
	imports: [
		CommonModule,
		ServicesModule,
		MsApiModule
	],
	exports: [
	],
	providers:[
		CountriesApi,
		ParksApi,
		RoutesApi
	]
})
export class ApiModule { }
