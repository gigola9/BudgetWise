import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  getCommentsData() {
    const url = "https://jsonplaceholder.typicode.com/comments"
    return this.http.get(url);
  }
}
