/**
 * Global dependencies
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

/**
 * Pages dependencies
 */
import { SearchPage } from './search.page';

@NgModule({
    declarations: [SearchPage],
    imports: [
        IonicPageModule.forChild(SearchPage)
    ],
    entryComponents: [SearchPage],
    exports: [SearchPage]
})
export class SearchPageModule { }