/**
 * Global dependencies
 */
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NavParams } from 'ionic-angular';

/**
 * Local dependencies
 */
import { Park } from '../../../#interfaces';
import { ParksApi } from '../../../@api';
import $ from 'jquery';


@Component({
	selector: 'app-park-search-page',
	templateUrl: './search.page.html'
})
export class ParkSearchPage implements OnInit {
	private park:Park;
	@ViewChild('main') private main:ElementRef;

	constructor(
		public navParams: NavParams, 
		private api:ParksApi,
		private elementRef:ElementRef ) { }

	/**
	 * Events
	 */
	ngOnInit() { }
	ionViewDidLoad(){ }
	ionViewWillLeave(){ }
	async ionViewWillEnter(){
		console.log("Entering Weather Page");
		await this.retrieve();
	}


	//-- General functions
	private async retrieve(){
		let url = await this.api.getParkWeather(this.navParams.get('park-slug'));
		console.log("URL is :: ", url);
		let style =  `
			header {
				display: none !important;
			}
		`;
		let script = `
			alert("Holaaaaa al mundooo");
		`;
		let final = `https://anydomain.herokuapp.com/scrapping?url=${encodeURIComponent(url)}&style=${encodeURIComponent(style)}&script=${encodeURIComponent(script)}`;
		let iframe = $(`<iframe id="the-content" src="${url}" frameborder="0"></frame>`);
		$(this.elementRef.nativeElement).find('.scroll-content').append(iframe);
		
		//-- Prepare iframe
		/*let self = this;
		let data = {
			url: url,
			
		};
		$.ajax({
			type: "POST", 
			url: `https://anydomain.herokuapp.com/scrapping`,
			data: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			},
			success: function(html){
				iframe.attr('srcdoc', html);
				console.log("HTML is here");
			}
		});*/

		
		/*console.log("This is a thing :: ", iframe);
		let loaded = false;
		setInterval(function(){
			if ($(self.elementRef.nativeElement).find('iframe').contents().find('*') != 'undefined' && !loaded) {
				console.log("iframe works");
				loaded = true;
			}
		}, 200);*/
		//$('iframe#the-content').load(function() {
			//console.log("After initial step");
			/*$('iframe#the-content').contents().find("head")
			.append($(`
				<style>  
					header {
						display: none !important;
					}
				</style>`
			));*/
		//});
		console.log("This is after styling");

		//-- Paste custom styles first
		/*console.log("Weather is :: ", this.$weather);
		$(this.wrapper.nativeElement).append(this.$weather);
		let modulo = $(this.wrapper.nativeElement).find('main').find('#modulos');
		let contenido = $($(this.wrapper.nativeElement).find('#contPag').find('#modulos').find('table')[0]);
		$(this.main.nativeElement).append(modulo);
		$(this.main.nativeElement).append(contenido);*/
		//console.log("Main :: ", this.main.nativeElement);
		//$(this.elementRef.nativeElement).prepend(styles);
	}
}