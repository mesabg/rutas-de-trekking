//-- Global dependencies
import { 
	Component, 
	OnInit,
	ViewEncapsulation,
	Input,
	Output,
	EventEmitter,
	ViewChild,
	ElementRef,
	AfterViewInit } from '@angular/core';

import $ from 'jquery';

//-- Local dependencies
import { AriaImageItem, AriaImageExport } from './aria-image.interface';



//-- Component description
@Component({
	selector: 'trekking-aria-image',
	templateUrl: './aria-image.component.html',
	encapsulation: ViewEncapsulation.None
})
export class AriaImageComponent implements OnInit, AfterViewInit {
	@Input('image') public image:AriaImageItem;
	@Output('onClick') public onClick:EventEmitter<AriaImageExport> = new EventEmitter<AriaImageExport>();
	@Output('afterViewInit') public afterViewInit:EventEmitter<AriaImageExport> = new EventEmitter<AriaImageExport>();
	@ViewChild('view') public view:ElementRef;

	constructor() { }
	ngOnInit() { }
	ngAfterViewInit() {
		this.afterViewInit.emit({
			$target: this.view.nativeElement,
			data: this.image
		});
	}


	//-- General functions
	public clickEvent():void{
		this.onClick.emit({
			$target: this.view.nativeElement,
			data: this.image
		});
	}
}
