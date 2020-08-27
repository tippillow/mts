import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main.component';
import {NgModule} from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MainRoutingModule {
}
