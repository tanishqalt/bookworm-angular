import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-picker',
  templateUrl: './book-picker.component.html',
  styleUrls: ['./book-picker.component.css'],
})
export class BookPickerComponent implements OnInit {
  book: any;

  constructor(private bookService: BooksService) {}

  ngOnInit(): void {
    this.getRandomBook();
  }

  // get the random book
  getRandomBook() {
    this.bookService.getRandomBook().subscribe((data) => {
      console.log('GET RANDOM BOOK', data);
      this.book = data;
      this.book = this.book.randomBook;
    });
  }
}
