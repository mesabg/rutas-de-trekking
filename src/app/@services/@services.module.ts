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
		PreferencesService
	],
	exports:[]
})
export class ServicesModule { }
