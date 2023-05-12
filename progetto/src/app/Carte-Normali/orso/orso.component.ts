import { Component } from '@angular/core';
import { Root } from '../orso/orso.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-orso',
  templateUrl: './orso.component.html',
  styleUrls: ['./orso.component.css']
})
export class OrsoComponent {
  data : Root | undefined;
  loading : boolean | undefined;
  o :Observable<Root> | undefined;
  constructor(public http: HttpClient) {}
  makeRequest(): void {
    console.log("here");
    this.loading = true;
    this.o = this.http.get<Root>('https://scryfall.com/card/dtk/183/dragon-scarred-bear');
    this.o.subscribe(this.getData);
  }
  getData = (d : Root) =>
  {
    this.data = (d);
    this.loading = false;
  }

}
