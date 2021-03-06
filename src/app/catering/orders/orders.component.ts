import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { order } from './orders.model';
import { orderService } from './orders.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  
  order:order[];
  order2:order;
  array=[];
  constructor(private orderService:orderService,private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.order =this.orderService.getorder();
      }
    );
  }

  onDeleteOrder(index:number){
    this.orderService.deleteorder(index);
    this.ngOnInit();
  }

  private initForm(ids:number){
    let customerNo='';
    let customerName='';
    let numberOfPlates='';
    let menuType='';
    let welcomeDrinks='';
    let amount='';
    let date='';

    
      const customer=this.orderService.getorders(ids);
      customerNo=customer.customerNo;
      customerName=customer.customerName;
      numberOfPlates=customer.numberOfPlates;
      menuType=customer.menuType;
      welcomeDrinks=customer.welcomeDrinks;
      amount=customer.amount;
      date=customer.date;
      
       
    
    // this. =new FormGroup({
    //   'customerNo':new FormControl(customerNo),
    //   'customerName':new FormControl(customerName,Validators.required),
    //   'numberOfPlates':new FormControl(numberOfPlates,Validators.required),
    //   'menuType':new FormControl(menuType,Validators.required),
    //   'welcomeDrinks':new FormControl(welcomeDrinks,Validators.required),
    //   'amount':new FormControl(amount,Validators.required),
    //   'date':new FormControl(date,Validators.required),
           
      
    // });
  }

  downloadpdf(){
    const doc = new jsPDF();
    for(let i=0;i<3;i++){
    this.order2 =this.orderService.getorders(i);
    this.array.push(this.order2.customerNo+'    '+this.order2.customerName+'   '+this.order2.numberOfPlates+'   '+this.order2.menuType+'    '+this.order2.welcomeDrinks+'   '+this.order2.amount+'    '+this.order2.date);
    
    doc.text(this.array, 10, 10);
  
    
    }
    doc.save('store.pdf');
  }

}
