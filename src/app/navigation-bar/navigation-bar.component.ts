import { Component } from '@angular/core';
import { BookService } from 'src/Service/BookService';
import { BookModel } from '../Models/BookModel';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {

  constructor(private bookService: BookService){

  }

  title = 'SUT Library';

  books: BookModel[] = [];
  searchText:string = ''
  searchInput:string = ''


  getAllBooks(){
    this.bookService.getAllBooks().subscribe(Response => {
      this.books = Response.result
    })
  }


  onSearch(query:string){
    this.bookService.searchOptions(query).subscribe( Response => {
      this.books = Response.result
    })
  }
}
