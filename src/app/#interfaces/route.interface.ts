/**
 * Route interface
 */
export interface Route {
    slug:string;
    nombre:string;
    descripcion:string;
    duracion:string;
    distancia:number;
    altura:number;
    puntos:{
        lat:number;
        lng:number;
    }[];
};