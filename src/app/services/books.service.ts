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

  getRandomBook() {
    return this.http.get(
      'https://react-project-humber.herokuapp.com/books/random'
    );
  }

  getBookbySearch(searchTerm: string) {
    return this.http.get(
      `https://react-project-humber.herokuapp.com/books/search/${searchTerm}`
    );
  }

  // add a new book
  addBook(book: any) {
    return this.http.post(
      'https://react-project-humber.herokuapp.com/books/new',
      book
    );
  }

  // get a single book
  getBook(id: string) {
    return this.http.get(
      `https://react-project-humber.herokuapp.com/books/${id}`
    );
  }

  // update rating
  updateRating(data: any) {
    return this.http.post(
      `https://react-project-humber.herokuapp.com/books/update-rating`,
      data
    );
  }

  // update timesread
  updateTimesRead(data: any) {
    return this.http.post(
      `https://react-project-humber.herokuapp.com/books/update-timesread`,
      data
    );
  }
}
