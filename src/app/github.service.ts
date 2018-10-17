import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, forkJoin } from 'rxjs';
import { catchError } from 'rxjs/operators';

const GITHUB_API_URL = 'https://api.github.com/users/';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private username: string;

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`GitHub returned ${error.status}, ` + `Error was: ${error.error.message}`);
    }
    return throwError(
      `Whoops! We either couldn't find that user or something went wrong on our end. Please try again later.`
    );
  }

  getUser(username: string): Observable<any> {
    return this.http.get(`${GITHUB_API_URL}${username}`).pipe(catchError(this.handleError));
  }

  getRepos(username: string): Observable<any> {
    return this.http.get(`${GITHUB_API_URL}${username}/repos`).pipe(catchError(this.handleError));
  }

  getStarred(username: string): Observable<any> {
    return this.http.get(`${GITHUB_API_URL}${username}/starred`).pipe(catchError(this.handleError));
  }

  getUserReposAndStarred(username: string): Observable<any> {
    return forkJoin(this.getUser(username), this.getRepos(username), this.getStarred(username));
  }
}
