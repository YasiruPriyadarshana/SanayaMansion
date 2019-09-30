import { Component, OnInit } from '@angular/core';
import { DataStorageServiceSanaya } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { requestService } from '../stores/request/request.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    
  }

  constructor(private DataStorageService:DataStorageServiceSanaya, private authService:AuthService){}
  onSaveData(){
      this.DataStorageService.storeSItem()
          .subscribe(
              (response: Response) => {
                  console.log(response);
              }
          );
          this.DataStorageService.storedItem()
          .subscribe(
              (response: Response) => {
                  console.log(response);
              }
          );
          this.DataStorageService.storerequest()
          .subscribe(
              (response: Response) => {
                  console.log(response);
              }
          );
  }
  onFatchData(){
      this.DataStorageService.getSItem();
      this.DataStorageService.getdItem();
      this.DataStorageService.getrequest();
  }
  onLogout(){
    this.authService.logout();
  }
}
