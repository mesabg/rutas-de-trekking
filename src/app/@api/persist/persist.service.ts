/**
 * Global dependencies
 */
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';


@Injectable()
export class PersistsService {
	constructor(private storage:Storage) { }

    public persist(key:string, value:any):void{
        this.storage.set(key, value);
    }

    public retrieve(key:string):void{
        return Observable.create(observer => {
            this.storage.get(key)
            .then((value) => {
                observer.next(value);
            })
            .catch((error) => {
                throw error;
            });
			observer.complete();
		});	
    }
}
