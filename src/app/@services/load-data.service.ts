/**
 * Global dependencies
 */
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { PAISES } from '../@data';


@Injectable()
export class LoadDataService {
	constructor(private storage:StorageService) { }

    //-- General functions
    public async toStorage():Promise<any>{
        try {
            let response = await this.storage.retrieve('paises');
            if (response != null || response != undefined) return response;
            //-- Save data
            await this.storage.create('paises', PAISES);
            return await this.storage.retrieve('paises');
        } catch (reason) {
            console.log("An error ocurred :: (details) ", reason);
            return false;
        }
    }
}
