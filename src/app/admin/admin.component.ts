import { Component } from '@angular/core';
import { BookModel } from '../Models/BookModel';
import { BookService } from 'src/Service/BookService';
import { FormBuilder, FormGroup, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  books: BookModel[] = [];
  searchText:string = ''
  searchInput:string = ''
  formTitle:string = "Create/Edit book";
  form: FormGroup

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
  constructor(private bookService: BookService, builder: FormBuilder){
    this.form = builder.group({
      id:'',
      title:'',
      author:'',
      genre:'',
      description:'',
      publishingYear:'',
      numberInStock:'',
      img:''
    })
  }

  ngOnInit():void{
    this.getAllBooks()
  }

  reset(){
    this.form.reset()
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
  getAllBooks(){
    this.bookService.getAllBooks().subscribe(Response => {
      this.books = Response.result
    })
  }
  deleteBook(id:string){
    this.bookService.deleteBook(id).subscribe( Response => {
      this.getAllBooks
    })
  }
  updateBook(book:BookModel){
      this.bookService.updateBook(this.book).subscribe(Response => {
        this.getAllBooks()
      })
  }
  populateForm(book:BookModel){
    this.book = book
  }
}
