import { Component } from '@angular/core';
import { Root } from './uomo.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-uomo',
  templateUrl: './uomo.component.html',
  styleUrls: ['./uomo.component.css']
})
export class UomoComponent {
  data : Root | undefined;
  loading : boolean | undefined;
  o :Observable<Root> | undefined;
  constructor(public http: HttpClient) {}
  makeRequest(): void {
    console.log("here");
    this.loading = true;
    this.o = this.http.get<Root>('https://api.scryfall.com/cards/named?fuzzy=bilbo-retired-burglar');
    this.o.subscribe(this.getData);
  }
  getData = (d : Root) =>
  {
    this.data = (d);
    this.loading = false;
  }

}