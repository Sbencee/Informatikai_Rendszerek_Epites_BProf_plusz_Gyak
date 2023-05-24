import { Component } from '@angular/core';
import { GithubApiService } from '../githubapi.service';

@Component({
  selector: 'app-repository-search',
  templateUrl: './repository-search.component.html',
  styleUrls: ['./repository-search.component.css']
})
export class RepositorySearchComponent {
  repositories: any[] = [];
  searchQuery: string = '';

  constructor(private githubApiService: GithubApiService) { }

  searchRepositories() {
    this.githubApiService.searchRepositories(this.searchQuery)
      .subscribe(response => {
        this.repositories = response.items;
      });
  }
}
