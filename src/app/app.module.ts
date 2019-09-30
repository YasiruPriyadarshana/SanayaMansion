import { AppComponent } from './app.component';
import { StoresComponent } from './stores/stores.component';
import { CateringComponent } from './catering/catering.component';
import { HeaderComponent } from './header/header.component';
import { DropDownDirective } from './shared/dropdown.directive';
import { SanayaHomeComponent } from './sanaya-home/sanaya-home.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SupplierComponent } from './customer/supplier/supplier.component';
import { SupDetailComponent } from './customer/sup-detail/sup-detail.component';
import { RoomDetailsComponent } from './customer/room-details/room-details.component';
import { DisplaySComponent } from './customer/sup-detail/display-s/display-s.component';
import { DisplayRComponent } from './customer/room-details/display-r/display-r.component';
import { RoomStartComponent } from './propertyMangement/rooms/room-start/room-start.component';
import { RoomEditComponent } from './propertyMangement/rooms/room-edit/room-edit.component';
import { RoomDetailComponent } from './propertyMangement/rooms/room-detail/room-detail.component';
import { HallsComponent } from './propertyMangement/halls/halls.component';
import { HallStartComponent } from './propertyMangement/halls/hall-start/hall-start.component';
import { HallEditComponent } from './propertyMangement/halls/hall-edit/hall-edit.component';
import { HallDetailComponent } from './propertyMangement/halls/hall-detail/hall-detail.component';
import { VehicleListComponent } from './propertyMangement/vehicle-list/vehicle-list.component';
import { PropAppComponent } from './propertyMangement/app-prop.component';
import { AppstaffComponent } from './staffmanager/appstaff.component';
import { SchedulesComponent } from './staffmanager/schedules/schedules.component';
import { ShedulesEditComponent } from './staffmanager/schedules/shedules-edit/shedules-edit.component';
import { StaffComponent } from './staffmanager/staff/staff.component';
import { EmpregisterComponent } from './staffmanager/empregister/empregister.component';
import { StaffAttendanceComponent } from './staffmanager/staff-attendance/staff-attendance.component';
import { LoginComponent } from './staffmanager/login/login.component';
import { GetAttendanceComponent } from './staffmanager/staff-attendance/get-attendance/get-attendance.component';
import { AttendanceComponent } from './staffmanager/staff/attendance/attendance.component';
import { EmployeeComponent } from './staffmanager/staff/employee/employee.component';
import { MemberComponent } from './staffmanager/staff/attendance/member/member.component';
import { HallListComponent } from './propertyMangement/halls/hall-list/hall-list.component';
import { HallItemComponent } from './propertyMangement/halls/hall-list/hall-item/hall-item.component';
import { RoomListComponent } from './propertyMangement/rooms/room-list/room-list.component';
import { VehicleEditComponent } from './propertyMangement/vehicle-list/vehicle-edit/vehicle-edit.component';
import { RoomItemComponent } from './propertyMangement/rooms/room-list/room-item/room-item.component';
import { StaffHeaderComponent } from './staffmanager/header/header.component';
import { AppCusComponent } from './customer/app-cus.component';
import { CusHeaderComponent } from './customer/header/header.component';
import { DecorationComponent } from './stores/decoration/decoration.component';
import { hotelCateringComponent } from './catering/hotel-menu/hotelcatering.component';

import { CateringDetailComponent } from './catering/hotel-menu/catering-detail/catering-detail.component';
import { CateringListComponent } from './catering/hotel-menu/catering-list/catering-list.component';

import { ShoppingListComponent } from './catering/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './catering/shopping-list/shopping-edit/shopping-edit.component';
import { StoreItemsComponent } from './stores/store-items/store-items.component';
import { SubHeaderComponent } from './propertyMangement/sub-header/sub-header.component';

import { WeddingsComponent } from './event/weddings/weddings.component';
import { OtherComponent } from './event/other/other.component';
import { EventCalendarComponent } from './event/event-calendar/event-calendar.component';
import { AdvertisementsComponent } from './event/advertisements/advertisements.component';
import { RoomComponent } from './reservation/room/room.component';
import { RBookingDetailsComponent } from './reservation/room/r-booking-details/r-booking-details.component';
import { HallComponent } from './reservation/hall/hall.component';
import { HBookingDetailsComponent } from './reservation/hall/h-booking-details/h-booking-details.component';
import { HeaderRComponent } from './reservation/header/header.component';
import { PayrollComponent } from './Finance/payroll/payroll.component';
import { SalaryDetailsComponent } from './Finance/payroll/salary-details/salary-details.component';
import { BillCalculationsComponent } from './Finance/bill-calculations/bill-calculations.component';
import { EventBillComponent } from './Finance/bill-calculations/event-bill/event-bill.component';
import { RoomResBillComponent } from './Finance/bill-calculations/room-res-bill/room-res-bill.component';
import { ViewDetailsComponent } from './Finance/payroll/salary-details/view-details/view-details.component';
import { EditSalaryDetailsComponent } from './Finance/payroll/edit-salary-details/edit-salary-details.component';
import { EventBillEditComponent } from './Finance/bill-calculations/event-bill/event-bill-edit/event-bill-edit.component';
import { RoomResBillEditComponent } from './Finance/bill-calculations2/room-res-bill/room-res-bill-edit/room-res-bill-edit.component';
import { BillCalculations2Component } from './Finance/bill-calculations2/bill-calculations2.component';
import { FHomeComponent } from './Finance/home/home.component';
import { DailyReportComponent } from './Finance/daily-report/daily-report.component';
import { EditDailyReportComponent } from './Finance/daily-report/edit-daily-report/edit-daily-report.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HallService } from './propertyMangement/halls/hall.service';
import { VehicleListService } from './propertyMangement/vehicle-list/vehicle-list.service';
import { RoomService } from './propertyMangement/rooms/room.service';
import { ShoppingListService } from './catering/shopping-list/shopping-list.service';
import { NgModule } from '@angular/core';
import { RoomsComponent } from './propertyMangement/rooms/rooms.component';
import { CRoomsComponent } from './customer/rooms/rooms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DropdownDirective } from './propertyMangement/shared/dropdown.directive';
import { AppEventComponent } from './event/appev.component';
import { EventHeaderComponent } from './event/header/header.component';
import { FinanceAppComponent } from './Finance/appfn.component';
import { FHeaderComponent } from './Finance/header/header.component';
import { ResAppComponent } from './reservation/apprv.component';


import { MAT_DIALOG_DEFAULT_OPTIONS, } from '@angular/material/dialog';


import {
  MatButtonModule,
  MatCommonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatAutocompleteModule,
} from '@angular/material';
import { PopupComponent } from './stores/popup';
import { ModalModule } from './stores/modal/modal.module';
import { RequestComponent } from './stores/request/request.component';
import { PopupComponent2 } from './stores/popup2';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { CateringFormComponent } from './catering/hotel-menu/catering-detail/catering-form/catering-form.component';
import { MenuTypeComponent } from './catering/hotel-menu/catering-detail/catering-form/menu-type/menu-type.component';
import { HotelComponent } from './catering/hotel/hotel.component';
import { RestaurentComponent } from './catering/restaurent/restaurent.component';
import { HotelformComponent } from './catering/hotel/hotelform/hotelform.component';
import { Plate1990Component } from './catering/hotel/plate1990/plate1990.component';
import { Plate2100Component } from './catering/hotel/plate2100/plate2100.component';
import { Plate3200Component } from './catering/hotel/plate3200/plate3200.component';
import { PastryComponent } from './catering/restaurent/pastry/pastry.component';
import { DessertsComponent } from './catering/restaurent/desserts/desserts.component';
import { DrinksComponent } from './catering/restaurent/drinks/drinks.component';

import { DataStorageService } from './propertyMangement/shared/data-storage.service';
import { HttpClientModule } from '@angular/common/http';
import { storeItemService } from './stores/store-items/store-item.service';
import { DataStorageServiceSanaya } from './shared/data-storage.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { decorationItemService } from './stores/decoration/decoration.service';
import { PopupComponent3 } from './stores/popup3';
import { OrdersComponent } from './catering/orders/orders.component';
import { orderService } from './catering/orders/orders.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropDownDirective,
    SanayaHomeComponent,
    MainNavComponent,
    
    RequestComponent,
    
    //stores
    StoresComponent,
    StoreItemsComponent,
    DecorationComponent,
    PopupComponent2,
    PopupComponent,
    PopupComponent3,
    SignupComponent,
    SigninComponent,
    
    //catering
    CateringComponent,
    hotelCateringComponent,
   
    CateringDetailComponent,
    
    
    

    //customer
    SupplierComponent,
    SupDetailComponent,
    RoomDetailsComponent,
    DisplaySComponent,
    DisplayRComponent,
    AppCusComponent,
    CusHeaderComponent,
    CateringListComponent,
 
    ShoppingListComponent,
    ShoppingEditComponent,
    CRoomsComponent,
   
    AppComponent,
    HeaderComponent,

    
    
    //property Management
    SubHeaderComponent,
    PropAppComponent,
    RoomsComponent,
    RoomListComponent,
    RoomDetailComponent,
    RoomItemComponent,
    RoomStartComponent,
    RoomEditComponent,

    VehicleListComponent,
    VehicleEditComponent,
    DropdownDirective,
    
    HallsComponent,
    HallDetailComponent,
    HallEditComponent,
    HallListComponent,
    HallStartComponent,
    HallItemComponent,
    
    
   
   
    
    
   
    
   
    
   
    //Staff Mangement
    AppstaffComponent,
    SchedulesComponent,
    ShedulesEditComponent,
    StaffComponent,
    EmpregisterComponent,
    StaffAttendanceComponent,
    LoginComponent,
    GetAttendanceComponent,
    AttendanceComponent,
    EmployeeComponent,
    MemberComponent,
    StaffHeaderComponent,
    
    
    
    
    
    
    //reservation
    ResAppComponent,
    RoomComponent,
    RBookingDetailsComponent,
    HallComponent,
    HBookingDetailsComponent,
    HeaderRComponent,
    
    //event
    EventHeaderComponent,
    WeddingsComponent,
    OtherComponent,
    EventCalendarComponent,
    AdvertisementsComponent,
    AppEventComponent,
    


    
    //Finance
    FinanceAppComponent,
    FHomeComponent,
    HeaderComponent,
    PayrollComponent,
    SalaryDetailsComponent,
    BillCalculationsComponent,
    EventBillComponent,
    RoomResBillComponent,
    EditSalaryDetailsComponent,
    ViewDetailsComponent,
    EventBillEditComponent,
    RoomResBillEditComponent,
    BillCalculations2Component,
    LoginComponent,
    DailyReportComponent,
    EditDailyReportComponent,
    FHeaderComponent,
    CateringFormComponent,
    MenuTypeComponent,
    HotelComponent,
    RestaurentComponent,
    HotelformComponent,
    Plate1990Component,
    Plate2100Component,
    Plate3200Component,
    PastryComponent,
    DessertsComponent,
    DrinksComponent,
    OrdersComponent,
   
    
   
    
    
    

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
    MatListModule,
    
    MatButtonModule,
    MatCommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule, 
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    HttpClientModule,
    

    BrowserModule,
        FormsModule,
        ModalModule,
    
  ],
  providers: [HallService,VehicleListService,DataStorageService,DataStorageServiceSanaya,RoomService,RoomEditComponent,ShoppingListService,orderService,{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},storeItemService,decorationItemService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
