import { Component, OnInit } from '@angular/core';
import { Res } from './res.module';

@Component({
  selector: 'app-room-res-bill',
  templateUrl: './room-res-bill.component.html',
  styleUrls: ['./room-res-bill.component.css']
})
export class RoomResBillComponent implements OnInit {

  resBill: Res[]=[
    new Res('R0001','M1', 300,0,75000),
    new Res('R0002','M3', 30,45,18000),
    new Res('R0003','M1', 100,0,45000)
  ]

  onResBillAdded(res:Res){
    this.resBill.push(res)
  }

  constructor() { }

  ngOnInit() {
  }

}
