/**
 * Global dependencies
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

/**
 * Pages dependencies
 */
import { FeedbackPage } from './feedback.page';

@NgModule({
    declarations: [FeedbackPage],
    imports: [
        IonicPageModule.forChild(FeedbackPage)
    ],
    entryComponents: [FeedbackPage],
    exports: [FeedbackPage]
})
export class FeedbackPageModule { }