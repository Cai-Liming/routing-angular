import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScimiaComponent } from './scimia/scimia.component';
import { OrsoComponent } from './orso/orso.component';
import { SerpenteComponent } from './serpente/serpente.component';
import { DinosauroComponent } from './dinosauro/dinosauro.component';

@NgModule({
  declarations: [
    AppComponent,
    ScimiaComponent,
    OrsoComponent,
    SerpenteComponent,
    DinosauroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
