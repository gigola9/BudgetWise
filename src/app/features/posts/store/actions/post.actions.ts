import { createAction, props } from '@ngrx/store';
import { PostsModel } from '../../models/Posts';

export enum PostActionTypes {
  LOAD_POSTS = "LOAD_POSTS",
  LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS",
  LOAD_POSTS_ERROR = "LOAD_POSTS_ERROR"
}

export const loadPosts = createAction(
  PostActionTypes.LOAD_POSTS
);

export const loadPostsSuccess = createAction(
  PostActionTypes.LOAD_POSTS_SUCCESS,
  props<{ posts: PostsModel[] }>()
);

export const loadPostsError = createAction(
  PostActionTypes.LOAD_POSTS_ERROR
);
