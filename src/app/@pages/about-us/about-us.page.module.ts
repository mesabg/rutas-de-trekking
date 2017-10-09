/**
 * Global dependencies
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

/**
 * Pages dependencies
 */
import { AboutUsPage } from './about-us.page';

@NgModule({
    declarations: [AboutUsPage],
    imports: [
        IonicPageModule.forChild(AboutUsPage)
    ],
    entryComponents: [AboutUsPage],
    exports: [AboutUsPage]
})
export class AboutUsPageModule { }