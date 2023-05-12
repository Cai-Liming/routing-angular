import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SerpenteComponent } from './serpente/serpente.component';
import { HttpClientModule } from '@angular/common/http';
import { ExeggutorComponent } from './Pokemon/exeggutor/exeggutor.component';
import { PikachuComponent } from './pikachu/pikachu.component';
import { BulbasaurComponent } from './Pokemon/bulbasaur/bulbasaur.component';
import { GengarComponent } from './Pokemon/gengar/gengar.component';
import { SnorlaxComponent } from './Pokemon/snorlax/snorlax.component';
import { GenericPokemonComponent } from './generic-pokemon/generic-pokemon.component';

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
