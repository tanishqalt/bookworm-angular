import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import { UsersService } from 'src/app/services/users.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css'],
})
export class SingleBookComponent implements OnInit {
  book: any;
  id: string = '';

  // new form for rating
  ratingForm = this.formBuilder.group({
    rating: 1,
    username: localStorage.getItem('username'),
  });

  constructor(
    private route: ActivatedRoute,
    private bookService: BooksService,
    private userService: UsersService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params['id']);
      this.id = params['id'];
      this.getBook(params['id']);
    });
  }

  // function get a book using the id
  getBook(id: string) {
    this.bookService.getBook(id).subscribe((data) => {
      console.log(data);
      this.book = data;
      this.book = this.book.book;

      // update times read
      this.updateTimesRead();
    });
  }

  updateTimesRead() {
    const dataObject = {
      id: this.id,
    };
    this.bookService.updateTimesRead(dataObject).subscribe((data) => {
      console.log('TIMESREAD', data);
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

  updateRating() {
    const dataObject = {
      id: this.id,
      rating: {
        rating: this.ratingForm.value.rating,
        username: localStorage.getItem('username'),
      },
    };

    console.log(dataObject);

    this.bookService.updateRating(dataObject).subscribe((data) => {
      console.log(data);
      alert('Rating updated');
      this.getBook(this.id);
    });
  }
}
