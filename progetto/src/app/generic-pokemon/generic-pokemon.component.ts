import { Component } from '@angular/core';
import { Pokemon, Tcg_data } from '../Pokemon/Pokemon.models/pokemon.models';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-generic-pokemon',
  templateUrl: './generic-pokemon.component.html',
  styleUrls: ['./generic-pokemon.component.css']
})
export class GenericPokemonComponent {
  chiama!: String | null
  data: Pokemon | undefined;
  loading: boolean | undefined;
  obs_chiama : Observable<Tcg_data> | undefined;
  constructor(private route: ActivatedRoute, public http: HttpClient) {
    this.route.paramMap.subscribe(this.getRouterParam);
  }
  getRouterParam = (params: ParamMap) =>
  {
    this.chiama = params.get('id'); //Ottengo l'id dalla ParamMap
    console.log (this.chiama); 
    this.obs_chiama = this.http.get<Tcg_data>('https://api.pokemontcg.io/v2/cards/' + this.chiama);
    this.obs_chiama.subscribe(this.getData)
  }
  getData = (d: Tcg_data) => {
    this.data = d.data!;
    this.loading = false;
  }
}  
