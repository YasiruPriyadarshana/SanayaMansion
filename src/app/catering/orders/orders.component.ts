import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { order } from './orders.model';
import { orderService } from './orders.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  
  order:order[];
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


}
