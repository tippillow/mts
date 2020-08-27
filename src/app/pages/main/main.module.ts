import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {MainRoutingModule} from './main-routing.module';
import { TableComponent } from './components/dumb/table/table.component';


@NgModule({
    declarations: [MainComponent, TableComponent],
    imports: [
        CommonModule,
        MainRoutingModule,
    ]
})
export class MainModule {
}
