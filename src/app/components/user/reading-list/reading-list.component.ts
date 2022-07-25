import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.css'],
})
export class ReadingListComponent implements OnInit {
  user: any;

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.fetchUser();
  }

  // fetch user
  fetchUser() {
    this.userService.fetchUser().subscribe((data) => {
      console.log('GET USER', data);
      this.user = data;
      this.user = this.user.user;
    });
  }
}
