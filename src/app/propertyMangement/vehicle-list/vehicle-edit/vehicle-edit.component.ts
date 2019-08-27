import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { Vehicle } from '../vehicle.model';
import { VehicleListService } from '../vehicle-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vehicle-edit',
  templateUrl: './vehicle-edit.component.html',
  styleUrls: ['./vehicle-edit.component.css']
})
export class VehicleEditComponent implements OnInit,OnDestroy {
  @ViewChild ('f',{static:true}) vlForm:NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Vehicle;

  constructor(private vlService:VehicleListService) { }

  ngOnInit() {
   this.subscription= this.vlService.startedEditing
    .subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem= this.vlService.getVehicle(index);
        this.vlForm.setValue({
          id: this.editedItem.id,
          no: this.editedItem.no,
          description: this.editedItem.description
        })
      }
    );
  }
  onSubmit(form: NgForm){
    const value = form.value;
    const newVehicle = new Vehicle(value.id, value.no, value.description);
    if (this.editMode){
      this.vlService.updateVehicle(this.editedItemIndex, newVehicle);
    }else{
      this.vlService.addVehicle(newVehicle);
    }
    this.editMode = false;
    form.reset();
  }
  onClear(){
    this.vlForm.reset();
    this.editMode = false;
  }
  onDelete(){
    this.vlService.deleteVehicle(this.editedItemIndex);
    this.onClear();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
