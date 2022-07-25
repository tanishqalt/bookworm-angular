import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css'],
})
export class LoginUserComponent implements OnInit {
  errormessage = '';

  loginForm = this.formBuilder.group({
    username: '',
    password: '',
  });

  constructor(
    private userService: UsersService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    // this.login();
  }

  onSubmit(): void {
    // Process checkout data here

    console.warn('Login Form Submission', this.loginForm.value.username);

    // check if username and password are empty
    if (
      this.loginForm.value.username === '' ||
      this.loginForm.value.password === ''
    ) {
      alert('Please enter details');
      return;
    }

    // call login function
    this.login();
  }

  // a function that calls the login from UserService

  login() {
    // get username
    const username = this.loginForm.value.username || '';
    // get password
    const password = this.loginForm.value.password || '';

    var user = {
      username: username,
      password: password,
    };

    var response: any;

    this.userService.login(user).subscribe((data) => {
      console.log(data);
      // if data.success if false
      response = data;
      if (response.success === false) {
        this.errormessage = response.message;
      } else {
        // if data.success is true
        // redirect to home page
        window.location.href = '/user/book-browser';
      }
    });
  }
}
