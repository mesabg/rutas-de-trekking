/**
 * Global dependencies
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


/**
 * Local dependencies
 */
import { StorageService } from '../@services';
import { Country } from '../#interfaces';
import { PAISES } from '../@data';
import { ApiService } from '../../@ms/api';


@Injectable()
export class CountriesApi {
	constructor(private storage:StorageService, private apiService:ApiService) { }

    public getCountries():Observable<any>{

		/*return Observable.create(async (observer) => {
            observer.next(PAISES);
            try {
                observer.next(await this.storage.retrieve('paises'));
            } catch (reason) {
                observer.next(null);
            }
            observer.complete();
        });*/
        
        return this.apiService.get(`countries`)
        .map(response => response.json());
    }
    

    public getCountry(countrySlug:string):Observable<Country>{
		return Observable.create(async (observer) => {
            try {
                let paises:Country[] = await this.storage.retrieve('paises');
                let country:Country = null;
                paises.forEach(pais => {
                    if (pais.slug === countrySlug)
                        country = pais;
                });
                observer.next(country);
            } catch (reason) {
                observer.next(null);
            }
			observer.complete();
		});
	}
}
