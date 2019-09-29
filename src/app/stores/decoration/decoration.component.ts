import { Component, OnInit } from '@angular/core';
import { ditem } from './decoration.model';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { decorationItemService } from './decoration.service';

@Component({
  selector: 'app-decoration',
  templateUrl: './decoration.component.html',
  styleUrls: ['./decoration.component.css']
})
export class DecorationComponent implements OnInit {
  ditem:ditem[];
  constructor(private decorationItemService:decorationItemService,private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.ditem =this.decorationItemService.getditem();
      }
    );
  }

  onDeleteItem(index:number){
    this.decorationItemService.deleteditem(index);
    this.ngOnInit();
  }

}
