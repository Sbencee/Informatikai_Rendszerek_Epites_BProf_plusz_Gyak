import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  todo: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fetchTodoDetails(+id);
    }
  }

  fetchTodoDetails(id: number) {
    this.http.get<any>(`http://localhost:3000/todos/${id}`)
      .subscribe(todo => {
        this.todo = todo;
      });
  }
}
