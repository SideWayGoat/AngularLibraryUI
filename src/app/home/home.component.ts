import { Component } from '@angular/core';
import { BookModel } from '../Models/BookModel';
import { BookService } from 'src/Service/BookService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})


export class HomeComponent {

  books: BookModel[] = [];
  searchText:string = ''
  searchInput:string = ''

  book: BookModel = {
    id:'',
    title:'',
    author:'',
    genre:'',
    description:'',
    publishingYear:'',
    numberInStock:'',
    img:''
  }
  constructor(private bookService: BookService){

  }

  ngOnInit():void{
    this.getAllBooks();
  }

  getAllBooks(){
    this.bookService.getAllBooks().subscribe(Response => {
      this.books = Response.result
    })
  }

}
