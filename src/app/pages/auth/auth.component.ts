import {Component, OnInit} from '@angular/core';
import {IAuthData} from '../../interfaces/auth-data';
import {AuthService} from '../../services/auth/auth.service';
import {Observable} from 'rxjs';
import {PathConfig} from '../../config/routing/path.config';
import {Router} from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
    public errorMessage$: Observable<string>;

    constructor(private authService: AuthService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.errorMessage$ = this.authService.errorMessage$;
        if (this.authService.token) {
            this.router.navigate([PathConfig.MAIN]);
        }
    }

    public login(formData: IAuthData): void {
        this.authService.getToken(formData);
    }

}
