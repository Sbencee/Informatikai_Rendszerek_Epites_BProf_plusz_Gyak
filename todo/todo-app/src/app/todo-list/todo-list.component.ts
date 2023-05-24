import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: any[] | undefined;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.fetchTodos();
  }

  fetchTodos() {
    this.http.get<any[]>('http://localhost:3000/todos')
      .subscribe(todos => {
        this.todos = todos;
      });
  }

  fetchExpiredTodos() {
    this.http.get<any[]>(`http://localhost:3000/expired`)
      .subscribe(todos => {
        this.todos = todos;
      });
  }

  editTodo(id: number) {
    this.router.navigate(['/update-todo', id]);
  }
  

  deleteTodo(id: number) {
    this.http.delete<any>(`http://localhost:3000/todos/${id}`)
      .subscribe(() => {
        // Remove the deleted todo from the todos array if it exists
        if (this.todos) {
          this.todos = this.todos.filter(todo => todo.id !== id);
        }
      });
  }
  
  
  viewTodoDetails(id: number) {
    this.router.navigate(['/todo-details', id]);
  }

  markTodoAsCompleted(id: number): Observable<any> {
    return this.http.put<any>(`http://localhost:3000/todos/${id}/complete`, null);
  }

  markTodoCompleted(id: number) {
    if (this.todos){

    
    const updatedTodoIndex = this.todos.findIndex(t => t && t.id === id);
    if (updatedTodoIndex > -1 && this.todos[updatedTodoIndex]) {
      this.todos[updatedTodoIndex].completed = true;
      this.markTodoAsCompleted(id)
        .subscribe(todo => {
          console.log(todo);
        });
    }}
  }
  markTodoAsUncompleted(id: number): Observable<any> {
    return this.http.put<any>(`http://localhost:3000/todos/${id}/uncomplete`, null);
  }

  markTodoUncompleted(id: number) {
    this.markTodoAsUncompleted(id)
      .subscribe(todo => {
        console.log(todo);
        // Update the todo in the todos array with the updated completed status
        if (this.todos){
        const updatedTodoIndex = this.todos.findIndex(t => t.id === todo.id);
        if (updatedTodoIndex > -1) {
          this.todos[updatedTodoIndex].completed = false;
        }
      }
      });
  }

}
