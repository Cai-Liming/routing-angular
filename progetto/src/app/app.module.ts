import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ExeggutorComponent } from './Pokemon/exeggutor/exeggutor.component';
import { PikachuComponent } from './Pokemon/pikachu/pikachu.component';
import { BulbasaurComponent } from './Pokemon/bulbasaur/bulbasaur.component';
import { GengarComponent } from './Pokemon/gengar/gengar.component';
import { SnorlaxComponent } from './Pokemon/snorlax/snorlax.component';
import { GenericPokemonComponent } from './generic-pokemon/generic-pokemon.component';

import { SerpenteComponent } from './Carte-Normali/serpente/serpente.component';
import { DragoComponent } from './Carte-Normali/drago/drago.component';
import { ScimmiaComponent } from './Carte-Normali/scimmia/scimmia.component';
import { OrsoComponent } from './Carte-Normali/orso/orso.component';
import { UomoComponent } from './Carte-Normali/uomo/uomo.component';
import { GenericCarteComponent } from './generic-carte/generic-carte.component';

@NgModule({
  declarations: [
    AppComponent,
    SerpenteComponent,
    ExeggutorComponent,
    PikachuComponent,
    BulbasaurComponent,
    GengarComponent,
    SnorlaxComponent,
    GenericPokemonComponent,
    DragoComponent,
    ScimmiaComponent,
    OrsoComponent,
    UomoComponent,
    GenericCarteComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
