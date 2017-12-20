/**
 * Global dependencies
 */
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/**
 * Local dependencies
 */
import { Layout } from './layout';
import { ParkSyncModule } from './@pages/park';
import { ServicesModule, LoadDataService } from './@services';


@NgModule({
	declarations: [
		Layout
	],
	imports: [
		BrowserModule,
		ParkSyncModule,
		ServicesModule,
		IonicModule.forRoot(Layout)
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
export class AppModule {
	constructor(private loadData:LoadDataService){
		this.loadData.toStorage().then(data => {
			console.log("Everything stored :: ", data);
		});
	}
}
