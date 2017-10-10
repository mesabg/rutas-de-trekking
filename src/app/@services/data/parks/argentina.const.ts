/**
 * Local dependencies
 */
import { Park } from '../../../#interfaces';

export const HEADER:{img:string, title:string} = {
    img: 'assets/images/park.jpg',
    title: 'Administración de parques nacionales, Argentina'
};

export const PARKS:Park[] = [
    {
        name: 'El Chaltén',
        location: 'Parque Nacional Los Glaciares, Zona Viedma'
    },
    {
        name: 'El Calafate (PRÓXIMAMENTE)',
        location: 'Parque Nacional Los Glaciares',
        lock: true
    },
    {
        name: 'Los Antiguos (PRÓXIMAMENTE)',
        location: 'Parque Nacional Patagonia',
        lock: true
    },
    {
        name: 'Bariloche (PRÓXIMAMENTE)',
        location: 'Parque Nacional Nahuel Huapí',
        lock: true
    },
    {
        name: 'El Bolsón (PRÓXIMAMENTE)',
        location: 'Parque Nacional Nahuel Huapí',
        lock: true
    }
];