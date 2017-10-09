/**
 * Global dependencies
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

/**
 * Pages dependencies
 */
import { WeatherPage } from './weather.page';

@NgModule({
    declarations: [WeatherPage],
    imports: [
        IonicPageModule.forChild(WeatherPage)
    ],
    entryComponents: [WeatherPage],
    exports: [WeatherPage]
})
export class WeatherPageModule { }