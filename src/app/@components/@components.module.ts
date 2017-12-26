//-- Global dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//-- Local dependencies
import { AriaModule } from './aria';


@NgModule({
	imports: [
		CommonModule,
		AriaModule
	],
	exports: [
		AriaModule
	]
})
export class ComponentsModule { }
