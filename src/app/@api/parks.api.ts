/**
 * Global dependencies
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
//import Defiant from 'defiant/dist/defiant.min';
import 'rxjs/add/operator/toPromise';
import xml2js from 'xml2js';
import $ from 'jquery';

/**
 * Local dependencies
 */
import { ApiService } from '../../@ms/api';


@Injectable()
export class ParksApi {
	constructor(private apiService:ApiService, private storage:Storage) { }

    public async getParks():Promise<any>{
        try {
            return (await this.apiService.get(`parques`)).data;
        } catch (error) {
            console.log("An error ocurred retrieving the parks");
            return error;
        }
    }

    public async getParksFromLocal(country_id:number):Promise<any>{
        try {
            return (await this.storage.get('parks')).filter(value => value.country_id === country_id);
        } catch (error) {
            console.log("An error ocurred retrieving the parks");
            return error;
        }
    }

    public async getParkByIdFromLocal(id:number):Promise<any> {
        try {
            return ((await this.storage.get('parks')).filter(value => value.id === id))[0];
        } catch (error) {
            console.log("An error ocurred retrieving the park");
            return error;
        }
    }
    

    public async getPark(parkId:number):Promise<any>{
        return this.apiService.get(`parques/${parkId}`);
    }
    

    public async getParkWeather(parkId:number):Promise<any>{
        try {          
            /*let park = await this.getParkByIdFromLocal(parkId);
            console.log("Park is :: ", park);
            console.log("Clima dia :: ", park.clima_dia);
            console.log("Clima hora :: ", park.clima_hora);
            let clima = {
                dia: await this.toJSON(await this.apiService.anyoriginGet(park.clima_dia)),
                hora: await this.toJSON(await this.apiService.anyoriginGet(park.clima_hora))
            };*/
            return {
                dia: await this.apiService.get(`weather/${parkId}?dia=true`),
                hora: await this.apiService.get(`weather/${parkId}?hora=true`)
            };
        } catch (error) {
            console.log("An error ocurred trying to retrieve the weather");
            return error;
        }
    }
    

    private async toJSON(xml:string):Promise<any> {
        return new Promise((resolve, reject) => {
            xml2js.parseString(xml, function(error, result){
                if (error) reject(error);
                else resolve(result);
            });
        });
    }
}
