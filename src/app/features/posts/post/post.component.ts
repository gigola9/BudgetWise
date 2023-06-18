import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PostsModel } from '../models/Posts';
import { loadPosts } from '../store';
import { State } from '../store/reducers/post.reducers';
import { selectPosts } from '../store/selectors/post.selectors';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts$!: Observable<PostsModel[]>;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.store.dispatch(loadPosts());

    this.posts$ = this.store.pipe(select(selectPosts));
  }

}
