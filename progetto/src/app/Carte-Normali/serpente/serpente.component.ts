import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Root } from './serpente.model';

@Component({
  selector: 'app-serpente',
  templateUrl: './serpente.component.html',
  styleUrls: ['./serpente.component.css']
})
export class SerpenteComponent {
  data : Root | undefined;
  loading : boolean | undefined;
  o :Observable<Root> | undefined;
  constructor(public http: HttpClient) {}
  makeRequest(): void {
    console.log("here");
    this.loading = true;
    this.o = this.http.get<Root>('https://api.scryfall.com/cards/named?fuzzy=chishiro-the-shattered-blade');
    this.o.subscribe(this.getData);
  }
  getData = (d : Root) =>
  {
    this.data = (d);
    this.loading = false;
  }

}


