import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { drinks } from './drinks.model';


@Injectable()
export class drinksService{
    drinksChanged = new Subject<drinks[]>();
    constructor(){}

    drinksSelected = new EventEmitter<drinks>();
    private drinks:drinks[] = [
        new drinks('TANGERINE MARTINI','../assets/images/Tangerine Martini.jpg','60.00')
        ,new drinks('PUMPKIN PIE','../assets/images/Pumpkin Pie Smoothie.jpg','70.00')
        ,new drinks('HIBISCUS MINT TEA','../assets/images/Hibiscus Mint Tea.jpg','50.00')
        ,new drinks('APPLE PIE CIDER','../assets/images/Apple Pie Cider.jpg','50.00')
        , new drinks('CRANBERRY SANGRIA','../assets/images/Cranberry Sangria.jpg','60.00')
        ,new drinks('LEMONADE','../assets/images/Lemonade.jpg','70.00')
        ,new drinks('LUSCIOUS SLUSH','../assets/images/Luscious Slush Punch.jpg','50.00')
        ,new drinks('CREAMY HOT COCOA','../assets/images/Creamy Hot Cocoa.jpg','50.00')
        , new drinks('BEER MARGARITAS','../assets/images/Beer Margaritas.jpg','60.00')
        ,new drinks('GROOVY GREEN','../assets/images/Groovy Green.jpg','70.00')
        ,new drinks('HOT APPLE CIDER','../assets/images/Hot Apple Cider.jpg','50.00')
        ,new drinks('BANANA SMOOTHIE','../assets/images/Banana Smoothie.jpg','50.00')
       
      ];
    setdrinks(drinks: drinks[]){
        this.drinks=drinks;
        this.drinksChanged.next(this.drinks.slice());
    }

    getdrink(){
        return this.drinks.slice();
    }
    getdrinks(index: number){
        return this.drinks[index];
    }
   

    adddrinks(drinks:drinks){
        this.drinks.push(drinks);
        this.drinksChanged.next(this.drinks.slice());
    }
    updatedrinks(index: number, newdrinks:drinks){
        this.drinks[index] = newdrinks;
        this.drinksChanged.next(this.drinks.slice());
    }
    deletedesserts(index: number){
        this.drinks.splice(index, 1);
        this.drinksChanged.next(this.drinks.slice());

    }
}