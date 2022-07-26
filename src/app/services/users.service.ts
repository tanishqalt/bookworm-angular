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
  register(user: any) {
    return this.http.post(
      'https://react-project-humber.herokuapp.com/user/register',
      user
    );
  }

  verify() {
    // get the token from local storage
    const token = localStorage.getItem('webtoken');
    console.log('token', token);

    const dataObject = {
      token: token,
    };

    return this.http.post(
      'https://react-project-humber.herokuapp.com/user/verify',
      dataObject
    );
  }

  // fetch user
  fetchUser() {
    return this.http.post(
      'https://react-project-humber.herokuapp.com/user/get-user',
      {
        username: localStorage.getItem('username'),
      }
    );
  }

  // update user
  updateUserBio(user: any) {
    return this.http.post(
      'https://react-project-humber.herokuapp.com/user/update-userbio',
      user
    );
  }

  // get all users
  getUsers() {
    return this.http.get(
      'https://react-project-humber.herokuapp.com/user/all-users'
    );
  }
}
