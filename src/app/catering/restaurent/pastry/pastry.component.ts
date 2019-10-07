import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { shopping } from '../../shopping/shopping.model';
import { FormBuilder } from '@angular/forms';
import { pastrys } from './pastry.model';
import { pastryService } from './pastry.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { shoppingService } from '../../shopping/shopping.service';

@Component({
  selector: 'app-pastry',
  templateUrl: './pastry.component.html',
  styleUrls: ['./pastry.component.css']
})
export class PastryComponent implements OnInit {

  @ViewChild('quantity', {static: true}) q: ElementRef;
  
  pastrys:pastrys[];
  pastry:pastrys;
  shopping:shopping;
  quan:string;
  total:number;
  constructor(private formBuilder: FormBuilder,private pastryService:pastryService,private route:ActivatedRoute, private router:Router,private shoppingService:shoppingService) { 
    
  }


  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.pastrys =this.pastryService.getpastry();
      }
    );
  }

  onAdd(index:number,valu:string){
    
    this.pastry=this.pastryService.getpastrys(index);
    this.total=+this.pastry.price*+valu;
    let a=new shopping(this.pastry.pastrys,"good",this.pastry.price,valu,JSON.stringify(this.total));
    
    this.shoppingService.addshopping(a)
    
    
  }


}
