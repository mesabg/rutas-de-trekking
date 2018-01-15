/**
 * Global dependencies
 */
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
//import Defiant from 'defiant/dist/defiant.min';


/**
 * Local dependencies
 */
import { ApiService } from '../../@ms/api';
import { LoaderApi } from './loader.api';


@Injectable()
export class CountriesApi {
	constructor(
        private apiService:ApiService, 
        private storage:Storage) { }

    public async getCountries():Promise<any>{
        try {
            return (await this.apiService.get(`countries`)).data;
        } catch (error) {
            console.log("An error ocurred getting the countries");
            return error;
        }
    }

    public async getCountriesFromLocal():Promise<any>{
        try {
            return await this.storage.get(`countries`);
        } catch (error) {
            console.log("An error ocurred getting the countries");
            return error;
        }
    }

    public async getCountryFromLocal(id:number):Promise<any>{
        try {
            return ((await this.storage.get('countries')).filter(country => country.id === id))[0];
        } catch (error) {
            console.log("An error ocurred getting the countries");
            return error;
        }
    }
    

    public getCountry(countrySlug:string):Observable<any>{
		return Observable.create(async (observer) => {
            observer.next(null);
			observer.complete();
		});
	}
}
