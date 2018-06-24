import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(appservice: AppService) {
    this.service = appservice;
  }
  service: AppService;

  term: string = '';
  search() {
    this.service.search(this.term);
  }
}
