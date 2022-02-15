import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithuberService {
  apiUrl = environment.apiUrl;
  private username: string;
  private repo: string;

  constructor(private http: HttpClient) { 
    console.log("ready");
    this.username = "conceptacherono";
    this.repo = "";
  }

  getUser(username:any):Observable<any> {
    return this.http.get('https://api.github.com/users/conceptacherono');

  }
  getRepos(username:any): Observable<any> {
    return this.http.get('https://api.github.com/users/conceptacherono/repos');
  }
}
