import { Hall } from './hall.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class HallService {
  hallChanged = new Subject<Hall[]>();
  hallSelected = new EventEmitter<Hall>();

  private  halls : Hall[] = [
    new Hall('shapire','https://www.venue.royalholloway.ac.uk/wp-content/uploads/2018/02/Founders-Dining-Hall-wedding-1200x630.jpg','100,000','Advance 25,000rs | capacity-200'),
    new Hall('platinum','https://www.burgfeistritz.com/wp-content/uploads/2018/07/wedding16-1200x630.jpg','100,000','Advance 35,000rs |  capacity-250'),
    new Hall('Vebber','https://www.manila-hotel.com.ph/wp-content/uploads/2018/01/5-1-1200x630.jpg','100,000','Advance 40,000rs |  capacity-300'),  
    ];
      getHalls(){
          return this.halls.slice();
      }
      getHall(index: number){
        return this.halls[index];
      }
      addHall(hall: Hall){
        this.halls.push(hall);
        this.hallChanged.next(this.halls.slice());
      }
      updateHall(index: number, newHall: Hall){
        this.halls[index] = newHall;
        this.hallChanged.next(this.halls.slice());
      }
      deleteHall(index: number){
        this.halls.splice(index, 1);
        this.hallChanged.next(this.halls.slice());
      }
}