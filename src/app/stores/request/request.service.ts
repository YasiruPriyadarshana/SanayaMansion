
import { EventEmitter, Injectable } from '@angular/core';


import { Subject } from 'rxjs';
import { request } from './request.model';

@Injectable()
export class requestService{
    requestChanged = new Subject<request[]>();
    constructor(){}

    recipeSelected = new EventEmitter<request>();
    private request:request[] = [
        new request('2','decoration','flowers','2019-01-16','2019-05-06','23','290','2','1000')
        ,new request('3','store-item','Vegitable','2019-03-02','2019-07-05','39','590','3','1500')
        ,new request('4','store-item','Ham','2019-02-26','2019-06-16','56','450','3','1300') 
      ];
    setrequest(request: request[]){
        this.request=request;
        this.requestChanged.next(this.request.slice());
    }

    getrequest(){
        return this.request.slice();
    }
    getrequests(index: number){
        return this.request[index];
    }
   

    addrequest(request:request){
        this.request.push(request);
        this.requestChanged.next(this.request.slice());
    }
    updaterequest(index: number, newrequest:request){
        this.request[index] = newrequest;
        this.requestChanged.next(this.request.slice());
    }
    deleterequest(index: number){
        this.request.splice(index, 1);
        this.requestChanged.next(this.request.slice());

    }
}