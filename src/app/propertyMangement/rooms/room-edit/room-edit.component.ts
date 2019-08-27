import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RoomService } from '../room.service';
import { Room } from '../room.model';

@Component({
  selector: 'app-room-edit',
  templateUrl: './room-edit.component.html',
  styleUrls: ['./room-edit.component.css']
})
export class RoomEditComponent implements OnInit {
  id: number;
  editMode = false;
  roomForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private roomService: RoomService,
              private router: Router ) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }
  onSubmit(){
    const newRoom = new Room(
      this.roomForm.value['no'],
      this.roomForm.value['roomType'],
      this.roomForm.value['imagePath'],
      this.roomForm.value['price']
    );
    if (this.editMode){
      this.roomService.updateRoom(this.id,newRoom);
    } else{
      this.roomService.addRoom(newRoom);
    }
    this.onCancel();
  }

  private initForm(){
    
    let roomNo='';
    let roomType = '';
    let roomImagePath = '';
    let roomPrice = '';

    if (this.editMode){
      const room = this.roomService.getRoom(this.id);
      roomNo = room.no;
      roomType = room.roomType;
      roomImagePath = room.imagePath;
      roomPrice = room.price;
    }

    this.roomForm = new FormGroup({
      'no': new FormControl(roomNo, Validators.required),
      'roomType': new FormControl(roomType,Validators.required),
      'imagePath': new FormControl(roomImagePath,Validators.required),
      'price': new FormControl(roomPrice,Validators.required)
    });
  }
  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
