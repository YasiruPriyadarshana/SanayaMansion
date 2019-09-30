import { Component, OnInit } from '@angular/core';
import { DataStorageServiceSanaya } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

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
          this.DataStorageService.storedOders()
          .subscribe(
              (response: Response) => {
                  console.log(response);
              }
          );
  }
  onFatchData(){
      this.DataStorageService.getSItem();
      this.DataStorageService.getdItem();
      this.DataStorageService.getorder();
  }
  onLogout(){
    this.authService.logout();
  }
}
