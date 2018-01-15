/**
 * Global dependencies
 */
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

/**
 * Local dependencies
 */
import { Layout } from './layout';
import { ParkSyncModule } from './@pages/park';
import { ServicesModule } from './@services';
import { ApiModule } from './@api';


@NgModule({
	declarations: [
		Layout
	],
	imports: [
		BrowserModule,
		ParkSyncModule,
		ServicesModule,
		ApiModule,
		IonicModule.forRoot(Layout),
		IonicStorageModule.forRoot({
			name: '__trekking-db',
			driverOrder: ['indexeddb', 'sqlite', 'websql']
		})
	],
	bootstrap: [IonicApp],
	entryComponents: [
		Layout
	],
	providers: [
		StatusBar,
		SplashScreen,
		{provide: ErrorHandler, useClass: IonicErrorHandler}
	]
})
export class AppModule {}
