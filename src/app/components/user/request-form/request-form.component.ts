import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css'],
})
export class RequestFormComponent implements OnInit {
  constructor(
    private requestsService: RequestsService,
    private formBuilder: FormBuilder
  ) {}

  requestForm = this.formBuilder.group({
    bookTitle: '',
    bookAuthor: '',
  });

  response: any;

  submitRequest() {
    const request = {
      bookTitle: this.requestForm.value.bookTitle,
      bookAuthor: this.requestForm.value.bookAuthor,
      username: localStorage.getItem('username'),
    };

    console.log('request', request);

    // if empty, do not submit
    if (request.bookTitle === '' || request.bookAuthor === '') {
      return;
    }

    this.requestsService.submitRequest(request).subscribe((data) => {
      console.log(data);
      this.response = data;

      // if successful, clear the form
      if (this.response.success) {
        alert('Request submitted successfully!');
        this.requestForm.reset();
      }
    });
  }

  ngOnInit(): void {}
}
