/**
 * Global dependencies
 */
import { Component, OnInit } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { RoutesApi } from '../../../@api';
import { StorageService } from '../../../@services';
import { Route } from '../../../#interfaces';
import { Geolocation } from '@ionic-native/geolocation';
import utmObj from 'utm-latlng';
const utm = new utmObj();


@Component({
	selector: 'app-park-route-detail-controller-page',
	templateUrl: './route-detail.page.html'
})
export class RouteDetailPage implements OnInit {
    public description:string;
    public route:Route;
    public puntos:{lat:number; lng:number}[] = [];
    public markers:{lat:number; lng:number}[] = [];
    public center:{lat:number; lng:number} = {
        lng: 0.0,
        lat: 0.0
    };



    public title:string;
	public time:string;
	public distance:number;
	public velocity:number;

	constructor(
        public navParams: NavParams,
        public navCtrl:NavController,
        private routesApi:RoutesApi,
        private storage:StorageService,
        private geo:Geolocation) {}

	/**
	 * Events
	 */
	async ngOnInit() {
        
    }

    async ionViewDidLoad(){ }
    async ionViewWillEnter(){
        //-- Reinit vars
        this.description = "";
        this.title = "";
        this.time = "";
        this.distance = 0;
        this.velocity = 0;

        //-- Reinit points
        this.center = {
            lng: 0.0,
            lat: 0.0
        };
        this.puntos = [];
        this.markers = [];

        //-- Get new data
        await this.retrieve();
    }
    ionViewWillLeave(){ }
    
    //-- General functions
    async retrieve(){
        //-- Get data
        let actualRouteSlug = await this.storage.retrieve('actual-route-slug');
        this.route = (await this.routesApi.getRouteDetail(this.navParams.data['country'], this.navParams.data['park-slug'], actualRouteSlug).toPromise());
        
        //-- Prepare initial data
        this.description = this.route.descripcion;
        let half = this.route.duracion.split(':');
        this.time = `${half[0]} h ${half[1]} min`;
        this.distance = this.route.distancia;
        this.velocity = this.route.altura;
        this.title = this.route.nombre;

        //-- Prepare points
        this.center = this.route.puntos[0];
        this.puntos = this.route.puntos;
        this.markers.push(this.route.puntos[0]);
        this.markers.push(this.route.puntos[ this.route.puntos.length - 1 ]);
    }


    async empezar(){
        console.log('Buscando coordenadas');

        //-- Empezar el recorrido
        let resp = await this.geo.getCurrentPosition();
        console.log("Response :: ", resp);
	    let latitude = resp.coords.latitude;
        let longitude = resp.coords.longitude;
        
        //-- Move the center
        this.center.lat = latitude;
        this.center.lng = longitude;

        //-- Move coords
        let utmCoords = utm.convertLatLngToUtm(latitude, longitude);
        console.log("Coords are :: ", utmCoords);

        //-- Restart values
        this.time = `0 h 0 min`;

        //-- vigilar cambio de posicion
        let self = this;
        setInterval(async function(){
            let response = await self.geo.getCurrentPosition();
            console.log("Validating position");
            let coords = response.coords;
            console.log("New coords :: ", coords);

            //-- Make some calculation here
            let utmInitial = utm.convertLatLngToUtm(coords.latitude, coords.longitude);
            let utmFinal = utm.convertLatLngToUtm(self.route.puntos[ self.route.puntos.length - 1 ].lat, self.route.puntos[ self.route.puntos.length - 1 ].lng);
            let inital = {
                x: utmInitial.Easting,
                y: utmInitial.Northing
            };
            let final = {
                x: utmFinal.Easting,
                y: utmFinal.Northing
            };
            let distanceR = Math.sqrt( Math.pow(final.x-inital.x, 2) + Math.pow(final.y-inital.y, 2) );
            self.distance = distanceR;

        }, 10000); 
    }
}