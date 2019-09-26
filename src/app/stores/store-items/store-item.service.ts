
import { EventEmitter, Injectable } from '@angular/core';


import { Subject } from 'rxjs';
import { sitem } from './store-item.model';

@Injectable()
export class storeItemService{
    sitemChanged = new Subject<sitem[]>();
    constructor(){}

    recipeSelected = new EventEmitter<sitem>();
    private sitem:sitem[] = [
        new sitem('ST002','Meat','13','fish mart','2019-06-06','Cheff','230')
        ,new sitem('ST003','Vegitable','50','vijaya','2019-06-06','staff member','256')
        ,new sitem('ST004','Ham','13','darshana','2019-06-06','Cheff','250')
       
      ];
    setRecipe(sitem: sitem[]){
        this.sitem=sitem;
        this.sitemChanged.next(this.sitem.slice());
    }

    getRecipe(){
        return this.sitem.slice();
    }
    getRecipes(index: number){
        return this.sitem[index];
    }
   

    addRecipe(sitem:sitem){
        this.sitem.push(sitem);
        this.sitemChanged.next(this.sitem.slice());
    }
    updateRecipe(index: number, newsitem:sitem){
        this.sitem[index] = newsitem;
        this.sitemChanged.next(this.sitem.slice());
    }
    deleteRecipe(index: number){
        this.sitem.splice(index, 1);
        this.sitemChanged.next(this.sitem.slice());

    }
}