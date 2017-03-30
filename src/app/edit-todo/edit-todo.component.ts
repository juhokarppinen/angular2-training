import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {TodoService} from '../todo.service';
import {Item} from '../item';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {

  todoItem: Item;
  itemName: string;
  itemAssignee: string;

  constructor(private route: ActivatedRoute,
              private todoService: TodoService,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.todoItem = this.todoService.todos[params['index']];
      this.itemName = this.todoItem.name;
      this.itemAssignee = this.todoItem.assignee;
    });
  }

  save() {
    this.todoItem.name = this.itemName;
    this.todoItem.assignee = this.itemAssignee;
    this.router.navigate(['/todos']);
  }
}
