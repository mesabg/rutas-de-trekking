/**
 * Route interface
 */
export interface Route {
    id:number;
    land_id:string;
    slug:string;
    nombre:string;
    descripcion:string;
    puntos:{
        lat:number;
        lng:number;
    }[];
    altura:number;
    distancia:number;
    duracion:string;
    visible:number;
    color:string;
    created_at:Date;
    updated_at:Date;
    img:string;
};