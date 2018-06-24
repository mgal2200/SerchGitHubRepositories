import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { RepoGallery } from './repoGallery/repoGallery.component';
import { RepoComponent } from './repository/repo.component';
import { MarkedGalleryComponent } from './markedGallery/markedGallery.component';
@NgModule({
  declarations: [
    AppComponent,
    RepoGallery,
    RepoComponent,
     MarkedGalleryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
