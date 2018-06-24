import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { RepoResult } from '../models/repoResult';

@Component({
  selector: 'repo-gallery',
  templateUrl: './repoGallery.component.html',
  styleUrls: ['./repoGallery.component.css']
})
export class RepoGallery implements OnInit {
  ngOnInit(): void {
    this.service.getRepositories().subscribe(data => {
      this.repos = data;
    })
  }
  service: AppService;
  constructor(appservice: AppService) {
    this.service = appservice;
  }
  term: string;
  repos: any;
  mark(repo: RepoResult) {
    this.service.mark(repo).subscribe(data => {

      repo.Marked = true;
     });
   }
}
