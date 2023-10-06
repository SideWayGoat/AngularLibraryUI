import { HttpClient } from "@angular/common/http";
import { BookModel } from "src/app/Models/BookModel";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class BookService{
    baseUrl = 'https://localhost:7197/book/all'
    searchUrl = 'https://localhost:7197/book/search/'
    deleteUrl = 'https://localhost:7197/book/delete/'
    updateUrl = 'https://localhost:7197/book/update/'
    postUrl = 'https://localhost:7197/book/create'
    constructor(private http:HttpClient){

    }

    getAllBooks():Observable<any>{
        return this.http.get<any[]>(this.baseUrl)
    }

    searchOptions(query:string):Observable<any>{
        return this.http.get<BookModel>(this.searchUrl + query)
    }
    deleteBook(id:string):Observable<BookModel>{
        return this.http.delete<BookModel>(this.deleteUrl + id)
    }
    updateBook(book:BookModel):Observable<BookModel>{
        return this.http.put<BookModel>(this.updateUrl + book.id, book)
    }
    addBook(Book:BookModel):Observable<BookModel>{
        Book.id = ''
        return this.http.post<BookModel>(this.postUrl, Book)
    }
}

