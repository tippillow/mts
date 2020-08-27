import {Injectable} from '@angular/core';
import {BehaviorSubject, from, Observable} from 'rxjs';
import {IUser} from '../../interfaces/user';
import {getSource} from '../../backend/backend';
import {tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MainService {

    private _usersList$ = new BehaviorSubject<IUser[]>(null);

    constructor() {
    }

    public get usersList$(): Observable<IUser[]> {
        return this._usersList$.asObservable();
    }

    public getUsers(): void {
        from(getSource()).pipe(
            tap((users: IUser[]) => this._usersList$.next(users)),
        ).subscribe();
    }
}
