/**
 * Global dependencies
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServicesModule } from '../../@services';

/**
 * Pages dependencies
 */
import { ConfigurationPage } from './configuration.page';

@NgModule({
    declarations: [ConfigurationPage],
    imports: [
        IonicPageModule.forChild(ConfigurationPage),
        ServicesModule
    ],
    entryComponents: [ConfigurationPage],
    exports: [ConfigurationPage]
})
export class ConfigurationPageModule {}