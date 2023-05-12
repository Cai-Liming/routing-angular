import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon, Tcg_data } from '../Pokemon.models/pokemon.models';

@Component({
  selector: 'app-gengar',
  templateUrl: './gengar.component.html',
  styleUrls: ['./gengar.component.css']
})
export class GengarComponent {
  title = 'gengar';
  //@ts-ignore
  data : Pokemon = {};
  loading !: boolean;
  o = new Observable<Tcg_data>;
  constructor(public http: HttpClient) {

    console.log('here')
    this.loading = true;
    this.o = this.http.get<Tcg_data>('https://api.pokemontcg.io/v2/cards/pl4-97')
    this.o.subscribe(this.getData);
  }

  getData = (d : Tcg_data) =>
  {
    this.data = d.data;
    this.loading = false;
  }
}
