/**
 * Global dependencies
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

/**
 * Local dependencies
 */
import { ApiModule } from '../../@api';

/**
 * Pages dependencies
 */
import { HomePage } from './home.page';

@NgModule({
    declarations: [HomePage],
    imports: [
        IonicPageModule.forChild(HomePage),
        ApiModule
    ],
    entryComponents: [HomePage],
    exports: [HomePage]
})
export class HomePageModule { }