import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { storeItemService } from '../stores/store-items/store-item.service';
import { sitem } from '../stores/store-items/store-item.model';


@Injectable()
export class DataStorageServiceSanaya{
    constructor(private http: HttpClient, private storeItemService:storeItemService){}

    storeSItem(){
        return this.http.put('https://sanayamansion-e55bf.firebaseio.com/store-item.json',this.storeItemService.getsitem());

    }

    getSItem(){
        this.http.get<sitem[]>('https://sanayamansion-e55bf.firebaseio.com/store-item.json')
            .subscribe(
                (sitem: sitem[]) => {
                    this.storeItemService.setsitem(sitem);
                }
            );

    }
}