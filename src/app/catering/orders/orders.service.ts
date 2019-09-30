
import { EventEmitter, Injectable } from '@angular/core';


import { Subject } from 'rxjs';
import { order } from './orders.model';

@Injectable()
export class orderService{
    orderChanged = new Subject<order[]>();
    constructor(){}

    recipeSelected = new EventEmitter<order>();
    private order:order[] = [
        new order('0719585746','Juthee','1990.00','19900.00','2019-06-07')
        ,new order('0729043856','Angela','2100.00','21000.00','2019-05-06')
        ,new order('0723230835','janidu','3200.00','32000.00','2019-07-12')
       
      ];
    setorder(order: order[]){
        this.order=order;
        this.orderChanged.next(this.order.slice());
    }

    getorder(){
        return this.order.slice();
    }
    getorders(index: number){
        return this.order[index];
    }
   

    addorder(order:order){
        this.order.push(order);
        this.orderChanged.next(this.order.slice());
    }
    updateorder(index: number, neworder:order){
        this.order[index] = neworder;
        this.orderChanged.next(this.order.slice());
    }
    deleteorder(index: number){
        this.order.splice(index, 1);
        this.orderChanged.next(this.order.slice());

    }
}