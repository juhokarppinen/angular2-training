import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  newName: string;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  addTodo() {
    this.todoService.todos.push({name: this.newName, done: false});
    this.newName = '';
  }
}
