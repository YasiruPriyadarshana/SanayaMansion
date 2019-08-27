import { Hall } from './hall.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class HallService {
  hallChanged = new Subject<Hall[]>();
  hallSelected = new EventEmitter<Hall>();

  private  halls : Hall[] = [
      new Hall('Vebber','img','100,000','new hall'),
      
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