import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {

  books: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
     // this.http.get('localhost:3000/book').subscribe( data => {
      this.http.get('http://localhost:3000/book').subscribe(data => { 
      this.books = data;
      console.log('ng on init called from component !');
      console.log(this.books);
    });
  }

}
