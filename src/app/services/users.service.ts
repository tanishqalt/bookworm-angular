import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interface/user';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  // a function for user login
  login(user: User) {
    return this.http.post(
      'https://react-project-humber.herokuapp.com/user/login',
      user
    );
  }

  // a function to register a new user
  register(user: User) {
    return this.http.post(
      'https://react-project-humber.herokuapp.com/user/register',
      user
    );
  }
}
