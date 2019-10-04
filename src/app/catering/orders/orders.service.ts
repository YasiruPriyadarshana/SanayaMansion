
import { EventEmitter, Injectable } from '@angular/core';


import { Subject } from 'rxjs';
import { order } from './orders.model';

@Injectable()
export class orderService{
    orderChanged = new Subject<order[]>();
    constructor(){}

    recipeSelected = new EventEmitter<order>();
    private order:order[] = [
        new order('0719585746','Juthee','100','1990.00','Fresh Papaya','199000','2019-06-07')
        ,new order('0729043856','Angela','100','2100.00','Fresh Papaya','210000','2019-05-06')
        ,new order('0723230835','janidu','100','3200.00','Fresh Papaya','320000','2019-07-12')
       
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