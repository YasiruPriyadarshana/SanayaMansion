import { Component, OnInit } from '@angular/core';
import {booking} from '../shared/hall.model';
@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.css']
})
export class HallComponent implements OnInit {
wbooking:booking[]=[
  new booking('ht','ty','we23','eee','334','edee','eere','84','sdsdd',2323)
]
  constructor() { }

  ngOnInit() {
  }



  onBookingAdded(hall: booking){
    this.wbooking.push(hall);
  }
}
