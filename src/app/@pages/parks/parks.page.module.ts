/**
 * Global dependencies
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApiModule } from '../../@api';

/**
 * Pages dependencies
 */
import { ParksPage } from './parks.page';

@NgModule({
    declarations: [ParksPage],
    imports: [
        ApiModule,
        IonicPageModule.forChild(ParksPage)
    ],
    entryComponents: [ParksPage],
    exports: [ParksPage]
})
export class ParksPageModule { }