import {Pipe, PipeTransform} from '@angular/core';
import {IUser} from '../../interfaces/user';

@Pipe({
    name: 'search',
})
export class SearchPipe implements PipeTransform {

    transform(value: IUser[], searchValue: string): unknown {
        console.log(value, searchValue);
        if (!searchValue) {
            return value;
        } else {
            return value.filter((user) => {
                return user.user.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
            });
        }
    }

}
