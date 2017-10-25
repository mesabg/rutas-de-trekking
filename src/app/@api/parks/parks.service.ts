/**
 * Global dependencies
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


/**
 * Local dependencies
 */
import { PersistsService } from '../persist';
import { Park } from '../../#interfaces';
import {
	HEADER as HEADER_ARGENTINA, 
	PARKS as PARKS_ARGENTINA } from './argentina.const';

import { 
	HEADER as HEADER_CHILE,
	PARKS as PARKS_CHILE } from './chile.const';


@Injectable()
export class ParksService {
	private headers:{[key:string]: {img:string, title:string}} = {
		argentina: HEADER_ARGENTINA,
		chile: HEADER_CHILE
	};

	private parks:{[key:string]: Park[]} = {
		argentina: PARKS_ARGENTINA,
		chile: PARKS_CHILE
	};

	constructor(private storage:PersistsService) { }

	public getParksInformation(country:string):Observable<Park[]>{
		return Observable.create(observer => {
			this.storage.persist(`country.${country}`, this.parks[country]);
			observer.next(this.parks[country]);
			observer.complete();
		});	
	}

	public getActualPark(country:string, parkSlug:string):Observable<Park>{
		return Observable.create(observer => {
			this.parks[country].forEach((park:Park, index:number) => {
				if (park.slug === parkSlug){
					this.storage.persist(`park.${park.slug}`, park);
					observer.next(park);
					observer.complete();
				}
			});
			observer.next(undefined);
			observer.complete();
		});	
	}

	public getHeader(country:string):Observable<{img:string, title:string}>{
		return Observable.create(observer => {
			observer.next(this.headers[country]);
			observer.complete();
		});
	}
}
