/**
 * Global dependencies
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicStorageModule } from '@ionic/storage';

/**
 * Services dependencies
 */
import { StorageService } from './storage.service';
import { PreferencesService } from './preferences.service';
import { LoadDataService } from './load-data.service';


@NgModule({
	imports: [
		CommonModule,
		IonicStorageModule.forRoot({
			name: '__trekking-db',
			driverOrder: ['indexeddb', 'sqlite', 'websql']
		})
	],
	providers: [
		StorageService,
		LoadDataService,
		PreferencesService
	],
	exports:[]
})
export class ServicesModule { }
