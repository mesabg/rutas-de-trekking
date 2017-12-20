import { Route } from './route.interface';

/**
 * Park General Interface
 */
export interface Park {
    slug:string;
    nombre:string;
    locacion:string;
    img:string;
    descripcion:string;
    rutas:Route[];
    lock?:boolean;
};