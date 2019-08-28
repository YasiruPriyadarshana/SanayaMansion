import { Component, OnInit } from '@angular/core';
import { Event } from './event.module';

@Component({
  selector: 'app-event-bill',
  templateUrl: './event-bill.component.html',
  styleUrls: ['./event-bill.component.css']
})
export class EventBillComponent implements OnInit {

  eventBill: Event[]=[
    new Event('S0001','single','full', 3 , 1 ,7000),
    new Event('S0002','double','full', 3 , 1 ,7000),
    new Event('S0003','single','half', 3 , 1 ,7000),
    new Event('S0004','single','full', 3 , 1 ,7000),
    new Event('S0005','single','full', 3 , 1 ,7000)
  ]

  onEventBillAdded(event:Event){
    this.eventBill.push(event);
  }

  constructor() { }

  ngOnInit() {
  }
  

}
