import { Injectable } from '@angular/core';
import { Tag } from 'src/app/shared/modules/Tag';
import { Foods } from 'src/app/shared/modules/food';
@Injectable({
  providedIn: 'root'
})
export class FoodserviceService {

  constructor() { }
getFoodById(id:number):Foods{
  return  this.getAll().find(food=>food.id==id)!;
}

  getAllFoodByTag(tag:string):Foods[]{
    if(tag=='All'){
      return this.getAll();
    }
    else{
      return this.getAll().filter(food=>food.tags?.includes(tag));
    }
  }

//all tag list
getAllTag():Tag[]{
  return[
    {name:'All',count:14},
    {name:'fastfood',count:3},
    {name:'pizaa',count:2},
    {name:'lunch',count:3},
    {name:'slowfood',count:1},
    {name:'hamburger',count:1},
    {name:'fry',count:2},
    {name:'soup',count:1},
  ]
}

  getAll():Foods[]{
    return [
      {
        id:1,
        name:'biryani',
        price:250,
        cookTime:'10-15',
        favorite:false,
        origins:['Indian'],
        star:4,
        imageUrl:'/assets/food1.jpg',
        tags:['lunch','Fastfood']
      },
      {
        id:2,
        name:'pizaa',
        price:50,
        cookTime:'10-15',
        favorite:true,
        origins:['Italy'],
        star:3,
        imageUrl:'/assets/food2.jpg',
        tags:['pizaa',' lunch']
      },
      {
        id:3,
        name:'pizaa',
        price:51,
        cookTime:'10-15',
        favorite:false,
        origins:['Italy'],
        star:2,
        imageUrl:'/assets/food3.jpg',
        tags:['pizaa','hamburger','lunch']
      },
      {
        id:4,
        name:'pizaa',
        price:20,
        cookTime:'10-15',
        favorite:true,
        origins:['Italy'],
        star:4,
        imageUrl:'/assets/food4.jpg',
        tags:['pizaa','slowfood']
      },
      {
        id:5,
        name:'south sudanese',
        price:30,
        cookTime:'10-15',
        favorite:true,
        origins:['South Indian'],
        star:4,
        imageUrl:'/assets/food5.jpg',
        tags:['slowFood','soup']
      },
      {
        id:6,
        name:'burger',
        price:20,
        cookTime:'20-35',
        favorite:true,
        origins:['Indian'],
        star:4,
        imageUrl:'/assets/f6.jpg',
        tags:['fastfood','humburger']
      },
      {
        id:7,
        name:'meat ball',
        price:50,
        cookTime:'30-45',
        favorite:true,
        origins:['Chin'],
        star:4,
        imageUrl:'/assets/f8.jpg',
        tags:['fry','fastfood']
      },
      {
        id:8,
        name:'sandwitch',
        price:30,
        cookTime:'10-15',
        favorite:false,
        origins:['Indian'],
        star:4,
        imageUrl:'/assets/f9.jpg',
        tags:['fastfood','fry']
      }

    ];
  }
}
