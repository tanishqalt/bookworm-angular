import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { BooksService } from '../../../services/books.service';
@Component({
  selector: 'app-book-browser',
  templateUrl: './book-browser.component.html',
  styleUrls: ['./book-browser.component.css'],
})
export class BookBrowserComponent implements OnInit {
  // create a variable to store books
  books: any;
  searchTerm: string = '';

  constructor(private bookService: BooksService) {
    // async call to get books

    this.bookService.getTrendingBooks().subscribe((data) => {
      this.books = data;
      this.books = this.books.books;
    });
  }

  ngOnInit(): void {}

  // onSearchCahnge
  onSearchChange(searchTerm: any) {
    this.searchTerm = searchTerm.value;
    console.log('searchTerm', this.searchTerm);

    // if empty search term
    if (this.searchTerm.length < 2) {
      console.log('searchTerm', this.searchTerm);
      this.bookService.getTrendingBooks().subscribe((data) => {
        this.books = data;
        this.books = this.books.books;
      });
    } else {
      // call the search book function

      this.bookService.getBookbySearch(this.searchTerm).subscribe((data) => {
        this.books = data;
        this.books = this.books.books;
      });
    }
  }
}
