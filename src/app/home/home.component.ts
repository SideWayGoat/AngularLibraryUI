import { Component } from '@angular/core';
import { BookModel } from '../Models/BookModel';
import { BookService } from 'src/Service/BookService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})


export class HomeComponent {

  title = 'SUT Library';

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

  onSubmit(){
    if(this.book.id == ''){
      this.bookService.addBook(this.book).subscribe(response => {
        this.getAllBooks()
        this.book = {
          id:'',
          title:'',
          author:'',
          genre:'',
          description:'',
          publishingYear:'',
          numberInStock:'',
          img:''
        }
      })
    }
    else{
      this.updateBook(this.book)
    }
  }

  onSearch(query:string){
    this.bookService.searchOptions(query).subscribe( Response => {
      this.books = Response.result
    })
  }
  deleteBook(id:string){
    this.bookService.deleteBook(id).subscribe( Response => {
      this.getAllBooks
    })
  }
  updateBook(book:BookModel){
    this.bookService.updateBook(book).subscribe(Response => {
      this.getAllBooks
    })
  }
}
