import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SerpenteComponent } from './serpente/serpente.component';
import { ExeggutorComponent } from './exeggutor/exeggutor.component';
import { PikachuComponent } from './pikachu/pikachu.component';
import { BulbasaurComponent } from './bulbasaur/bulbasaur.component';

const routes: Routes = [
  {path : 'serpente', component:SerpenteComponent},
  {path : 'exeggutor', component:ExeggutorComponent},
  {path : 'pikachu', component:PikachuComponent},
  {path : 'bulbasaur', component:BulbasaurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
