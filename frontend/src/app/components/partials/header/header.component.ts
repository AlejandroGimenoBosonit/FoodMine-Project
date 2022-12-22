import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { User } from 'src/app/shared/models/User';
import { CartService } from '../../../services/cart.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartQty: number = 0;
  user!: User;
  
  constructor(
    private cartService: CartService,
    private userService: UserService 
  ) {
    this.cartService
    .getCartObservable()
    .subscribe((newCart)=>{
      this.cartQty = newCart.totalCount;
    });

    this.userService.userObservable.subscribe((newUser) => {
      console.log(newUser);
      
      this.user = newUser;
    });
  }

  ngOnInit(): void {
  }

  logout() {
    this.userService.logout();
  }
}