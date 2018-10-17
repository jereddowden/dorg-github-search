import { Component } from '@angular/core';
import { GithubService } from '../github.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  username: string;
  user: any[];
  repos: any[];
  starred: any[];
  error: any;
  currentIndex: number;

  constructor(private githubService: GithubService) {}

  toggleTab(index: number): void {
    this.currentIndex = index;
  }

  searchGithub(username: string): void {
    if (!username) {
      return;
    }

    this.error = '';
    this.username = username;

    this.githubService.getUserReposAndStarred(username).subscribe(
      (data: any) => {
        this.user = data[0];
        this.repos = data[1];
        this.starred = data[2];
      },
      (error: Error) => {
        this.error = error;
        this.user = null;
        this.repos = null;
        this.starred = null;
      }
    );
  }
}
