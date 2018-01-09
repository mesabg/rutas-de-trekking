/**
 * Global dependencies
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

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
}
