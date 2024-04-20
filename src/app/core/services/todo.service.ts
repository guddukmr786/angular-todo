import { Injectable } from '@angular/core';
import { ITodo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor() { }
  todos:ITodo[]=[
    {
      id: 1,
      title: 'Breakfast',
      description: 'Test description',
      status: 'OPEN'
    },
    {
      id: 2,
      title: 'Lunch time',
      description: 'Test description',
      status: 'OPEN'
    }
  ]
  getAllTodo(){
    return this.todos;
  }
}
