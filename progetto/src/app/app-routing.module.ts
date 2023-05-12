import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SerpenteComponent } from './Carte-Normali/serpente/serpente.component';
import { ExeggutorComponent } from './Pokemon/exeggutor/exeggutor.component';
import { PikachuComponent } from './Pokemon/pikachu/pikachu.component';
import { BulbasaurComponent } from './Pokemon/bulbasaur/bulbasaur.component';
import { GengarComponent } from './Pokemon/gengar/gengar.component';
import { GenericCarteComponent } from './generic-carte/generic-carte.component';
import { GenericPokemonComponent} from './generic-pokemon/generic-pokemon.component'

const routes: Routes = [
  
  {path:'generic/:id', component:GenericCarteComponent},
  {path:'generic/:id', component:GenericPokemonComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
