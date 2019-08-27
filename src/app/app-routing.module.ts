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
import { CateringEditComponent } from './catering/hotel-menu/catering-edit/catering-edit.component';
import { CateringDetailComponent } from './catering/hotel-menu/catering-detail/catering-detail.component';
import { ShoppingListComponent } from './catering/shopping-list/shopping-list.component';
import { DecorationComponent } from './stores/decoration/decoration.component';
import { StoreItemsComponent } from './stores/store-items/store-items.component';


const routes: Routes = [
  { path: '', redirectTo:'/Home', pathMatch:'full' },
  { path: 'Home', component:SanayaHomeComponent},
  { path: 'catering', component:CateringComponent, children: [
    { path: '' ,component: hotelCateringComponent },
    { path: 'new', component:CateringEditComponent},
    { path: ':id', component: CateringDetailComponent},
    { path: ':id/edit', component:CateringEditComponent}
  ]},
  { path: 'stores', component:StoresComponent, children: [
    { path: 'appdecoration' ,component: DecorationComponent},
    { path: 'storeItems',component: StoreItemsComponent}
    
  ]},
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
  
  { path: 'staff', component:AppstaffComponent},
  {path: 'customer', component: AppCusComponent },
  {path: 'shopping-list',component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
