/**
 * Global dependencies
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import xml2js from 'xml2js';
import $ from 'jquery';

/**
 * Local dependencies
 */
import { ApiService } from '../../@ms/api';


@Injectable()
export class ParksApi {
	constructor(private apiService:ApiService) { }

    public getParks():Observable<any>{
        return this.apiService.get(`parques`)
        .map(response => response.json());
    }


    

    public getPark(parkId:number):Promise<any>{
        return this.apiService.get(`parques/${parkId}`)
        .map(response => response.json())
        .toPromise();
    }
    

    public getParkWeather(parkSlug:number):Promise<any>{
        return this.apiService.get(`parques/${parkSlug}`)
        .map(response => response.json())
        .map(async (response) => {
            let json = (response.data[0]);
            let weather = await this.apiService.fullUrlGet(`http://anyorigin.com/go?url=${encodeURIComponent(json.clima_dia)}&callback=?`);
            weather = await this.toJSON(weather);
            let url = weather.report.location[0].interesting[0].url[0]._;
            //let predictionHtml = await this.apiService.fullUrlGet(`http://anyorigin.com/go?url=${encodeURIComponent(url)}&callback=?`);
            //let jqueryObject = $.parseHTML(predictionHtml);
            return url;
        })
        .toPromise();
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
