import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css'],
})
export class SingleBookComponent implements OnInit {
  book: any;

  constructor(
    private route: ActivatedRoute,
    private bookService: BooksService,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params['id']);
      this.getBook(params['id']);
    });
  }

  // function get a book using the id
  getBook(id: string) {
    this.bookService.getBook(id).subscribe((data) => {
      console.log(data);
      this.book = data;
      this.book = this.book.book;
    });
  }

  // add to reading list
  addToReadingList() {
    const dataObject = {
      book: this.book,
      username: localStorage.getItem('username'),
    };
    this.userService.addToReadingList(dataObject).subscribe((data) => {
      console.log(data);
      alert('Book added to reading list');
    });
  }
}
