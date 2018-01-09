/**
 * Global dependencies
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';


/**
 * Local dependencies
 */
import { StorageService } from '../@services';
import { Park, Country, Route } from '../#interfaces';
import { ApiService } from '../../@ms/api';


@Injectable()
export class RoutesApi {
	constructor(private apiService:ApiService) { }

    public async getRoutes(parkSlug:string):Promise<Route[]>{
		let response:any = await this.apiService.get(`routes/parques/${parkSlug}`)
            .map(response => response.json())
            .toPromise();
        return <Promise<Route[]>>response.data;
    }



    public async getRouteDetail(routeSlug:string):Promise<Route> {
        let response:any = await this.apiService.get(`routes/${routeSlug}`)
            .map(response => response.json())
            .toPromise();
        let route:any = await <Route>response.data[0];
        route.puntos = JSON.parse(route.puntos);
        route.altura = Math.round(parseFloat(route.altura));
        route.distancia = Math.round(parseFloat(route.distancia));
        return <Route>route;
    }
}
