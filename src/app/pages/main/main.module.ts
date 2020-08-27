import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {MainRoutingModule} from './main-routing.module';
import {TableComponent} from './components/dumb/table/table.component';
import {SearchPipe} from '../../pipes/search/search.pipe';
import {FormsModule} from '@angular/forms';


@NgModule({
    declarations: [
        MainComponent,
        TableComponent,
        SearchPipe],
    imports: [
        CommonModule,
        MainRoutingModule,
        FormsModule,
    ]
})
export class MainModule {
}
