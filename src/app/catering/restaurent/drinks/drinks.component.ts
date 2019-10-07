import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { shopping } from '../../shopping/shopping.model';
import { FormBuilder } from '@angular/forms';
import { drinksService } from './drinks.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { drinks } from './drinks.model';
import { shoppingService } from '../../shopping/shopping.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {
  @ViewChild('quantity', {static: true}) q: ElementRef;
  
  drinks:drinks[];
  drink:drinks;
  shopping:shopping;
  quan:string;
  total:number;
  constructor(private formBuilder: FormBuilder,private drinksService:drinksService,private route:ActivatedRoute, private router:Router,private shoppingService:shoppingService) { 
    
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.drinks =this.drinksService.getdrink();
      }
    );
   
  }

  onAdd(index:number,valu:string){
    
    this.drink=this.drinksService.getdrinks(index);
    this.total=+this.drink.price*+valu;
    let a=new shopping(this.drink.drinks,"good",this.drink.price,valu,JSON.stringify(this.total));
    
    this.shoppingService.addshopping(a)
    
    
  }

}
