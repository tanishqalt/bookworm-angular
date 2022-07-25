import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
})
export class RegisterUserComponent implements OnInit {
  constructor(
    private userService: UsersService,
    private formBuilder: FormBuilder
  ) {}

  registerForm = this.formBuilder.group({
    username: '',
    password: '',
    email: '',
  });

  ngOnInit(): void {}

  // register user
  registerUser() {
    console.log('register user form', this.registerForm.value);
    this.userService.register(this.registerForm.value).subscribe((data) => {
      console.log('REGISTER USER', data);
    });
    // reset the form
    this.registerForm.reset();
  }

  response: any;

  // on submit
  onSubmit() {
    console.log('register user form', this.registerForm.value);
    this.userService.register(this.registerForm.value).subscribe((data) => {
      console.log('REGISTER USER', data);
      this.response = data;

      // if the response is success
      if (this.response.success) {
        // redirect to login page
        alert('You have successfully registered!');
        window.location.href = '/user/login';
      }
    });
    // reset the form
    this.registerForm.reset();
  }
}
