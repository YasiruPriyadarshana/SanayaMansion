import { Component, OnInit } from '@angular/core';
import { DataStorageServiceSanaya } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    
  }

  constructor(private DataStorageService:DataStorageServiceSanaya){}
  onSaveData(){
      this.DataStorageService.storeSItem()
          .subscribe(
              (response: Response) => {
                  console.log(response);
              }
          );
  }
  onFatchData(){
      this.DataStorageService.getSItem();
  }
}
