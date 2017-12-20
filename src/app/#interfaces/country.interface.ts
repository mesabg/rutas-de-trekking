import { Park } from './park.interface';

/**
 * Country interface
 */
export interface Country {
    slug:string;
    nombre:string;
    titulo:string;
    img:string;
    logo:string;
    parques:Park[];
};