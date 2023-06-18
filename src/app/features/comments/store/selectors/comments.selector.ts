import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from '../reducers';
import * as fromComments from '../reducers';

export const getCommentsState = createFeatureSelector<State>("comments");

export const getCommentsInformation = createSelector(
  getCommentsState,
  (state: fromComments.State) => state.commentsInformation
);

export const selectComments = createSelector(
  getCommentsInformation,
  fromComments.getComments
);

export const selectCommentsLoaded = createSelector(
  getCommentsInformation,
  fromComments.getLoadCommentsLoaded
);
