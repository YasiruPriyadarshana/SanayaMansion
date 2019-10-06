import { shopping } from './shopping.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class shoppingService{
    shoppingChanged = new Subject<shopping[]>();
    constructor(){}

    restaurentSelected = new EventEmitter<shopping>();
    private shopping:shopping[] = [
        new shopping('Cake','yumee','100','2','200')
        ,new shopping('Fresh Papaya','rasai','80','1','80')
        
       
      ];
    setshopping(shopping: shopping[]){
        this.shopping=shopping;
        this.shoppingChanged.next(this.shopping.slice());
    }

    getshopping(){
        return this.shopping.slice();
    }
    getshoppings(index: number){
        return this.shopping[index];
    }
    
   

    addshopping(shopping:shopping){
        this.shopping.push(shopping);
        this.shoppingChanged.next(this.shopping.slice());
    }
    updateshopping(index: number, newshopping:shopping){
        this.shopping[index] = newshopping;
        this.shoppingChanged.next(this.shopping.slice());
    }
    deleteshopping(index: number){
        this.shopping.splice(index, 1);
        this.shoppingChanged.next(this.shopping.slice());

    }
}