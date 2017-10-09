/**
 * Global dependencies
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

/**
 * Pages dependencies
 */
import { ParkLodgmentPage } from './lodgment.page';

@NgModule({
    declarations: [ParkLodgmentPage],
    imports: [
        IonicPageModule
    ],
    entryComponents: [ParkLodgmentPage],
    exports: [ParkLodgmentPage]
})
export class ParkLodgmentPageModule { }