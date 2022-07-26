import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css'],
})
export class RequestListComponent implements OnInit {
  requests: any;
  constructor(private requestService: RequestsService) {}

  ngOnInit(): void {
    this.getAllRequests();
  }

  // fetch all the requests
  getAllRequests() {
    this.requestService.getRequests().subscribe((data) => {
      console.log(data);
      this.requests = data;
      this.requests = this.requests.requests;
    });
  }
}
