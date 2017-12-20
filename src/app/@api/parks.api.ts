/**
 * Global dependencies
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


/**
 * Local dependencies
 */
import { StorageService } from '../@services';
import { Park, Country } from '../#interfaces';
import { ApiService } from '../../@ms/api';


@Injectable()
export class ParksApi {
	constructor(private storage:StorageService, private apiService:ApiService) { }

    public getParks(/*countrySlug:string*/):Observable<any>{
        return this.apiService.get(`parques`)
        .map(response => response.json());
		/*return Observable.create(async (observer) => {
            try {
                let paises:Country[] = await this.storage.retrieve('paises');
                let parks:Park[] = [];
                paises.forEach(pais => {
                    if (pais.slug === countrySlug)
                        parks = pais.parques;
                });
                observer.next(parks);
            } catch (reason) {
                observer.next(null);
            }
			observer.complete();
		});	*/
    }


    

    public getPark(countrySlug:string, parkSlug:string):Observable<Park>{
		return Observable.create(async (observer) => {
            try {
                let paises:Country[] = await this.storage.retrieve('paises');
                let park:Park = null;
                paises.forEach(pais => {
                    if (pais.slug === countrySlug)
                        pais.parques.forEach(parque => {
                            if (parque.slug === parkSlug) park = parque;
                        });
                });
                observer.next(park);
            } catch (reason) {
                observer.next(null);
            }
			observer.complete();
		});
	}
}
