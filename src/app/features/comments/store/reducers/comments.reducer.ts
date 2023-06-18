import { createReducer, on, Action } from "@ngrx/store";
import { CommentsModel } from "../../models/Comments";
import * as commentsAction from '../actions';


export interface State {
  comments: CommentsModel[];
  loadCommentsLoading: boolean;
  loadCommentsLoaded: boolean;
}

export const initialState: State = {
  comments: [],
  loadCommentsLoading: false,
  loadCommentsLoaded: false,
}

const commentsReducer = createReducer(
  initialState,
  on(commentsAction.loadComment, (state) => ({
    ...state,
    loadCommentsLoading: true,
    loadCommentsLoaded: false,
  })),
  on(commentsAction.loadCommentSuccess, (state, { comments }) => ({
    ...state,
    comments,
    loadCommentsLoading: false,
    loadCommentsLoaded: true
  })),
  on(commentsAction.loadCommentError, (state) => ({
    ...state,
    loadCommentsLoading: false,
    loadCommentsLoaded: false
  }))
)

export function reducer(state: State | undefined, action: Action) {
  return commentsReducer(state, action)
}

export const getComments = (state: State) => state.comments;
export const getLoadCommentsLoading = (state: State) => state.loadCommentsLoading;
export const getLoadCommentsLoaded = (state: State) => state.loadCommentsLoaded;
