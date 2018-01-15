/**
 * Global imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicStorageModule } from '@ionic/storage';

/**
 * Local imports
 */
import { ServicesModule } from '../@services';
import { CountriesApi } from './countries.api';
import { ParksApi } from './parks.api';
import { RoutesApi } from './routes.api';
import { LoaderApi } from './loader.api';
import { ApiModule as MsApiModule } from '../../@ms/api';


/**
 * This module contains all the API calls
 */
@NgModule({
	imports: [
		CommonModule,
		ServicesModule,
		MsApiModule,
		IonicStorageModule.forRoot({
			name: '__trekking-db',
			driverOrder: ['indexeddb', 'sqlite', 'websql']
		})
	],
	exports: [
	],
	providers:[
		CountriesApi,
		ParksApi,
		RoutesApi,
		LoaderApi
	]
})
export class ApiModule { }
