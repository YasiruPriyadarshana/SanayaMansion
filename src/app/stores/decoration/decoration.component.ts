import { Component, OnInit } from '@angular/core';
import { ditem } from './decoration.model';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { decorationItemService } from './decoration.service';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-decoration',
  templateUrl: './decoration.component.html',
  styleUrls: ['./decoration.component.css']
})
export class DecorationComponent implements OnInit {
  ditem:ditem[];
  ditem2:ditem;
  array=[];
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
  downloadpdf(){
    this.ditem2 =this.decorationItemService.getditems(1);
    this.array.push(this.ditem2.id+'    '+this.ditem2.decorations+'   '+this.ditem2.supplier+'   '+this.ditem2.price+'    '+this.ditem2.request+'   '+this.ditem2.date+'    '+this.ditem2.quantity);
    const doc = new jsPDF();
    doc.text(this.array, 10, 10);
    doc.save('store.pdf');
  }
}
