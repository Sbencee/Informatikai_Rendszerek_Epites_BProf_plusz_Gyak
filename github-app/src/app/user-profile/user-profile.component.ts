// UserProfileComponent
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GithubApiService } from '../githubapi.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: any;
  repos: any[] | undefined;

  constructor(
    private route: ActivatedRoute,
    private githubApiService: GithubApiService
  ) { }

  ngOnInit() {
    const username = this.route.snapshot.paramMap.get('username');
    if (username) {
      this.githubApiService.getUser(username).subscribe(user => this.user = user);
      this.githubApiService.getUserRepos(username).subscribe(repos => this.repos = repos);
    }
  }
}
