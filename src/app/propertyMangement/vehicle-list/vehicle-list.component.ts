import { Component, OnInit } from '@angular/core';
import { Vehicle } from './vehicle.model';
import { VehicleListService } from './vehicle-list.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  vehicles: Vehicle[] ;
  constructor(private vlService: VehicleListService) { }

  ngOnInit() {
    this.vehicles=this.vlService.getVehicles();
    this.vlService.vehiclesChanged.subscribe(
      (vehicles: Vehicle[] )=>{
        this.vehicles=vehicles;
      }
    );
  }
  onEditItem(index: number){
    this.vlService.startedEditing.next(index);
  }
}
