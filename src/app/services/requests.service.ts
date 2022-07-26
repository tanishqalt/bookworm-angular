import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RequestsService {
  constructor(private http: HttpClient) {}

  // a function to submit a request
  submitRequest(request: any) {
    return this.http.post(
      'https://react-project-humber.herokuapp.com/request/new',
      request
    );
  }

  // get all requests
  getRequests() {
    return this.http.get(
      'https://react-project-humber.herokuapp.com/request/all'
    );
  }
}
