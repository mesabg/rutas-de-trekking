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
import { ParkInfoPageModule } from './@pages/park/info/info.page.module';


@NgModule({
	declarations: [
		Layout
	],
	imports: [
		BrowserModule,
		ParkInfoPageModule,
		IonicModule.forRoot(Layout),
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
