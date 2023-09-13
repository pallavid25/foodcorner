import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/modules/Cart';
import { CartService } from '../service/cart.service';
import { CartItem } from '../shared/modules/CartItem';
import { FoodserviceService } from '../service/food/foodservice.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!:Cart;
  constructor(private cartService:CartService){//after delete
    
    this.setCart();
  }
  ngOnInit(): void {
    
  }
  setCart(){
    this.cart=this.cartService.getCart();

  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem,quantityInstring:string){
    const quantity=parseInt(quantityInstring);
    this.cartService.changeQuantity(cartItem.food.id,quantity);
    this.setCart();
  }

}
