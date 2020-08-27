import {Injectable} from '@angular/core';
import {login} from '../../backend/backend';
import {IAuthData} from '../../interfaces/auth-data';
import {from} from 'rxjs';
import {filter, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {PathConfig} from '../../config/routing/path.config';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private router: Router) {
    }

    public get token(): string | null {
        return localStorage.getItem('token');
    }

    public getToken(formData: IAuthData): void {
        from(login(formData.username, formData.password)).pipe(
            filter((token: { token: string } | undefined) => !!token),
            tap((token: { token: string } | undefined) => localStorage.setItem('token', token.token)),
        ).subscribe(() => this.router.navigate([PathConfig.MAIN]));
    }

    public logout(): void {
        localStorage.clear();
        this.router.navigate([PathConfig.AUTH]);
    }
}
