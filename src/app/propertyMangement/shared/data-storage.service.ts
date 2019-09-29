import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { RoomService } from '../rooms/room.service';
import { Room } from '../rooms/room.model';
import { Response } from 'selenium-webdriver/http';
import { map } from 'rxjs/operators';
import { HallService } from '../halls/hall.service';
import { Hall } from '../halls/hall.model';
import { Vehicle } from '../vehicle-list/vehicle.model';
import { VehicleListService } from '../vehicle-list/vehicle-list.service';


@Injectable()
export class DataStorageService {
    constructor(private http:HttpClient, private roomService: RoomService, private hallService: HallService, private vehiclelistService: VehicleListService){
    }
    StoreRooms() {
       return this.http.put('https://ng-hotel-book.firebaseio.com/rooms.json',this.roomService.getRooms());
    }
    getRooms(){
        this.http.get<Room[]>('https://ng-hotel-book.firebaseio.com/rooms.json')
        .subscribe(
            (rooms: Room[])=>{
                this.roomService.setRooms(rooms);          
            }
        )
    }

    StoreHalls() {
        return this.http.put('https://ng-hotel-book.firebaseio.com/halls.json',this.hallService.getHalls());
     }
     getHalls(){
         this.http.get<Hall[]>('https://ng-hotel-book.firebaseio.com/halls.json')
         .subscribe(
             (halls: Hall[])=>{
                 this.hallService.setHalls(halls);          
             }
         )
     }

     StoreVehicles() {
        return this.http.put('https://ng-hotel-book.firebaseio.com/vehicles.json',this.vehiclelistService.getVehicles());
     }
     getVehicles(){
         this.http.get<Vehicle[]>('https://ng-hotel-book.firebaseio.com/vehicles.json')
         .subscribe(
             (vehicles: Vehicle[])=>{
                 this.vehiclelistService.setVehicles(vehicles);          
             }
         )
     }
     //https://sanayamansion-e55bf.firebaseio.com/
}