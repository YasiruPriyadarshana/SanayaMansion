import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {FormsModule} from '@angular/forms';
import { StoresComponent } from './stores/stores.component';
import { CateringComponent } from './catering/catering.component';
import { HeaderComponent } from './header/header.component';
import { DropDownDirective } from './shared/dropdown.directive';
import { SanayaHomeComponent } from './sanaya-home/sanaya-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list'
import { HallService } from './propertyMangement/halls/hall.service';
import { VehicleListService } from './propertyMangement/vehicle-list/vehicle-list.service';
import { RoomService } from './propertyMangement/rooms/room.service';
import { RoomsComponent } from './propertyMangement/rooms/rooms.component';
import { SupplierComponent } from './customer/supplier/supplier.component';
import { SupDetailComponent } from './customer/sup-detail/sup-detail.component';
import { RoomDetailsComponent } from './customer/room-details/room-details.component';
import { DisplaySComponent } from './customer/sup-detail/display-s/display-s.component';
import { DisplayRComponent } from './customer/room-details/display-r/display-r.component';

@NgModule({
  declarations: [
    AppComponent,
    StoresComponent,
    CateringComponent,
    HeaderComponent,
    DropDownDirective,
    SanayaHomeComponent,
    MainNavComponent,
    AppComponent,
    HeaderComponent,
    RoomsComponent,
    SupplierComponent,
    SupDetailComponent,
    RoomDetailsComponent,
    DisplaySComponent,
    DisplayRComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent,HallService,VehicleListService,RoomService]
})
export class AppModule { }
