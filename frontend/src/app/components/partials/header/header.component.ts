import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartQty: number = 0;

  constructor(
    private cartService: CartService
  ) {
    cartService
    .getCartObservable()
    .subscribe((newCart)=>{
      this.cartQty = newCart.totalCount;
    })
  }

  ngOnInit(): void {
  }

}