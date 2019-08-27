import { Component, OnInit} from '@angular/core';
import { Room } from '../room.model';
import { RoomService } from '../room.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {
   room: Room;
   id: number;

  constructor(private roomService: RoomService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'] ; 
        this.room= this.roomService.getRoom(this.id) ;   
      });
  }
  onEditRoom(){
    this.router.navigate(['edit'],{relativeTo:this.route})
  }
  onDeleteRoom(){
    this.roomService.deleteRoom(this.id);
    this.router.navigate(['/rooms']);
  }

}
