import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SerpenteComponent } from './serpente/serpente.component';

const routes: Routes = [
  {path : 'serpente', component:SerpenteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
