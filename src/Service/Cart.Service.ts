import { Injectable } from "@angular/core";
import { BookModel } from "src/app/Models/BookModel";

@Injectable({
    providedIn:'root'
})

export class CartService{
    constructor(){}
    items: BookModel[] = [];

    addToCart(book:BookModel){
        this.items.push(book)
    }

    getItems(){
        return this.items
    }

    clearCart(){
        this.items = []
        return this.items;
    }
}