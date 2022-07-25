import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  getTrendingBooks() {
    return this.http.get(
      'https://react-project-humber.herokuapp.com/books/trending'
    );
  }
}
