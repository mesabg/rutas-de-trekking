/**
 * Global dependencies
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

/**
 * Pages dependencies
 */
import { ParkApnPage } from './apn.page';

@NgModule({
    declarations: [ParkApnPage],
    imports: [
        IonicPageModule
    ],
    entryComponents: [ParkApnPage],
    exports: [ParkApnPage]
})
export class ParkApnPageModule { }