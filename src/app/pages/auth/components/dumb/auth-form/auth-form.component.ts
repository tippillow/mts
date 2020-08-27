import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-auth-form',
    templateUrl: './auth-form.component.html',
    styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {
    @Input() errorMessage: string;

    @Output() login: EventEmitter<any> = new EventEmitter<any>();

    public authForm: FormGroup;

    constructor() {
    }

    ngOnInit(): void {
        this.authForm = this.constructForm();
    }

    public signIn(): void {
        this.login.emit(this.authForm.value);
    }

    private constructForm(): FormGroup {
        return new FormGroup({
            username: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required]),
        });
    }

}
