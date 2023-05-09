import { Component } from '@angular/core';
import { Root } from '../models/pokemon.models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-exeggutor',
  templateUrl: './exeggutor.component.html',
  styleUrls: ['./exeggutor.component.css']
})
export class ExeggutorComponent {
    data : Root | undefined;
    loading : boolean | undefined;
    o :Observable<Root> | undefined;
    constructor(public http: HttpClient) {}
    makeRequest(): void {
      console.log("here");
      this.loading = true;
      this.o = this.http.get<Root>('https://jsonplaceholder.typicode.com/posts/1');
      this.o.subscribe(this.getData);
    }
    getData = (d : Root) =>
    {
      this.data = (d);
      this.loading = false;
    }

  }



