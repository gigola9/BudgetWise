import { ActionReducerMap } from '@ngrx/store';
import * as fromComments from './comments.reducer';

export interface State {
  commentsInformation: fromComments.State
}

export const reducers: ActionReducerMap<State> = {
  commentsInformation: fromComments.reducer
}

export * from './comments.reducer';
