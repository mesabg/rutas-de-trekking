/**
 * Global dependencies
 */
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/toPromise';


/**
 * Local dependencies
 */
import { CountriesApi } from './countries.api';
import { ParksApi } from './parks.api';
import { RoutesApi } from './routes.api';


@Injectable()
export class LoaderApi {
    public dataLoaded:boolean = false;
    public afterDataLoaded:EventEmitter<void> = new EventEmitter<void>();

	constructor(
        private countries:CountriesApi, 
        private parks:ParksApi, 
        private routes:RoutesApi, 
        private storage:Storage) { }


    public async toLocalStorage():Promise<any>{
        /**
         * Retrieve all the necesary data and save it into local storage
         */
        try {
            //console.log("Data arrive sure is :: ", await this.storage.get('data_arrived'));
            //await this.storage.set('data_arrived', false);
            let countries:any[] = (await this.countries.getCountries()).map(country => {
                //-- Sanity check
                //if (country.logo === undefined) 
                //    country.logo = 'http://www.lse.ac.uk/study/informationForInternationalStudents/countryRegion/latinAmerica/Argentina/argentinaFlag.gif';
                return country;
            });
            let parks:any[] = await this.parks.getParks();
            let routes:any[] = (await this.routes.getAllRoutes()).map(_route => {
                _route.puntos = JSON.parse(_route.puntos);
                _route.altura = Math.round(parseFloat(_route.altura));
                _route.distancia = Math.round(parseFloat(_route.distancia));
                _route.park_id = _route.land_id;
                return _route;
            });
            /*let routes:any[] = (await Promise.all(parks.map((park) => this.routes.getRoutes(park.slug)))).map((_routes, index) => {
                return _routes.map(_route => {
                });
            }).reduce((previous, current) => previous.concat(current), []);*/
            /*console.log("Countries are :: ", countries);
            console.log("Parks are :: ", parks);*/
            console.log("Routes are :: ", routes);

            //-- Save in local storage
            await this.storage.set('countries', countries);
            await this.storage.set('parks', parks);
            await this.storage.set('routes', routes);
            console.log("Everything saved in local storage");
            await this.storage.set('data_arrived', true);
        } catch (error) {
            console.log("An error ocurred saving data to local");
            console.log("Details :: ", error);
        }
    }


    public async dataArrive():Promise<any>{
        console.log("In data arrive is ", await this.storage.get('data_arrived'));
        return new Promise((resolve, reject) => {
            let self = this;
            let interval = setInterval(async ()=> {
                let data_arrive = await self.storage.get('data_arrived');
                if (data_arrive){
                    clearInterval(interval);
                    resolve();
                }
            }, 100);
        });
    }
}
