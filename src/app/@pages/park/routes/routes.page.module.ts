/**
 * Global dependencies
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

/**
 * Pages dependencies
 */
import { ParkRoutesPage } from './routes.page';

@NgModule({
    declarations: [ParkRoutesPage],
    imports: [
        IonicPageModule
    ],
    entryComponents: [ParkRoutesPage],
    exports: [ParkRoutesPage]
})
export class ParkRoutesPageModule { }