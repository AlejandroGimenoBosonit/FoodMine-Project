import { Component, OnInit } from '@angular/core';

import { Cart } from '../../../shared/models/Cart';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  // local variable Cart
  cart!: Cart;

  constructor(
    private cartService: CartService
  ) { 
    this.cartService
        .getCartObservable()
        .subscribe((cart: Cart) => this.cart = cart);
  }

  ngOnInit(): void {
  }

  // remove from cart
  removeFromCart(CartItem: CartItem) {
    // call to the service method to remove item from cart
    this.cartService.removeFromCart(CartItem.food.id);
  }

  // change qty
  changeQuantity(cartItem: CartItem, quantity: string) {
    // convert quantity to integer
    const qty = parseInt(quantity);
    // call service method
    this.cartService.changeQuantity(cartItem.food.id, qty);
  }
}
