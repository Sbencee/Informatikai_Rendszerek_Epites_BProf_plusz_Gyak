import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  private baseUrl = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  searchUsers(query: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search/users?q=${query}`);
  }

  getUser(username: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/${username}`);
  }
  
  getUserRepos(username: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/users/${username}/repos`);
  }

  searchRepositories(query: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search/repositories?q=${query}`);
  }
  
  getRepository(owner: string, repo: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/repos/${owner}/${repo}`);
  }
}
