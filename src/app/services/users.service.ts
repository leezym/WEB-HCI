import { Injectable } from '@angular/core';
import { USERS } from '../mocks/users';
import { User } from '../classes/user';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  searchUserLogin(user: User): Observable<User> {
    let newUser: User = USERS.find(x => x.username === user.username && x.password === user.password );
    return of(newUser);
  }
}
