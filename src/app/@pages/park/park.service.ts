/**
 * Global imports
 */
import { Injectable } from '@angular/core';
import { Park } from '../../#interfaces';


/**
 * This service manages the inner data as a middleware
 */
@Injectable()
export class ParkService{
    private park:Park;

    constructor(){}


    public get():Park{
        return this.park;
    }

    public set(park:Park){
        this.park = park;
    }
};