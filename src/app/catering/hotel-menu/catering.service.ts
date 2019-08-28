import {Catering} from './catering.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class CateringService{
    constructor(private slService:ShoppingListService){}
    cateringSelected = new EventEmitter<Catering>();
   
    
    
    private catering:Catering[] = [
        new Catering('Hotel Menu','','https://media-cdn.tripadvisor.com/media/photo-s/0c/15/75/e8/buffet-des-salades.jpg',[new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]),
        new Catering('Restaurant Menu','','https://s3-eu-central-1.amazonaws.com/lfsa-prod-01/Article/4272/original.jpg?1498629794',[new Ingredient('Buns', 2), new Ingredient('Meat', 1)])
        ];

    
    
    getCatering(){
        return this.catering.slice();
    }
    
    getCaterings(index: number){
        return this.catering[index];
    }
    addIngredientsToSoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
    addIngredientsToSoppingList2(ingredients2: Ingredient[]){
        this.slService.addIngredients2(ingredients2);
    }
}