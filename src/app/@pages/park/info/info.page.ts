/**
 * Global dependencies
 */
import { Component, OnInit, AfterViewInit } from '@angular/core';

//-- Services
import { ParkService } from '../park.service';


@Component({
	selector: 'app-park-info-page',
	templateUrl: './info.page.html'
})
export class ParkInfoPage implements OnInit, AfterViewInit {
	constructor(public parkService:ParkService) { }

	ngOnInit() { }
	ngAfterViewInit() { 
		let self:ParkInfoPage = this;
		setTimeout(function(){
			console.log("Park (info - tab) :: ", self.parkService.get());
		}, 50);
	}
	ionViewDidLoad(){ }
	ionViewWillLeave(){ }
}