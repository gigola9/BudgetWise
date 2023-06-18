import { createFeatureSelector, createSelector } from '@ngrx/store';
import { getLoadPostsLoaded, getLoadPostsLoading, getPosts } from '../reducers/post.reducers';
import { State } from '../reducers'



// export const getPostsState = createFeatureSelector<State>('posts');

// export const selectPosts = createSelector(
//   getPostsState,
//   getPosts
// )


export const getPostsState = createFeatureSelector<State>('posts');

export const getPostsInformationState =  createSelector(
  getPostsState,
  (state: State) => state.postsInformation
)

export const selectPosts = createSelector(
  getPostsInformationState,
  getPosts
)

export const selectLoadPostsLoaded = createSelector(
  getPostsInformationState,
  getLoadPostsLoaded
)
