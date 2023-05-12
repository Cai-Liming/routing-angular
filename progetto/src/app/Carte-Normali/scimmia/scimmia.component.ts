import { Component } from '@angular/core';
import { Root } from './scimmia.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-scimmia',
  templateUrl: './scimmia.component.html',
  styleUrls: ['./scimmia.component.css']
})
export class ScimmiaComponent {
  data : Root | undefined;
  loading : boolean | undefined;
  o :Observable<Root> | undefined;
  constructor(public http: HttpClient) {}
  makeRequest(): void {
    console.log("here");
    this.loading = true;
    this.o = this.http.get<Root>('https://api.scryfall.com/cards/named?fuzzy=declare-dominance');
    this.o.subscribe(this.getData);
  }
  getData = (d : Root) =>
  {
    this.data = (d);
    this.loading = false;
  }

}
