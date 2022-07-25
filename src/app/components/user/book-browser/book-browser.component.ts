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

  constructor(private bookService: BooksService) {
    // async call to get books

    this.bookService.getTrendingBooks().subscribe((data) => {
      this.books = data;
      this.books = this.books.books;
    });
  }

  ngOnInit(): void {}
}

type Data = {
  books: Array<{
    id: number;
    title: string;
    author: string;
    description: string;
    ratings: Array<{
      username: string;
      rating: number;
    }>;
    timesRead: number;
  }>;
  success: boolean;
};
