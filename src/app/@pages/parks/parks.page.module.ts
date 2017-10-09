/**
 * Global dependencies
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

/**
 * Pages dependencies
 */
import { ParksPage } from './parks.page';

@NgModule({
    declarations: [ParksPage],
    imports: [
        IonicPageModule.forChild(ParksPage)
    ],
    entryComponents: [ParksPage],
    exports: [ParksPage]
})
export class ParksPageModule { }