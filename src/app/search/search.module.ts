import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { routes } from './routes';
import { RouterModule } from '@angular/router';
import {SearchService} from './search.service';
import {HttpModule} from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpModule
  ],
  declarations: [SearchComponent],
  providers: [SearchService]
})
export class SearchModule { }
