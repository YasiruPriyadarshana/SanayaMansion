import { Component, OnInit, OnDestroy } from '@angular/core';
import { Room } from '../room.model';
import { RoomService } from '../room.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit,OnDestroy {
  rooms : Room[] ;
  subscription: Subscription;

  constructor(private roomService: RoomService,
    private router: Router,
    private route: ActivatedRoute ) { }

  ngOnInit() {
  this.subscription =  this.roomService.roomChanged
      .subscribe(
        (rooms: Room[])=>{
          this.rooms = rooms;
        }
      );
    this.rooms = this.roomService.getRooms();
  }
  onNewRoom(){
    this.router.navigate(['new'], {relativeTo:this.route});
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
