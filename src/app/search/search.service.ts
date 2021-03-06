import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx'; // Required for ReactiveX operators etc...
import {Observable} from 'rxjs/Rx';

@Injectable()
export class SearchService {
  constructor(private http: Http) { }

  search(term): Observable<any[]> {
    return this.http.get(`https://api.github.com/search/repositories?q=${term}`)
      .map(res => res.json().items) // Parse result as JSON and get items from them
      .catch(() => Observable.of([])); // Catch all errors and return an empty observable array.
  }
}
