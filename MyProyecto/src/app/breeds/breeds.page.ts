import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.page.html',
  styleUrls: ['./breeds.page.scss'],
})
export class BreedsPage implements OnInit {

  breedsData: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchBreedsData();
  }

  fetchBreedsData() {
    this.http.get('https://api.thedogapi.com/v1/breeds').subscribe((response: any) => {
      console.log(response);

      this.breedsData = this.transformData(response);       
    });
  }

  transformData(data: any): any[] {
    const result = [];
    for (const key in data) { 
      if (data.hasOwnProperty(key) && typeof data[key] === 'object') 
      {
          result.push(data[key]); 
      }
    } 
    return result;
  }
}
