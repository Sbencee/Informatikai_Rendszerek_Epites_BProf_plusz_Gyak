import { Component } from '@angular/core';
import { GithubApiService } from '../githubapi.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent {
  users: any[] = [];
  searchQuery: string = '';

  constructor(private githubApiService: GithubApiService) { }

  searchUsers() {
    this.githubApiService.searchUsers(this.searchQuery)
      .subscribe(response => {
        this.users = response.items;
      });
  }
}
