import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { BookModel } from './Models/BookModel'
import { CartService } from 'src/Service/Cart.Service'

export class ProductDetailsComponent implements OnInit{
    constructor(
        private route: ActivatedRoute,
        private cartService: CartService
    ){

    }
}

export class ProductDetailsComponent implements OnInit{
    addToCart(book:BookModel){
        this.cartService.addToCart(book)
        window.alert('Your product has been added to the cart')
    }
}