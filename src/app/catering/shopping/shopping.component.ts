import { Component, OnInit } from '@angular/core';
import { shopping } from './shopping.model';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { shoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  shopping:shopping[];
  price:number[];
  total:number;
  num:number;
  constructor(private shoppingService:shoppingService,private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.total=0;
    this.route.params.subscribe(
      (params: Params) => {
        this.shopping =this.shoppingService.getshopping();
        
      }
    );
    for(let i in shopping){
      this.num=shopping[i].price;
      this.total+=this.num;
    }
    console.log("asas"+this.total);
  }

  onDeleteShopping(index:number){
    this.shoppingService.deleteshopping(index);
    this.ngOnInit();
  }

}
