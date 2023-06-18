import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPostsFromApi() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    return this.http.get(url);
  }
}
