import { Injectable } from '@angular/core';
import {Item} from './item';

@Injectable()
export class TodoService {

  todos: Item[] = [
  {
     name: 'clean the kitchen',
     done: false
     },
     {
     name: 'buy groceries',
     done: false
     },
     {
     name: 'do the laundry',
     done: false
     }
  ];

  constructor() { }

}
