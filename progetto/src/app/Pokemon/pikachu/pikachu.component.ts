import { Component } from '@angular/core';
import { Pokemon, Tcg_data } from '../Pokemon.models/pokemon.models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pikachu',
  templateUrl: './pikachu.component.html',
  styleUrls: ['./pikachu.component.css']
})
export class PikachuComponent {
  title = 'pikachu';
  //@ts-ignore
  data : Pokemon = {};
  loading !: boolean;
  o = new Observable<Tcg_data>;
  constructor(public http: HttpClient) {

    console.log('here')
    this.loading = true;
    this.o = this.http.get<Tcg_data>('https://api.pokemontcg.io/v2/cards/cel25-7')
    this.o.subscribe(this.getData);
  }

  getData = (d : Tcg_data) =>
  {
    this.data = d.data;
    this.loading = false;
  }
}
