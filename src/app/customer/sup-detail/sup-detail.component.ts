import { Component, OnInit } from '@angular/core';
import { Supplier } from '../shared/supplier.model';

@Component({
  selector: 'app-sup-detail',
  templateUrl: './sup-detail.component.html',
  styleUrls: ['./sup-detail.component.css']
})
export class SupDetailComponent implements OnInit {

  wsuppliers: Supplier[] =[
    new Supplier('Harry','S01','Ha@.com','ABC','Matara','0752426727'),
    new Supplier('Jane','S02','Ja@.com','FHJ','Colombo','0918763355'),
    new Supplier('Mary','S03','Ma@.com','IHF','Colombo','072348054'),

  ];
  constructor() { }

  ngOnInit() {
  }

  onSupplierAdded(supplier : Supplier){
    this.wsuppliers.push(supplier);
  }

}
