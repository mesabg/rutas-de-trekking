/**
 * Global dependencies
 */
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/toPromise';


/**
 * Local dependencies
 */
import { Route } from '../#interfaces';
import { ApiService } from '../../@ms/api';


@Injectable()
export class RoutesApi {
	constructor(private apiService:ApiService, private storage:Storage) { }

    public async getAllRoutes():Promise<any>{
		try {
            return (await this.apiService.get(`routes`)).data;
        } catch (error) {
            console.log("An error ocurred getting the routes data");
            return error;
        }
    }

    public async getRoutes(parkSlug:string):Promise<any>{
        try {
            return (await this.apiService.get(`routes/parques/${parkSlug}`)).data;
        } catch (error) {
            console.log("An error ocurred getting the routes data by park slug");
            return error;
        }
    }


    public async getRoutesByParkFromLocal(parkId:number):Promise<any>{
        try {
            return (await this.storage.get('routes')).filter(value => value.park_id === parkId);
        } catch (error) {
            console.log("An error ocurred getting the routes data by park slug");
            return error;
        }
    }


    public async getRouteByIdFromLocal(routeId:number):Promise<any>{
        try {
            return ((await this.storage.get('routes')).filter(value => value.id === routeId))[0];
        } catch (error) {
            console.log("An error ocurred getting the routes data by park slug");
            return error;
        }
    }



    public async getRouteDetail(routeSlug:string):Promise<Route> {
        let response:any = await this.apiService.get(`routes/${routeSlug}`);
        let route:any = await <Route>response.data[0];
        route.puntos = JSON.parse(route.puntos);
        route.altura = Math.round(parseFloat(route.altura));
        route.distancia = Math.round(parseFloat(route.distancia));
        return <Route>route;
    }
}
