import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { CommentsService } from "../../services/comments.service";
import * as commentsActions from '../actions';


@Injectable()
export class CommentEffect {
  constructor(
    private actions$: Actions,
    private commentService: CommentsService
  ) {}

  loadComments$ = createEffect(() => this.actions$.pipe(
    ofType(commentsActions.loadComment),
    switchMap(() =>
    this.commentService.getCommentsData()
    .pipe(
      map((data: any) => {
        if(data) {
          return commentsActions.loadCommentSuccess({
            comments: data
          });
        }
        else {
          return commentsActions.loadCommentError();
        }
      }),
      catchError(() => of(commentsActions.loadCommentError()))
    ))
  ))
}
