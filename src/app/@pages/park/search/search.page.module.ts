/**
 * Global dependencies
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

/**
 * Pages dependencies
 */
import { ParkSearchPage } from './search.page';

@NgModule({
    declarations: [ParkSearchPage],
    imports: [
        IonicPageModule
    ],
    entryComponents: [ParkSearchPage],
    exports: [ParkSearchPage]
})
export class ParkSearchPageModule { }