import { Component, OnInit } from '@angular/core';
import { Foods } from '../shared/modules/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodserviceService } from '../service/food/foodservice.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {
 food!:Foods;
  constructor(private activatedroute:ActivatedRoute,private foodService:FoodserviceService,private cartService:CartService,private router:Router){
    activatedroute.params.subscribe((params)=>{
      if(params['id'])
      this.food=foodService.getFoodById(params['id']);
    })
  }
ngOnInit(): void {
  
}
addToCart(){
  this.cartService.addToCart(this.food);
  this.router.navigateByUrl('/cart-page');
}
}
