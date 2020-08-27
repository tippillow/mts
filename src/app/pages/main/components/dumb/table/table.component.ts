import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../../../../interfaces/user';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
    @Input() usersList: IUser[];

    constructor() {
    }

    ngOnInit(): void {
    }

}
