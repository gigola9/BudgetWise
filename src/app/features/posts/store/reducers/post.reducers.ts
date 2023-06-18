import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import { PostsModel } from '../../models/Posts';
import * as postAction from '../actions';

export interface State {
  posts: PostsModel[],
  loadPostsLoading: boolean;
  loadPostsLoaded: boolean;
}

export const initialState: State = {
  posts: [],
  loadPostsLoading: false,
  loadPostsLoaded: false
}

const postsReducer = createReducer(
  initialState,
  on(postAction.loadPosts, (state) => ({
    ...state,
    loadPostsLoading: true,
    loadPostsLoaded: false
  })),
  on(postAction.loadPostsSuccess, (state, { posts }) => ({
    ...state,
    posts,
    loadPostsLoaded: true,
    loadPostsLoading: false
  })),
  on(postAction.loadPostsError, (state) => ({
    ...state,
    loadPostsLoading: false,
    loadPostsLoaded: false
  }))
)

export function reducer(state: State | undefined, action: Action) {
  return postsReducer(state, action);
}


export const getPosts = (state: State) => state.posts;
export const getLoadPostsLoading = (state: State) => state.loadPostsLoading;
export const getLoadPostsLoaded = (state: State) => state.loadPostsLoaded;
