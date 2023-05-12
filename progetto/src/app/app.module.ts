import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SerpenteComponent } from './serpente/serpente.component';
import { HttpClientModule } from '@angular/common/http';
import { ExeggutorComponent } from './exeggutor/exeggutor.component';
import { PikachuComponent } from './pikachu/pikachu.component';
import { BulbasaurComponent } from './bulbasaur/bulbasaur.component';

@NgModule({
  declarations: [
    AppComponent,
    SerpenteComponent,
    ExeggutorComponent,
    PikachuComponent,
    BulbasaurComponent,
    
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
