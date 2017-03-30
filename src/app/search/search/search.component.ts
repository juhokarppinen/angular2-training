import { Component, OnInit } from '@angular/core';
import {SearchService} from '../search.service';
import {Observable} from 'rxjs/Rx';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // searchTerm: string; // Uncomment if you use [(ngModel)] in the template.
  // items: any[];       // Uncomment if you subscribe to the Observable in the search method.

  searchStream: Observable<any[]>; // This observable is subscribed to in the template using the async pipe.
  control: FormControl = new FormControl();

  // Inject dependencies via the constructor.
  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchStream = this.control.valueChanges           // Get inputs whenever the value changes
      .debounceTime(1000)                                   // Wait until event stream ends
      .distinctUntilChanged()                               // Don't emit two similar events consecutively
      .switchMap(term => term ? this.searchService.search(term) : Observable.of([])); // Get the actual search results
                                                                                      // or return an empty observable.
  }

  // Called by the button which is commented out.
  search(term: string) {
    // Here's a bad pattern where you subscribe to an observable directly...
    // this.searchService.search(term).subscribe(items => this.items = items);

    // Better to just get the observable and use asyncPipe.
    this.searchStream = this.searchService.search(term);
  }
}

