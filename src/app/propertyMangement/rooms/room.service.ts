import { Room } from './room.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class RoomService {
  roomChanged = new Subject<Room[]>();
  roomSelected = new EventEmitter<Room>();

  private  rooms : Room[] = [
        new Room('R001','single','https://icdn3.digitaltrends.com/image/digitaltrends/27109894-interior-of-classic-hotel-room-1200x630-c-ar1.91.jpg','25,000 Rs'),
        new Room('R002','double','https://www.amavihotel.com/wp-content/uploads/2018/04/deluxe-room-view-1-1200x630.jpg','40,000 Rs'),
        new Room('R003','double','https://www.thechatwalny.com/wp-content/uploads/sites/17/2018/03/The-Chatwal-Luxury-Collection-Hotel-New-York-Grand-Deluxe-King-Room-02-1200x630.jpg','50,000 Rs'),
        new Room('R004','trible','https://www.exploreitaly.com/wp-content/uploads/2018/03/wes49gr-237927-King-Grand-Deluxe-Contemporary-Guest-Room-High-1200x630.jpg','60,000 Rs'),
        new Room('R005','single','https://lodgeatgulfstatepark.com/wp-content/uploads/2018/11/rooms-fb.jpg','40,000 Rs'),
        new Room('R006','triple','https://medias.althotels.com/winnipeg/3-dormir/b-2-lits/27297087959_2482a38d24_o-1-1200x630.jpg','60,000 Rs')
      ];

      getRooms(){
          return this.rooms.slice();
      }
      getRoom(index: number){
        return this.rooms[index];
      }
      addRoom(room: Room){
        this.rooms.push(room);
        this.roomChanged.next(this.rooms.slice());
      }
      updateRoom(index: number, newRoom: Room){
        this.rooms[index] = newRoom;
        this.roomChanged.next(this.rooms.slice());
      }
      deleteRoom(index: number){
        this.rooms.splice(index, 1);
        this.roomChanged.next(this.rooms.slice());
      }
}