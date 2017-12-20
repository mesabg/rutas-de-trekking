/**
 * Global dependencies
 */
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable()
export class StorageService {
	constructor(private storage:Storage) { }

    public async create(key:string, value:any):Promise<any>{
        return await this.storage.set(key, value);
    }

    public async retrieve(key:string):Promise<any>{
        return await this.storage.get(key);
    }
}
