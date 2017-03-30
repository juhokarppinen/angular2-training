import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { routes } from './routes';
import { RouterModule } from '@angular/router';
import {SearchService} from './search.service';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SearchComponent],
  providers: [SearchService]
})
export class SearchModule { }
