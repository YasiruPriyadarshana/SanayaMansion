import { Component, OnInit } from '@angular/core';
import { Rbooking } from '../nshared/room.model';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  w1booking:Rbooking[]=[
    new Rbooking('ht','ty','we23','eee','334','edee','eere',4,6,)
  ]
  constructor() { }

  ngOnInit() {
  }


  RbookingAdded(room:Rbooking){
    this.w1booking.push(room);
  }
}
