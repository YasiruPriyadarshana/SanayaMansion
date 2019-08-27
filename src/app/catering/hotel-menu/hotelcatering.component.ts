import { Component, OnInit } from '@angular/core';

import { CateringService } from './catering.service';
import { Catering } from './catering.model';



@Component({
  selector: 'app-hotelcatering',
  templateUrl: './hotelcatering.component.html',
  styleUrls: ['./hotelcatering.component.css'],
  providers: [CateringService]
  
})
export class hotelCateringComponent implements OnInit {
  selectedCatering;
  constructor(private cateringService: CateringService) { }

  ngOnInit() {
    this.cateringService.cateringSelected.subscribe(
      (catering: Catering) => {
        this.selectedCatering= catering;
      }
    );
  }

}
