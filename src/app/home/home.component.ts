import { Component,OnInit } from '@angular/core';
import { FoodserviceService } from '../service/food/foodservice.service';
import { Foods } from '../shared/modules/food';
import { StarRatingComponent } from 'dist/rating/components/star-rating/star-rating.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 foods:Foods[]=[];
 starRating=0;
  constructor(private fs:FoodserviceService,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      if(params['searchItem'])
      {
        this.foods=this.fs.getAll().filter(food=>food.name.toLowerCase().includes(params['searchItem'].toLowerCase()))
      }
      else if(params['tag']){
        this.foods=this.fs.getAllFoodByTag(params['tag'])
      }
      else
      this.foods=this.fs.getAll();
    })
  
 
}  

}
