import {Component, OnInit} from '@angular/core';
import {MainService} from '../../services/main/main.service';
import {Observable} from 'rxjs';
import {IUser} from '../../interfaces/user';
import {AuthService} from '../../services/auth/auth.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    public _usersList$: Observable<IUser[]>;

    constructor(private mainService: MainService,
                private authService: AuthService) {
    }

    ngOnInit(): void {
        this._usersList$ = this.mainService.usersList$;
        this.mainService.getUsers();
    }

    public logout(): void {
        this.authService.logout();
    }

}
