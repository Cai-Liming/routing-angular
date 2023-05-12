import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-generic-carte',
  templateUrl: './generic-carte.component.html',
  styleUrls: ['./generic-carte.component.css']
})
export class GenericCarteComponent {
  chiama!: String | null
  data = {}
  loading: boolean | undefined;
  //@ts-ignore
  obs_chiama : Observable<> | undefined;
  constructor(private route: ActivatedRoute, public http: HttpClient) {
    this.route.paramMap.subscribe(this.getRouterParam);
  }
  getRouterParam = (params: ParamMap) =>
  {
    this.chiama = params.get('id'); //Ottengo l'id dalla ParamMap
    console.log (this.chiama); 
    //@ts-ignore
    this.obs_chiama = this.http.get('https://api.scryfall.com/cards/named?fuzzy=' + this.chiama);
    this.obs_chiama.subscribe(this.getData)
  }
  //@ts-ignore
  getData = (d) =>
   {
    //@ts-ignore
     this.data = (d);
     this.loading = false;
   }
}
