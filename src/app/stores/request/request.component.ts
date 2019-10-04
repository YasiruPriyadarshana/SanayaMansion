import { Component, OnInit } from '@angular/core';
import { request } from './request.model';
import { requestService } from './request.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  request:request[];

  constructor(private requestService:requestService,private route:ActivatedRoute, private router:Router) {}
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.request =this.requestService.getrequest();
      }
    );
  }

  onDeleteItem(index:number){
    this.requestService.deleterequest(index);
    this.ngOnInit();
  }
  

}
