import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/app.constants';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveAllTodos(username: string): any {
    return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`);
  }

  deleteTodo(username: string, id: number): any{
    return this.http.delete(`${API_URL}/users/${username}/todos/${id}`);
  }

  retrieveTodo(username: string, id: number): any{
    return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(username: string, id: number, todo: Todo): any {
    return this.http.put(`${API_URL}/users/${username}/todos/${id}`, todo);
  }

  createTodo(username: string, todo: Todo): any {
    return this.http.post(`${API_URL}/users/${username}/todos`, todo);
  }

}
