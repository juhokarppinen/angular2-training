import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { SearchComponent } from './search.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SearchService} from '../search.service';
import {By} from '@angular/platform-browser';
import {Observable} from 'rxjs/Rx';


// Mock service for mock provider. Requires actual SearchService import to work.
class FakeSearchService {
  search(term) {
    return Observable.of([
      {
        full_name: 'Result name',
        html_url: 'http://url'
      }
    ]);
  }
}


describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let service: SearchService; // Used with spyOn.

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [ ReactiveFormsModule ],
      providers: [ {provide: SearchService, useClass: FakeSearchService} ] // Mock provider.
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = fixture.debugElement.injector.get(SearchService);
    spyOn(service, 'search').and.callThrough();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a header', () => {
    const header = fixture.debugElement.query(By.css('h1')).nativeElement.textContent; // Import By from @angular
    expect(header).toContain('GitHub Search');
  });

  it('should query search service', fakeAsync(() => {
    component.control.setValue('Searching something');
    tick(2000); // Arbitrary delay. Can be used in fakeAsync.
    fixture.detectChanges();

    const item = fixture.debugElement.query(By.css('a')).nativeElement;
    expect(item.text).toBe('Result name');
    expect(service.search).toHaveBeenCalledWith('Searching something'); // Spied method.
  }));
});
