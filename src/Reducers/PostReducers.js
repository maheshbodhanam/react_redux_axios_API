import { ActionTypes } from "../Constants/ActionTypes";

const intialState = {
  posts: [],
};
export const PostReducers = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_ALL_POSTS:
      return { ...state, posts: payload };
    default:
      return state;
  }
};

export const singlePostReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_SINGLE_POST:
      return { ...state, ...payload };
    default:
      return state;
  }
};
