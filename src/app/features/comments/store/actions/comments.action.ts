import { createAction, props } from "@ngrx/store";
import { CommentsModel } from "../../models/Comments";


export enum CommentActionTypes {
  LOAD_COMMENT = 'LOAD_COMMENT',
  LOAD_COMMENT_SUCCESS = 'LOAD_COMMENT_SUCCESS',
  LOAD_COMMENT_ERROR = 'LOAD_COMMENT_ERROR'
}

export const loadComment = createAction(
  CommentActionTypes.LOAD_COMMENT
);

export const loadCommentSuccess = createAction(
  CommentActionTypes.LOAD_COMMENT_SUCCESS,
  props<{ comments: CommentsModel[] }>()
);

export const loadCommentError = createAction(
  CommentActionTypes.LOAD_COMMENT_ERROR
);

