import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {

  books: any;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }


  ngOnInit() {
      this.http.get('http://localhost:3000/book').subscribe(data => { 
      this.books = data;
    });
  }


  deleteBook(id) {
    if(confirm('Are you sure to delete the selected book?')){
    this.http.delete('http://localhost:3000/book/'+id)
      .subscribe(res => {
          //this.router.navigate(['/books']);
        }, (err) => {
          console.log(err);
        }
      );

    location.reload();
  }      
}


}
