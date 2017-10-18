/**
 * Park General Interface
 */
export interface Park {
    slug:string;
    name:string;
    description:string;
    location:string;
    img:string;
    routes:any[];
    sleep:any[];
    lock?:boolean;
};