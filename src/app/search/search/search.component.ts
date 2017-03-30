import { Component, OnInit } from '@angular/core';
import {SearchService} from '../search.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // searchTerm: string; // Uncomment if you use [(ngModel)] in the template.
  // items: any[]; // Uncomment if you subscribe to the Observable in the search method.
  searchStream: Observable<any[]>; // This observable is subscribed to in the template using the async pipe.

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  search(term: string) {
    // Here's a bad pattern where you subscribe to an observable directly...
    // this.searchService.search(term).subscribe(items => this.items = items);
    this.searchStream = this.searchService.search(term);
  }
}

