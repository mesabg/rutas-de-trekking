/**
 * Global dependencies
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Services dependencies
 */
import { PreferencesService } from './preferences.service';


@NgModule({
	imports: [
		CommonModule,
	],
	providers: [
		PreferencesService
	],
	exports:[]
})
export class ServicesModule { }
