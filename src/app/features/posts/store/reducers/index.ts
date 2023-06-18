import { ActionReducerMap } from "@ngrx/store";

import * as fromPosts from './post.reducers';

export interface State {
  postsInformation: fromPosts.State
};

export const reducers: ActionReducerMap<State> = {
  postsInformation: fromPosts.reducer
};


export * from './post.reducers';
