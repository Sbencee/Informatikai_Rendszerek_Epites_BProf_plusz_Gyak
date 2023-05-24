// RepositoryDataSheetComponent
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GithubApiService } from '../githubapi.service';

@Component({
  selector: 'app-repository-data-sheet',
  templateUrl: './repository-data-sheet.component.html',
  styleUrls: ['./repository-data-sheet.component.css']
})
export class RepositoryDataSheetComponent implements OnInit {
  repo: any;

  constructor(
    private route: ActivatedRoute,
    private githubApiService: GithubApiService
  ) { }

  ngOnInit() {
    const owner = this.route.snapshot.paramMap.get('owner');
    const repo = this.route.snapshot.paramMap.get('repo');
    if (owner && repo) {
      this.githubApiService.getRepository(owner, repo).subscribe(repo => this.repo = repo);
    }
  }
}
