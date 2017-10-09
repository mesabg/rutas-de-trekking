/**
 * Global dependencies
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

/**
 * Pages dependencies
 */
import { ConfigurationPage } from './configuration.page';

@NgModule({
    declarations: [ConfigurationPage],
    imports: [
        IonicPageModule.forChild(ConfigurationPage)
    ],
    entryComponents: [ConfigurationPage],
    exports: [ConfigurationPage]
})
export class ConfigurationPageModule { }