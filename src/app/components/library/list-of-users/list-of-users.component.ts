import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.css'],
})
export class ListOfUsersComponent implements OnInit {
  users: any;

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  // get all users

  getAllUsers() {
    this.userService.getUsers().subscribe((data) => {
      console.log(data);
      this.users = data;
      this.users = this.users.users;
    });
  }
}
