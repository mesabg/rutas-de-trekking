/**
 * Global dependencies
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServicesModule } from '../../@services';

/**
 * Pages dependencies
 */
import { ParksPage } from './parks.page';

@NgModule({
    declarations: [ParksPage],
    imports: [
        ServicesModule,
        IonicPageModule.forChild(ParksPage)
    ],
    entryComponents: [ParksPage],
    exports: [ParksPage]
})
export class ParksPageModule { }