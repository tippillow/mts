import {Component, OnInit} from '@angular/core';
import {IAuthData} from '../../interfaces/auth-data';
import {AuthService} from '../../services/auth/auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

    constructor(private authService: AuthService) {
    }

    ngOnInit(): void {
    }

    public login(formData: IAuthData): void {
        this.authService.getToken(formData);
    }

}
