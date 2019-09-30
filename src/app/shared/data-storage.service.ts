import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { storeItemService } from '../stores/store-items/store-item.service';
import { orderService } from  '../catering/orders/orders.service';
import { sitem } from '../stores/store-items/store-item.model';
import { ditem } from '../stores/decoration/decoration.model';
import { order } from '../catering/orders/orders.model';
import { decorationItemService } from '../stores/decoration/decoration.service';
import { AuthService } from '../auth/auth.service';
import { from } from 'rxjs';

@Injectable()
export class DataStorageServiceSanaya{
    
    constructor(private http: HttpClient, private authService:AuthService, private storeItemService:storeItemService, private decorationItemService:decorationItemService,private orderService:orderService){}
    
    storeSItem(){
        const token = this.authService.getToken();
        return this.http.put('https://sanayamansion-e55bf.firebaseio.com/store-item.json?auth=' + token,this.storeItemService.getsitem());

    }

    getSItem(){
        const token = this.authService.getToken();
        this.http.get<sitem[]>('https://sanayamansion-e55bf.firebaseio.com/store-item.json?auth=' + token,)
            .subscribe(
                (sitem: sitem[]) => {
                    this.storeItemService.setsitem(sitem);
                }
            );
    }
    storedItem(){
        const token = this.authService.getToken();
        return this.http.put('https://sanayamansion-e55bf.firebaseio.com/decoration-item.json?auth=' + token,this.decorationItemService.getditem());

    }

    getdItem(){
        const token = this.authService.getToken();
        this.http.get<ditem[]>('https://sanayamansion-e55bf.firebaseio.com/decoration-item.json?auth=' + token,)
            .subscribe(
                (ditem: ditem[]) => {
                    this.decorationItemService.setditem(ditem);
                }
            );
    }

    //Catering

    storedOders(){
        const token = this.authService.getToken();
        return this.http.put('https://sanayamansion-e55bf.firebaseio.com/Oders.json?auth=' + token,this.orderService.getorder());

    }

    getorder(){
        const token = this.authService.getToken();
        this.http.get<order[]>('https://sanayamansion-e55bf.firebaseio.com/Oders.json?auth=' + token,)
            .subscribe(
                (order: order[]) => {
                    this.orderService.setorder(order);
                }
            );
    }
}