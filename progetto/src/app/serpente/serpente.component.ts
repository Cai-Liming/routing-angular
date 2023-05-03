import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-serpente',
  templateUrl: './serpente.component.html',
  styleUrls: ['./serpente.component.css']
})
export class SerpenteComponent {
  loading : boolean = false;
  constructor(public http: HttpClient) {
    console.log("dasf");
    
    this.loading = true;
    http.get('https://api.scryfall.com/cards/named?fuzzy=chishiro-the-shattered-blade').subscribe(d => {
      console.log(d);
      
    });
  }
  trova() : void{

  }
}
