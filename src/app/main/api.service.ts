import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly BASE_API_URL = 'https://hacker-news.firebaseio.com/v0';

  constructor(private http: HttpClient) {
  }

  getTopStoriesIDs(): Observable<object> {
    return this.http.get(`${this.BASE_API_URL}/topstories.json`)
  }

  getItem(id: number): Observable<object> {
    return this.http.get(`${this.BASE_API_URL}/item/${id}.json`)
  }
}
