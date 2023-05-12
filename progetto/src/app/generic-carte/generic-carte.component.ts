import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CT_data } from '../Carte-Normali/serpente/serpente.model';

@Component({
  selector: 'app-generic-carte',
  templateUrl: './generic-carte.component.html',
  styleUrls: ['./generic-carte.component.css']
})
export class GenericCarteComponent {
  chiama!: String | null
  data: CT_data | undefined;
  loading: boolean | undefined;
  obs_chiama : Observable<CT_data> | undefined;
  constructor(private route: ActivatedRoute, public http: HttpClient) {
    this.route.paramMap.subscribe(this.getRouterParam);
  }
  getRouterParam = (params: ParamMap) =>
  {
    this.chiama = params.get('id'); //Ottengo l'id dalla ParamMap
    console.log (this.chiama); 
    this.obs_chiama = this.http.get<CT_data>('https://api.scryfall.com/cards/named?fuzzy=' + this.chiama);
    this.obs_chiama.subscribe(this.getData)
  }
  getData = (d: CT_data) => {
    this.data = (d);
    this.loading = false;
  }
}