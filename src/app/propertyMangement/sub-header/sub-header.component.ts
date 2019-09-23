import {Component} from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from 'selenium-webdriver/http';


@Component({
    selector:'app-sub-header',
    templateUrl:'./sub-header.component.html'

})
export class SubHeaderComponent {
    constructor(private dataStorageService: DataStorageService){}
    onSaveData(){
        this.dataStorageService.StoreRooms()
        .subscribe(
            (response: Response)=>{
                console.log(response);
            }
        );
        this.dataStorageService.StoreHalls()
        .subscribe(
            (response: Response)=>{
                console.log(response);
            }
        );
        this.dataStorageService.StoreVehicles()
        .subscribe(
            (response: Response)=>{
                console.log(response);
            }
        );
    }
    onFetchData(){
        this.dataStorageService.getRooms();
        this.dataStorageService.getHalls();
        this.dataStorageService.getVehicles();
    }
}