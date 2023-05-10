import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SerpenteComponent } from './serpente/serpente.component';
import { ExeggutorComponent } from './exeggutor/exeggutor.component';

const routes: Routes = [
  {path : 'serpente', component:SerpenteComponent},
  {path : 'exeggutor', component:ExeggutorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
