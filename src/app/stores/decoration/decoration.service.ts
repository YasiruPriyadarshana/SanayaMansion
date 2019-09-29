
import { EventEmitter, Injectable } from '@angular/core';


import { Subject } from 'rxjs';
import { ditem } from './decoration.model';

@Injectable()
export class decorationItemService{
    ditemChanged = new Subject<ditem[]>();
    constructor(){}

    recipeSelected = new EventEmitter<ditem>();
    private ditem:ditem[] = [
        new ditem('2','flowers','13','superShipping','2019-06-07','staff','210')
        ,new ditem('3','banners','30','Leema','2019-05-06','staff','560')
        ,new ditem('4','paper','23','Corner Creation','2019-07-12','store keeper','310')
       
      ];
    setditem(ditem: ditem[]){
        this.ditem=ditem;
        this.ditemChanged.next(this.ditem.slice());
    }

    getditem(){
        return this.ditem.slice();
    }
    getditems(index: number){
        return this.ditem[index];
    }
   

    addditem(ditem:ditem){
        this.ditem.push(ditem);
        this.ditemChanged.next(this.ditem.slice());
    }
    updateditem(index: number, newditem:ditem){
        this.ditem[index] = newditem;
        this.ditemChanged.next(this.ditem.slice());
    }
    deleteditem(index: number){
        this.ditem.splice(index, 1);
        this.ditemChanged.next(this.ditem.slice());

    }
}