/**
 * Global dependencies
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

/**
 * Pages dependencies
 */
import { ParkInfoPage } from './info.page';

@NgModule({
    declarations: [ParkInfoPage],
    imports: [
        IonicPageModule
    ],
    entryComponents: [ParkInfoPage],
    exports: [ParkInfoPage]
})
export class ParkInfoPageModule { }