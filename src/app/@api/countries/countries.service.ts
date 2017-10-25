/**
 * Global dependencies
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


/**
 * Local dependencies
 */
import { Country } from '../../#interfaces';
import { COUNTRIES } from './countries.const';


@Injectable()
export class CountriesService {
	constructor() { }

    public getCountries():Observable<Country[]>{
		return Observable.create(observer => {
			observer.next(COUNTRIES);
			observer.complete();
		});	
	}
}
