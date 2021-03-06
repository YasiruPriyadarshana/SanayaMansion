import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { dessertsService } from './desserts.service';
import { desserts } from './desserts.model';
import { shoppingService } from '../../shopping/shopping.service';
import { shopping } from '../../shopping/shopping.model';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.css']
})
export class DessertsComponent implements OnInit {
  @ViewChild('quantity', {static: true}) q: ElementRef;
  
  desserts:desserts[];
  dessert:desserts;
 
  shopping:shopping;
  quan:string;
  total:number;
 
  constructor(private formBuilder: FormBuilder,private dessertsService:dessertsService,private route:ActivatedRoute, private router:Router,private shoppingService:shoppingService) { 
    
  }

  ngOnInit() {
    
    this.route.params.subscribe(
      (params: Params) => {
        this.desserts =this.dessertsService.getdessert();
      }
    );
   
  }

  onAdd(index:number,valu:string){
    
    this.dessert=this.dessertsService.getdesserts(index);
    this.total=+this.dessert.price*+valu;
    let a=new shopping(this.dessert.dessert,"good",this.dessert.price,valu,JSON.stringify(this.total));
    
    this.shoppingService.addshopping(a)
    
    
  }
  
}
