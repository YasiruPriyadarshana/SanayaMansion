import { Component, OnInit } from '@angular/core';
import { sitem } from './store-item.model';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { storeItemService } from './store-item.service';
import { PopupComponent } from '../popup/popup.component';


@Component({
  selector: 'app-store-items',
  templateUrl: './store-items.component.html',
  styleUrls: ['./store-items.component.css']
  
  
})
export class StoreItemsComponent implements OnInit {
  sitem:sitem[];
  Popup:PopupComponent;

  constructor(private storeItemService:storeItemService,private route:ActivatedRoute, private router:Router) {
    
  }
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.sitem =this.storeItemService.getsitem();
      }
    );
  
  }

  onDeleteItem(index:number){
    this.storeItemService.deletesitem(index);
    this.ngOnInit();
  }
  
  openedit(i){
    this.router.navigate(['../pop',i], {relativeTo: this.route});
  }

  
 
}
