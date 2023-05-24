import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent {
  todo: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {
    this.route.params.subscribe(params => {
      const { id } = params;
      this.fetchTodo(id);
    });
  }

  fetchTodo(id: number) {
    this.http.get<any>(`http://localhost:3000/todos/${id}`)
      .subscribe(todo => {
        this.todo = todo;
      });
  }

  updateTodo() {
    this.http.put<any>(`http://localhost:3000/todos/${this.todo.id}`, this.todo)
      .subscribe(updatedTodo => {
        console.log(updatedTodo);
        // Display success message if needed
        this.router.navigate(['/todos']);
      });
  }
}
