import { Component, OnInit } from '@angular/core';
import { Hall } from './hall.model';
import { HallService } from './hall.service';

@Component({
  selector: 'app-halls',
  templateUrl: './halls.component.html',
  styleUrls: ['./halls.component.css']
})
export class HallsComponent implements OnInit {
  selectedHall;
  constructor( private hallService: HallService) { }

  ngOnInit() {
    this.hallService.hallSelected.subscribe(
      (hall: Hall) => {
        this.selectedHall= hall;
      }
    );
  }

}
