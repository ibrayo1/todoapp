import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];
  message: string;

  // todos = [
  //   new Todo(1, 'Learn to Dance', false, new Date()),
  //   new Todo(2, 'Become an Expert at Angular', false, new Date()),
  //   new Todo(3, 'Visit Australia', false, new Date())
  // ];

  constructor(
    private router: Router,
    private todoService: TodoDataService
  ) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos(): void {
    this.todoService.retrieveAllTodos('in28Minutes').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    );
  }

  deleteTodo(id: number): any {
    console.log(`delete todo ${id}`);
    this.todoService.deleteTodo('in28Minutes', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} Successful!`;
        this.refreshTodos();
      }
    );
  }

  updateTodo(id: number): any {
    console.log(`update ${id}`);
    this.router.navigate(['todos', id]);
  }

  addTodo(): any{
    this.router.navigate(['todos', -1]);
  }
}
