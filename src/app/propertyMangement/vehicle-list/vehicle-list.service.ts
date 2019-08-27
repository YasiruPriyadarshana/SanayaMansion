import { Vehicle } from './vehicle.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class VehicleListService{
    vehiclesChanged = new EventEmitter<Vehicle[]>();
    startedEditing = new Subject<number>();
   private vehicles: Vehicle[] = [
        new Vehicle('v001','CAR1211','TA-TA'),
        new Vehicle('v002','CAN0011','MARUTHI'),
        new Vehicle('v003','CAB0000','Benz')
      ];

    getVehicles(){
        return this.vehicles.slice();
    }
    getVehicle(index: number){
        return this.vehicles[index];
    }
    addVehicle(vehicle: Vehicle){
        this.vehicles.push(vehicle);
        this.vehiclesChanged.emit(this.vehicles.slice());
    }
    updateVehicle(index: number, newVehicle: Vehicle){
        this.vehicles[index] = newVehicle;
        this.vehiclesChanged.next(this.vehicles.slice());
    }
    deleteVehicle(index: number){
        this.vehicles.splice(index,1);
        this.vehiclesChanged.next(this.vehicles.slice());
    }
    
}