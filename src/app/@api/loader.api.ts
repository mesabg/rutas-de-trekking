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
            let countries:any[] = (await this.countries.getCountries()).map(country => {
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

            //-- Save in local storage
            await this.storage.set('countries', countries);
            await this.storage.set('parks', parks);
            await this.storage.set('routes', routes);
            await this.storage.set('data_arrived', true);
        } catch (error) {
            console.log("An error ocurred saving data to local");
            console.log("Details :: ", error);
        }
    }


    public async dataArrive():Promise<any>{
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
