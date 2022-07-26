import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-reading-radar',
  templateUrl: './reading-radar.component.html',
  styleUrls: ['./reading-radar.component.css'],
})
export class ReadingRadarComponent implements OnInit {
  books: any;

  constructor(private bookService: BooksService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getTrendingBooks().subscribe((data) => {
      console.log('GET BOOKS', data);
      this.books = data;
      this.books = this.books.books;
    });
  }
}
