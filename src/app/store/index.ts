import * as fromPosts from "../features/posts/store";
import * as fromComments from "../features/comments/store";

import { ActionReducerMap, MetaReducer, combineReducers, Action } from '@ngrx/store';
import { InjectionToken } from "@angular/core";
import { environment } from "src/environments/environment";


export interface State {
  posts: fromPosts.State,
  comments: fromComments.State
}

export const reducers = new InjectionToken<ActionReducerMap<State, Action>>('root', {
  factory: () => ({
    posts: combineReducers<fromPosts.State>({
      ...fromPosts.reducers
    }),
    comments: combineReducers<fromComments.State>({
      ...fromComments.reducers
    })
  })
});

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
