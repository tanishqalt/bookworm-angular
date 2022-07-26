import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent implements OnInit {
  books: any;

  // new bookform
  bookForm = this.formBuilder.group({
    title: '',
    author: '',
    description: '',
    isbn: '',
    timesRead: 0,
    ratings: [],
  });

  constructor(
    private bookService: BooksService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getBooks();
  }

  // get all books
  getBooks() {
    this.bookService.getTrendingBooks().subscribe((data) => {
      console.log(data);
      this.books = data;
      this.books = this.books.books;
    });
  }

  // on submit
  onSubmit() {
    console.log(this.bookForm.value);
    this.bookService.addBook(this.bookForm.value).subscribe((data) => {
      console.log(data);
      this.getBooks();

      // clear the form
      this.bookForm.reset();
    });
  }
}
