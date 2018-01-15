/**
 * Global dependencies
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

/**
 * Local dependencies
 */
import { ApiModule } from '../../@api';
import { ServicesModule } from '../../@services';
import { ComponentsModule } from '../../@components';

/**
 * Pages dependencies
 */
import { HomePage } from './home.page';

@NgModule({
    declarations: [HomePage],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(HomePage),
        ServicesModule,
        ApiModule,
        IonicStorageModule.forRoot({
			name: '__trekking-db',
			driverOrder: ['indexeddb', 'sqlite', 'websql']
		})
    ],
    entryComponents: [HomePage],
    exports: [HomePage]
})
export class HomePageModule { }