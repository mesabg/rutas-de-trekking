//-- Glbal dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//-- Local dependencies
import { AriaImageComponent } from './aria-image';


//-- Module description
@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		AriaImageComponent
	],
	entryComponents: [
		AriaImageComponent
	],
	exports: [
		AriaImageComponent
	]
})
export class AriaModule { }
