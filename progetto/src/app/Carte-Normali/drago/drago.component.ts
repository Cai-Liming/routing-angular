import { Component } from '@angular/core';
import { Root } from './drago.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-drago',
  templateUrl: './drago.component.html',
  styleUrls: ['./drago.component.css']
})
export class DragoComponent {
  data : Root | undefined;
  loading : boolean | undefined;
  o :Observable<Root> | undefined;
  constructor(public http: HttpClient) {}
  makeRequest(): void {
    console.log("here");
    this.loading = true;
    this.o = this.http.get<Root>('https://api.scryfall.com/cards/named?fuzzy=gemrazer');
    this.o.subscribe(this.getData);
  }
  getData = (d : Root) =>
  {
    this.data = (d);
    this.loading = false;
  }

}
