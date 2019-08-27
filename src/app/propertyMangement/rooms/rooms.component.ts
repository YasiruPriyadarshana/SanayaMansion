import { Component, OnInit } from '@angular/core';
import { Room } from './room.model';
import { RoomService } from './room.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  selectedRoom;
  constructor( private roomService: RoomService) { }

  ngOnInit() {
    this.roomService.roomSelected.subscribe(
      (room: Room) => {
        this.selectedRoom = room;
      }
    );
  }

}
