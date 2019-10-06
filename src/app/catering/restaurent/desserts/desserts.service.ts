
import { EventEmitter, Injectable } from '@angular/core';


import { Subject } from 'rxjs';
import { desserts } from './desserts.model';

@Injectable()
export class dessertsService{
    dessertsChanged = new Subject<desserts[]>();
    constructor(){}

    recipeSelected = new EventEmitter<desserts>();
    private desserts:desserts[] = [
        new desserts('ANGEL DELIGHT','../assets/images/food-Angel-Delight.jpg','80.00')
        ,new desserts('CRUMBLE BAR','../assets/images/Buttery Raspberry Crumble Bars.jpg','50.00')
        ,new desserts('GOOEY BROWNIES','../assets/images/Ultimate Gooey Brownies.jpg','50.00')
       
      ];
    setdesserts(desserts: desserts[]){
        this.desserts=desserts;
        this.dessertsChanged.next(this.desserts.slice());
    }

    getdessert(){
        return this.desserts.slice();
    }
    getdesserts(index: number){
        return this.desserts[index];
    }
   

    adddesserts(desserts:desserts){
        this.desserts.push(desserts);
        this.dessertsChanged.next(this.desserts.slice());
    }
    updatedesserts(index: number, newdesserts:desserts){
        this.desserts[index] = newdesserts;
        this.dessertsChanged.next(this.desserts.slice());
    }
    deletedesserts(index: number){
        this.desserts.splice(index, 1);
        this.dessertsChanged.next(this.desserts.slice());

    }
}