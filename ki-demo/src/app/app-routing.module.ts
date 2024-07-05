import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EyeComponent} from "./eye/eye.component";
import {KidneyComponent} from "./kidney/kidney.component";



const routes: Routes = [
  { path: 'retinal-vessel-component', component: EyeComponent},
  { path: 'kidney-component', component: KidneyComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
