import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  user: any;

  // new form builder
  updateUserBioForm = this.formBuilder.group({
    username: localStorage.getItem('username'),
    bio: '',
  });

  constructor(
    private userService: UsersService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.fetchUser();
  }

  // call the fetchUser function from the user service
  fetchUser() {
    this.userService.fetchUser().subscribe((data) => {
      console.log('FETCH USER', data);
      this.user = data;
      this.user = this.user.user;
    });
  }

  onSubmit() {
    console.log('update user bio form', this.updateUserBioForm.value);
    this.userService
      .updateUserBio(this.updateUserBioForm.value)
      .subscribe((data) => {
        console.log('UPDATE USER BIO', data);
        this.fetchUser();
      });
    // reset the form
    this.updateUserBioForm.reset();
  }
}
