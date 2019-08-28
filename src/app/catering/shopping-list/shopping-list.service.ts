import {Ingredient} from '../../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
    addIngredients2(ingredients2: Ingredient[]) {
        throw new Error("Method not implemented.");
    }
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients:Ingredient[]=[
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes',10)
      ];
      private ingredients2:Ingredient[]=[
        new Ingredient('Orange',6),
        new Ingredient('Potato',11)
      ];
    getIngredients(){
        return this.ingredients.slice();
    }
    getIngredients2(){
        return this.ingredients2.slice();
    }
    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
    addIngredient2(ingredients2: Ingredient){
        this.ingredients.push(ingredients2);
        this.ingredientsChanged.emit(this.ingredients2.slice());
    }
    addIngredients(ingredients: Ingredient[]){
        // for(let ingredient of ingredients){
        //     this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}
