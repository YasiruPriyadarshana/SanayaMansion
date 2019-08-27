import { Component, OnInit, Input } from '@angular/core';
import { Hall } from '../../hall.model';

@Component({
  selector: 'app-hall-item',
  templateUrl: './hall-item.component.html',
  styleUrls: ['./hall-item.component.css']
})
export class HallItemComponent implements OnInit {
  @Input()  hall: Hall;
  @Input() index: number;

  ngOnInit() {
  }

}
