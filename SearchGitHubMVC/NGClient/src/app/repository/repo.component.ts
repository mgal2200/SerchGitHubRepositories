import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app.service';
import { RepoResult } from '../models/repoResult';

@Component({
  selector: 'repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent {

  service: AppService;
  constructor(appservice: AppService) {
    this.service = appservice;
  }
  repos: RepoResult[]
  @Input() repo: RepoResult;
  mark(repo: RepoResult) {
    this.service.mark(repo).subscribe(data => {
      repo.Marked = true;
    });
  }
}
