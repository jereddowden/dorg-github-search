import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private username: string;
  private githubEndPoint = 'https://api.github.com/users/';

  constructor(private http: HttpClient) {}

  getUser(username: string) {
    return this.http.get(`${this.githubEndPoint}${username}`);
  }

  getRepos(username: string) {
    return this.http.get(`${this.githubEndPoint}${username}/repos`);
  }
}
