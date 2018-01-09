/**
 * Global dependencies
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


/**
 * Local dependencies
 */
import { ApiService } from '../../@ms/api';


@Injectable()
export class CountriesApi {
	constructor(private apiService:ApiService) { }

    public getCountries():Observable<any>{
        return this.apiService.get(`countries`)
        .map(response => response.json());
    }
    

    public getCountry(countrySlug:string):Observable<any>{
		return Observable.create(async (observer) => {
            observer.next(null);
			observer.complete();
		});
	}
}
