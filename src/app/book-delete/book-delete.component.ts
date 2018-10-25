import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class BookDeleteComponent implements OnInit {

  book = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    if(confirm('Are you sure to delete this book?')){
    let id = this.route.snapshot.params['id'];

    this.http.delete('http://localhost:3000/book/'+id)
      .subscribe(res => {
         }, (err) => {
          console.log(err);
        }
      );
    }
  }

 // this.router.navigate(['/books']);        
}