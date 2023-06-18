import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, switchMap, map, mergeMap, withLatestFrom, delay } from 'rxjs/operators';
import { State } from '../reducers/post.reducers';
import { Store, select } from '@ngrx/store';
import { PostsService } from '../../services/posts.service';

import * as postAction from "../actions";
import { of } from 'rxjs';

@Injectable()
export class PostEffect {
  constructor(
    private actions$: Actions,
    private postsService: PostsService
  ) {}

  // loadPosts$ = createEffect((): any => {
  //   this.actions$.pipe(
  //     ofType(postAction.loadPosts),
  //     switchMap((): any => {
  //       this.postsService.getPostsFromApi().pipe(
  //         map((data: any) => {
  //           if (data) {
  //             return postAction.loadPostsSuccess({
  //               posts: data
  //             });
  //           } else {
  //             return postAction.loadPostsError();
  //           }
  //         }),
  //         catchError(():any => of(postAction.loadPostsError))
  //       )
  //     })
  //   );
  // })

  loadPosts$ = createEffect(() => this.actions$.pipe(
    ofType(postAction.loadPosts),
    switchMap(() =>
    this.postsService.getPostsFromApi()
    .pipe(
      map((data: any) => {
        if (data) {
          return postAction.loadPostsSuccess({
            posts: data
          });
        } else {
          return postAction.loadPostsError();
        }
      }),
      catchError(() => of(postAction.loadPostsError()))
    ))
  ))
}
