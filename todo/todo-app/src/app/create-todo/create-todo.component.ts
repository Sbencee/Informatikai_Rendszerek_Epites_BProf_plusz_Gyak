import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent {
  newTodo = {
    title: '',
    description: '',
    deadline: '',
    completed: false
  };

  constructor(private http: HttpClient) {}

  createTodo() {
    this.http.post<any>('http://localhost:3000/todos', this.newTodo)
      .subscribe(todo => {
        console.log(todo);
        // Clear form fields and display success message if needed
        this.newTodo = {
          title: '',
          description: '',
          deadline: '',
          completed: false
        };
      });
  }
}