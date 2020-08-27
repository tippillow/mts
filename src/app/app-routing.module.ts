import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PathConfig} from './config/routing/path.config';
import {AuthGuard} from './guards/auth/auth.guard';

const routes: Routes = [
    {
        path: PathConfig.AUTH,
        loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule),
    },
    {
        path: '',
        pathMatch: 'full',
        canActivate: [AuthGuard],
        children: [
            {
                path: PathConfig.MAIN,
                pathMatch: 'full',
                loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule),
            },
        ],
    },
    {
        path: PathConfig.ANY,
        redirectTo: PathConfig.AUTH,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        useHash: false,
        relativeLinkResolution: 'corrected'
    })],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
