import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiComponent } from './api/api.component';


const routes: Routes = [
  {path:'',redirectTo:'/api',pathMatch:'full'},
  {path:'api',component:ApiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[ApiComponent]