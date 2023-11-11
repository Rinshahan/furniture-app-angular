import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchData: string;

  constructor() { }

  search() {
    console.log(this.searchData);

  }
}
