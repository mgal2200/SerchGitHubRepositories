import { Component, OnInit } from '@angular/core';
import { RepoResult } from '../models/repoResult';
import { AppService } from '../app.service';

@Component({
  selector: 'marked-repos',
  templateUrl: './markedGallery.component.html',
  styleUrls: ['./markedGallery.component.css']
})
export class MarkedGalleryComponent implements OnInit {
  service: AppService;
  constructor(appservice: AppService) {
    this.service = appservice;
  }
  ngOnInit(): void {
    setInterval(() => {
      this.getMarkedRepos();
    }, 1000);
  }
  repos: RepoResult[];

  getMarkedRepos() {
    this.service.getMarkedRepos().subscribe(data => {
      this.repos = data;
    })
  }
}
