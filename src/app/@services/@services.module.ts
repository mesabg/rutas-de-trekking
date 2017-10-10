/**
 * Global dependencies
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Services dependencies
 */
import { ParksService } from './data';


@NgModule({
	imports: [
		CommonModule
	],
	providers: [
		ParksService
	]
})
export class ServicesModule { }
