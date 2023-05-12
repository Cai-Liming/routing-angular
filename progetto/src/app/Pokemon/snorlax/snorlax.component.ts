import { Component } from '@angular/core';
import { Pokemon, Tcg_data } from '../Pokemon.models/pokemon.models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-snorlax',
  templateUrl: './snorlax.component.html',
  styleUrls: ['./snorlax.component.css']
})
export class SnorlaxComponent {
  title = 'snorlax';
  //@ts-ignore
  data : Pokemon = {};
  loading !: boolean;
  o = new Observable<Tcg_data>;
  constructor(public http: HttpClient) {

    console.log('here')
    this.loading = true;
    this.o = this.http.get<Tcg_data>('https://api.pokemontcg.io/v2/cards/sm10-158')
    this.o.subscribe(this.getData);
  }

  getData = (d : Tcg_data) =>
  {
    this.data = d.data;
    this.loading = false;
  }
}
