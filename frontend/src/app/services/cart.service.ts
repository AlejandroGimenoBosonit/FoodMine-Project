import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

// model
import { Food } from '../shared/models/Food';
import { CartItem } from '../shared/models/CartItem';
import { Cart } from '../shared/models/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // declare a local class cart instance of type cart(class)
  private cart: Cart = this.getCartFromLocalStorage();
  // Behaviour subject to is listening for any change with a default value
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart); 

  constructor() { }

  // methods

  addToCart(food: Food): void{
    // We need to isolate an ITEM from CART
    let cartItem = this.cart.items.find((item: CartItem)=> item.food.id === food.id);
    // if the product is in the cart then leave this function
    if(cartItem){
      return;
    }
    // otherwise add the product to the cart items array
    this.cart.items.push(new CartItem(food));
    // store to local storage
    this.setCartToLocalStorage();
  }

  // remove items from cart
  removeFromCart(id: string): void{
    this.cart.items = this.cart.items.filter((item: CartItem)=>item.food.id != id);
    // store to local storage
    this.setCartToLocalStorage();
  }

  // change quantity of an items
  changeQuantity(id: string, qty: number) {
    // isolate cart items
    let cartItem = this.cart.items.find((item: CartItem)=>item.food.id === id);
    // If there is not the product then leave
    if(!cartItem) return;
    // otherwise define a quantity value
    cartItem.quantity = qty;
    // change price in function of the product quantity
    cartItem.price = qty * cartItem.food.price;

    // store to local storage
    this.setCartToLocalStorage();
  }

  // clear cart
  clearCart(): void {
    // simple new cart instance
    this.cart = new Cart();

    // store to local storage
    this.setCartToLocalStorage();
  }

  // obervable to cart element
  getCartObservable(): Observable<Cart>{
    // return an observable
    return this.cartSubject.asObservable();
  }


  /** private method: can only be accessed or called from the class instance itself **/

  // private function to store cart into local storage 
  private setCartToLocalStorage(): void{
    // add totalprice to sotre
    this.cart.totalPrice = this.cart.items.reduce((prevVal, crrtVal)=> prevVal+crrtVal.price, 0);

    this.cart.totalCount = this.cart.items.reduce((prevVal, crrtVal)=> prevVal+crrtVal.quantity, 0);
    
    // convert cart to string
    const cartJSON = JSON.stringify(this.cart);
    // store into localstorage 
    localStorage.setItem('Cart', cartJSON);
  
    // Subscribe to the SUBJECT to any change
    this.cartSubject.next(this.cart);
    
  }

  // get cart from local storage
  private getCartFromLocalStorage(): Cart {
    const cartJSON = localStorage.getItem('Cart');
    return cartJSON ? JSON.parse(cartJSON) : new Cart();
  }
}
