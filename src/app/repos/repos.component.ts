import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent {
  @Input()
  repos: any;
  @Input()
  type: string;

  constructor() {}
}
