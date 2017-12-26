/**
 * Global dependencies
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


/**
 * Local dependencies
 */
import { StorageService } from '../@services';
import { Park, Country, Route } from '../#interfaces';


@Injectable()
export class RoutesApi {
	constructor(private storage:StorageService) { }

    public getRoutes(countrySlug:string, parkSlug:string):Observable<Route[]>{
		return Observable.create(async (observer) => {
            try {
                let paises:Country[] = await this.storage.retrieve('paises');
                let routes:Route[] = [];
                paises.forEach(pais => {
                    if (pais.slug === countrySlug)
                        pais.parques.forEach(parque => {
                            //if (parque.slug === parkSlug) 
                                //routes = parque.rutas;
                        });
                });
                observer.next(routes);
            } catch (reason) {
                observer.next(null);
            }
			observer.complete();
		});	
    }
    

    public getRouteDetail(countrySlug:string, parkSlug:string, routeSlug:string):Observable<Route>{
		return Observable.create(async (observer) => {
            try {
                let paises:Country[] = await this.storage.retrieve('paises');
                let route:Route = null;
                paises.forEach(pais => {
                    if (pais.slug === countrySlug)
                        pais.parques.forEach(parque => {
                            //if (parque.slug === parkSlug)
                                /*parque.rutas.forEach(ruta => {
                                    if (ruta.slug === routeSlug)
                                        route = ruta;
                                });*/
                        });
                });
                observer.next(route);
            } catch (reason) {
                observer.next(null);
            }
			observer.complete();
		});	
	}
}
