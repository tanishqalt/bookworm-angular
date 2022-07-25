import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-open-nav-bar',
  templateUrl: './open-nav-bar.component.html',
  styleUrls: ['./open-nav-bar.component.css'],
})
export class OpenNavBarComponent implements OnInit {
  constructor(private userService: UsersService) {}

  // variable
  isLoggedIn: boolean = false;
  // response variable
  response: any;

  ngOnInit(): void {
    this.userService.verify().subscribe((data) => {
      console.log('VERIFY', data);
      this.response = data;
      if (this.response.success) {
        this.isLoggedIn = true;
      }
    });
  }

  // call the verify function from the user service
}
