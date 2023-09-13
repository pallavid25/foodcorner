import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../shared/modules/Tag';
import { FoodserviceService } from '../service/food/foodservice.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit{
  @Input()
  foodPagetags?:string[];
  @Input()
  justifyContent:string='center';
tags:Tag[]=[];
constructor(private fs:FoodserviceService){

}
ngOnInit(): void {
  if(!this.foodPagetags)
  this.tags=this.fs.getAllTag();
}
}
