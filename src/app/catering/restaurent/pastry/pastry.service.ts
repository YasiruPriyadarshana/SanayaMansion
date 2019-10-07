import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { pastrys } from './pastry.model';

Injectable()
export class pastryService{
    pastrysChanged = new Subject<pastrys[]>();
    constructor(){}

    pastrysSelected = new EventEmitter<pastrys>();
    private pastrys:pastrys[] = [
        new pastrys('BREAD','../assets/images/bread.jpg','55.00')
        ,new pastrys('FISH BUN','../assets/images/Fish-Bun1.jpg','40.00')
        ,new pastrys('SINISAMBAL PESTRY','../assets/images/sinisambalpestry.jpg','40.00')
        ,new pastrys('CHICKEN BURGER','../assets/images/chickenburger.jpg','50.00')
        ,new pastrys('EGG BUN','../assets/images/egg bun.jpg','55.00')
        ,new pastrys('HOTDOG BUN','../assets/images/hotdog bun.jpg','40.00')
        ,new pastrys('PIZZA (1 piece)','../assets/images/pizza.jpg','40.00')
        ,new pastrys('SANWITCH','../assets/images/sanwitch.jpg','50.00')
        ,new pastrys('ROTI','../assets/images/roti.jpg','10.00')
        ,new pastrys('FRUIT BUN','../assets/images/fruitbuns.jpg','40.00')
        ,new pastrys('SINISAMBAL PESTRY','../assets/images/sinisambalpestry.jpg','40.00')
        ,new pastrys('DONUT','../assets/images/donuts.jpg','50.00')
       
      ];
    setpastrys(pastrys: pastrys[]){
        this.pastrys=pastrys;
        this.pastrysChanged.next(this.pastrys.slice());
    }

    getpastry(){
        return this.pastrys.slice();
    }
    getpastrys(index: number){
        return this.pastrys[index];
    }
   

    addpastrys(pastrys:pastrys){
        this.pastrys.push(pastrys);
        this.pastrysChanged.next(this.pastrys.slice());
    }
    updatepastrys(index: number, newpastrys:pastrys){
        this.pastrys[index] = newpastrys;
        this.pastrysChanged.next(this.pastrys.slice());
    }
    deletepastrys(index: number){
        this.pastrys.splice(index, 1);
        this.pastrysChanged.next(this.pastrys.slice());

    }
}