import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoresComponent } from './stores/stores.component';
import { CateringComponent } from './catering/catering.component';
import { SanayaHomeComponent } from './sanaya-home/sanaya-home.component';
import { RoomsComponent } from './propertyMangement/rooms/rooms.component';
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
import { AppCusComponent } from './customer/app-cus.component';
import { hotelCateringComponent } from './catering/hotel-menu/hotelcatering.component';

import { CateringDetailComponent } from './catering/hotel-menu/catering-detail/catering-detail.component';
import { ShoppingListComponent } from './catering/shopping-list/shopping-list.component';
import { DecorationComponent } from './stores/decoration/decoration.component';
import { StoreItemsComponent } from './stores/store-items/store-items.component';
import { SupplierComponent } from './customer/supplier/supplier.component';
import { RoomDetailsComponent } from './customer/room-details/room-details.component';
import { SupDetailComponent } from './customer/sup-detail/sup-detail.component';
import { SchedulesComponent } from './staffmanager/schedules/schedules.component';
import { StaffAttendanceComponent } from './staffmanager/staff-attendance/staff-attendance.component';
import { EmpregisterComponent } from './staffmanager/empregister/empregister.component';
import { StaffComponent } from './staffmanager/staff/staff.component';

import { CRoomsComponent } from './customer/rooms/rooms.component';
import { AppEventComponent } from './event/appev.component';
import { WeddingsComponent } from './event/weddings/weddings.component';
import { OtherComponent } from './event/other/other.component';
import { EventCalendarComponent } from './event/event-calendar/event-calendar.component';
import { AdvertisementsComponent } from './event/advertisements/advertisements.component';
import { FinanceAppComponent } from './Finance/appfn.component';
import { PayrollComponent } from './Finance/payroll/payroll.component';
import { FHomeComponent } from './Finance/home/home.component';
import { ResAppComponent } from './reservation/apprv.component';
import { RoomComponent } from './reservation/room/room.component';
import { HallComponent } from './reservation/hall/hall.component';
import { RBookingDetailsComponent } from './reservation/room/r-booking-details/r-booking-details.component';
import { HBookingDetailsComponent } from './reservation/hall/h-booking-details/h-booking-details.component';
import { PopupComponent } from './stores/popup/popup.component';
import { RequestComponent } from './stores/request/request.component';
import { CateringFormComponent } from './catering/hotel-menu/catering-detail/catering-form/catering-form.component';
import { HotelComponent } from './catering/hotel/hotel.component';
import { RestaurentComponent } from './catering/restaurent/restaurent.component';
import { Plate1990Component } from './catering/hotel/plate1990/plate1990.component';
import { Plate2100Component } from './catering/hotel/plate2100/plate2100.component';
import { Plate3200Component } from './catering/hotel/plate3200/plate3200.component';
import { HotelformComponent } from './catering/hotel/hotelform/hotelform.component';
import { DessertsComponent } from './catering/restaurent/desserts/desserts.component';
import { PastryComponent } from './catering/restaurent/pastry/pastry.component';
import { DrinksComponent } from './catering/restaurent/drinks/drinks.component';

import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { OrdersComponent } from './catering/orders/orders.component';


const routes: Routes = [
  { path: '', redirectTo:'/Home', pathMatch:'full' },
  { path: 'Home', component:SanayaHomeComponent},
  { path: 'catering', component:CateringComponent, children: [
    { path: '' ,component: hotelCateringComponent },
    
    { path: 'hotel', component: HotelComponent,children: [
      { path: '',component:Plate1990Component },
      { path: 'plate1990',component:Plate1990Component },
      { path: 'plate2100',component:Plate2100Component },
      { path: 'plate3200',component:Plate3200Component },
      
    ]},
    { path: 'restaurent', component: RestaurentComponent,children: [
      { path: 'pastry',component:PastryComponent},
      { path: 'desserts',component:DessertsComponent},
      { path: 'drinks',component:DrinksComponent},
    ]},
    { path: 'hotelform',component:HotelformComponent },
     ]},
    

  { path: 'stores', component:StoresComponent, children: [
    { path: '' ,component: DecorationComponent},
    { path: 'storeItems',component: StoreItemsComponent},
    { path: 'requested',component: RequestComponent},
    { path: 'pop/:id', component: PopupComponent },
    
  ]},
  { path: 'signup' , component:SignupComponent},
  { path: 'signin' , component:SigninComponent},
  { path: 'propertyManagement', component: PropAppComponent, children:[
       { path:'rooms', component: RoomsComponent, children: [
           { path:'',component: RoomStartComponent },
           { path: 'new', component: RoomEditComponent},
           { path: ':id', component: RoomDetailComponent},
           { path: ':id/edit', component: RoomEditComponent}] },
 
       { path:'halls', component: HallsComponent, children: [
         { path:'',component: HallStartComponent },
         { path: 'new', component: HallEditComponent},
         { path: ':id', component: HallDetailComponent},
         { path: ':id/edit', component: HallEditComponent}] },

      { path:'vehicle-list', component: VehicleListComponent }
  ]},
  
  { path: 'staff', component:AppstaffComponent, children: [
    { path:'schedules',component: SchedulesComponent },
    { path:'staffattendence',component: StaffAttendanceComponent },
    { path:'empregister',component: EmpregisterComponent },
    { path:'staffcomponent',component: StaffComponent },

    
  ]},
  {path: 'customer', component: AppCusComponent, children: [
    { path:'rooms',component: CRoomsComponent },
    { path:'supplier',component: SupplierComponent },
    { path:'roomdetail',component: RoomDetailsComponent },
    { path:'supplierdetails',component: SupDetailComponent }
    
  ] },
  {path: 'event', component: AppEventComponent, children: [
    { path:'weddings',component: WeddingsComponent },
    { path:'other',component: OtherComponent },
    { path:'eventcalendar',component: EventCalendarComponent },
    { path:'advertisements',component: AdvertisementsComponent }
    
  ] },
  

  {path: 'Fhome', component: FinanceAppComponent, children: [
    { path:'home',component: FHomeComponent },
    { path:'Payment',component: PayrollComponent },
    { path:'reservations',component: EventCalendarComponent },
    { path:'events',component: AdvertisementsComponent },
    { path:'login',component: EventCalendarComponent },
    { path:'daily',component: AdvertisementsComponent }
    
  ] },


  {path: 'reservation', component: ResAppComponent, children: [
    { path:'room',component: RoomComponent },
    { path:'hall',component: HallComponent },
    { path:'roomdetails',component: RBookingDetailsComponent },
    { path:'halldetails',component: HBookingDetailsComponent }
    
  ] },

  {path: 'shopping-list',component: ShoppingListComponent},
  {path: 'orders',component: OrdersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
