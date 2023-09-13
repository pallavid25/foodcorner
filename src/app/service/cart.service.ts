import { Injectable } from '@angular/core';
import { Cart } from '../shared/modules/Cart';
import { Foods } from '../shared/modules/food';
import { CartItem } from '../shared/modules/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private cart:Cart=new Cart();
  addToCart(food:Foods):void{
    let cartItem= this.cart.item.find(item=>item.food.id===food.id)
    if(cartItem){
      this.changeQuantity(food.id,cartItem.quantity+1)
      return;
    }
    this.cart.item.push(new CartItem(food));
  }

  //remove cart
  removeFromCart(foodId:number):void{
    this.cart.item=this.cart.item.filter(item=>item.food.id !=foodId);
  }

  //change quantity
  changeQuantity(quantity:number,foodId:number){
    let cartItem=this.cart.item.find(item=>item.food.id===foodId);
    if(!cartItem) return;
    cartItem.quantity=quantity;
  }

  // get cart
  getCart():Cart{
    return this.cart;
  
  }
}
