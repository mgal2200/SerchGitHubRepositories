import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { RepoResult } from './models/repoResult';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';



@Injectable()
export class AppService {
  private repositories: Subject<RepoResult[]> = new Subject<RepoResult[]>();
  constructor(private http: Http) {
    this.repositories.next(null);
  }
  get baseUrl(): string {
    return 'http://localhost:52142/api'
  }
  search(term): void {
    this.http.get(`${this.baseUrl}/search?term=${term}`)
      .subscribe(res => {
        let ret = <RepoResult[]>res.json();
        this.repositories.next(ret);
      });
  }
  getRepositories(): Observable<RepoResult[]> {
    return this.repositories.asObservable();
  }
  getMarkedRepos(): Observable<RepoResult[]> {
    return this.http.get(this.baseUrl + '/GetBookmarks')
      .map(res =>  res.json());
  } 
  mark(repo: RepoResult): Observable<RepoResult> {
    return this.http.post(`${this.baseUrl}/bookmark`,repo ).
      map(res => <RepoResult>res.json());
   }
  //getWait(): Observable<Response> {
  //  return this.http.get(`${this.baseUrl}turn/getWaiting`);
  //}
  //InsertToQueue(name: string): Observable<Response> {
  //  return this.http.get(`${this.baseUrl}turn/InsertToQueue?name=${name}`)

  //}
  //setWaiting(turnID: any) {
  //  return this.http.post(`${this.baseUrl}turn/setWaiting`, turnID);
  //}
  //setCompleted(turnID: number): Observable<Response> {
  //  return this.http.get(`${this.baseUrl}turn/setCompleted?turenid=${turnID}`)
  //}
  //fetchNext(): Observable<Response> {
  //  return this.http.get(`${this.baseUrl}turn/fetchNext`);
}


