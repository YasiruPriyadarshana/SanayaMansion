import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoresComponent } from './stores/stores.component';
import { CateringComponent } from './catering/catering.component';


const routes: Routes = [
  // { path: '', redirectTo:'/recipes', pathMatch:'full' },
  { path: 'cataring', component:CateringComponent, children: [
    
  ]},
  { path: 'stores', component:StoresComponent }
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
