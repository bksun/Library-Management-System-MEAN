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
  priceClicked: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }


  ngOnInit() {
      this.http.get('http://localhost:3000/book').subscribe(data => { 
      this.books = data;
    });
  }

  sortByPrice(){ // clicking on Price header will sort the list by price
    this.priceClicked = !this.priceClicked;
    var sortAsc = (n1 , n2) =>  {console.log(n1); return n1.price - n2.price; }
    var sortDesc = (n1 , n2) =>  {console.log(n1); return n2.price - n1.price; }

    if(this.priceClicked){
      this.books.sort(sortAsc);
    }
    else{
      this.books.sort(sortDesc);  
    }
    console.log('SORTED');
  }
        
  deleteBook(id) {
    if(confirm('Are you sure to delete the selected book?')){
    this.http.delete('http://localhost:3000/book/'+id)
      .subscribe(res => {
         }, (err) => {
          console.log(err);
        }
      );

    location.reload();
  }      
}


}
