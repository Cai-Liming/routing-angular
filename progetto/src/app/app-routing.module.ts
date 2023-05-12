import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SerpenteComponent } from './serpente/serpente.component';
import { ExeggutorComponent } from './Pokemon/exeggutor/exeggutor.component';
import { PikachuComponent } from './pikachu/pikachu.component';
import { BulbasaurComponent } from './Pokemon/bulbasaur/bulbasaur.component';
import { GengarComponent } from './Pokemon/gengar/gengar.component';

const routes: Routes = [
  {path : 'serpente', component:SerpenteComponent},
  {path : 'exeggutor', component:ExeggutorComponent},
  {path : 'pikachu', component:PikachuComponent},
  {path : 'bulbasaur', component:BulbasaurComponent}
  {path : 'gengar', component:GengarComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
