import {Injectable} from '@angular/core';
import {login} from '../../backend/backend';
import {IAuthData} from '../../interfaces/auth-data';
import {BehaviorSubject, from, Observable, of} from 'rxjs';
import {switchMap, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {PathConfig} from '../../config/routing/path.config';

const errorMessage = 'Неверное имя пользователя или пароль';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _errorMessage$ = new BehaviorSubject<string>(null);

    constructor(private router: Router) {
    }

    public get token(): string | null {
        return localStorage.getItem('token');
    }

    public get errorMessage$(): Observable<string> {
        return this._errorMessage$.asObservable();
    }

    public getToken(formData: IAuthData): void {
        from(login(formData.username, formData.password)).pipe(
            switchMap((token: { token: string } | undefined) => {
                if (token) {
                    return of(token);
                } else {
                    this._errorMessage$.next(errorMessage);
                    throw new Error(errorMessage);
                }
            }),
            tap((token: { token: string } | undefined) => {
                localStorage.setItem('token', token.token);
                this._errorMessage$.next(null);
            }),
        ).subscribe(() => this.router.navigate([PathConfig.MAIN]));
    }

    public logout(): void {
        localStorage.clear();
        this.router.navigate([PathConfig.AUTH]);
    }
}
