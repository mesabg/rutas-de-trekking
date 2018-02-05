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
	@ViewChild('perDaysView') private perDaysView:ElementRef;
	@ViewChild('perHoursView') private perHoursView:ElementRef;
	
	public parkName:string; 
	public currentHour:string;
	public cieloDescripcion:string;
	public cieloIcono:string;
	public lunaDescripcion:string;
	public lunaIcono:string;
	public tempMax:string;
	public days:any[];
	public perDays:any[];

	public buttonText:string = 'Visualizar por horas';
	public visualization:string = 'days';

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
	async ionViewDidEnter(){
		this.retrieve();
		let self = this;
		setInterval(function(){ self.retrieve(); }, 8*60*1000);
	}

	//-- General functions
	private async retrieve(){
		try {
			let park = await this.api.getParkByIdFromLocal( parseInt(this.navParams.get('park-id')) );
			this.parkName = park.nombre;

			//-- Get API data && set properly
			let clima = await this.api.getParkWeather( parseInt(this.navParams.get('park-id')) );
			let diaActual = clima.hora.location.day[0];

			//-- Set params
			this.currentHour = diaActual.local_info['@attributes'].local_time;
			this.cieloDescripcion = diaActual.symbol['@attributes'].desc;
			this.cieloIcono = `../../../../assets/icons/tiempo-weather/galeria5/${diaActual.symbol['@attributes'].value}.png`;
			this.lunaDescripcion = diaActual.moon['@attributes'].desc;
			this.lunaIcono = `../../../../assets/icons/luna-moon/${diaActual.moon['@attributes'].symbol}.png`;
			this.tempMax = diaActual.tempmax['@attributes'].value + '°';

			this.days = clima.hora.location.day.map(day => {
				let date = {
					anio: parseInt(day['@attributes'].value.slice(0, 4)), 
					month: parseInt(day['@attributes'].value.slice(4, 6)), 
					day: parseInt(day['@attributes'].value.slice(6, 8))
				};
				let dateServer = new Date();
				dateServer.setFullYear(date.anio);
				dateServer.setMonth(date.month);
				dateServer.setDate(date.day);
				dateServer.setHours(0);
				dateServer.setMinutes(0);
				dateServer.setMilliseconds(0);

				return {
					date: {
						name: day['@attributes'].name,
						value: dateServer
					},
					weather: {
						image: `../../../../assets/icons/tiempo-weather/galeria5/${day.symbol['@attributes'].value}.png`,
						rain: day.rain['@attributes'].value
					},
					maxtemp: day.tempmax['@attributes'].value,
					mintemp: day.tempmin['@attributes'].value,
					wind: {
						image: `../../../../assets/icons/viento-wind/galeria2/${day.wind['@attributes'].symbol}.png`,
						value: `${day.wind['@attributes'].value} ${day.wind['@attributes'].unit}`
					}
				};
			});


			this.perDays = clima.hora.location.day.map(day => {
				let date = {
					anio: parseInt(day['@attributes'].value.slice(0, 4)), 
					month: parseInt(day['@attributes'].value.slice(4, 6)), 
					day: parseInt(day['@attributes'].value.slice(6, 8))
				};
				let dateServer = new Date();
				dateServer.setFullYear(date.anio);
				dateServer.setMonth(date.month);
				dateServer.setDate(date.day);
				dateServer.setHours(0);
				dateServer.setMinutes(0);
				dateServer.setMilliseconds(0);

				return {
					date: {
						name: day['@attributes'].name,
						value: dateServer
					},
					hours: day.hour.map(hour => {
						return {
							value: hour['@attributes'].value,
							weather: {
								image: `../../../../assets/icons/tiempo-weather/galeria5/${hour.symbol['@attributes'].value}.png`,
								rain: hour.rain['@attributes'].value
							},
							temp: hour.temp['@attributes'].value,
							wind: {
								image: `../../../../assets/icons/viento-wind/galeria2/${day.wind['@attributes'].symbol}.png`,
								value: `${day.wind['@attributes'].value} ${day.wind['@attributes'].unit}`
							}
						}
					})
				};
			});
		} catch (error) {
			console.log("An error ocurred");
			console.log("Details :: ", error);
		}
	}


	public changeVisualization(){
		if (this.visualization === 'days'){ 
			//-- Se muestra como days, se va a cambiar a hours
			this.buttonText = 'Visualizar por días';
			this.visualization = 'hours';
			$(this.perHoursView.nativeElement).css('display', 'initial');
			$(this.perDaysView.nativeElement).css('display', 'none');
		}else if (this.visualization === 'hours'){
			//-- Se muestra como hours, se va a cambiar a days
			this.buttonText = 'Visualizar por horas';
			this.visualization = 'days';
			$(this.perDaysView.nativeElement).css('display', 'initial');
			$(this.perHoursView.nativeElement).css('display', 'none');
		}
	}
}