import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todo/todo.component';
import {TodoService} from './todo.service';
import {routes} from './routes';
import {RouterModule} from '@angular/router';
import { EditTodoComponent } from './edit-todo/edit-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoComponent,
    EditTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
