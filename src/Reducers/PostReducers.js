import { ActionTypes } from "../Constants/ActionTypes";

const intialState = {
  posts: [],
};
export const GetAllPostsReducer = (state = intialState, { type, payload }) => {
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

export const addNewPostReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_NEW_POST:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const AddNewUpdatedPostReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_UPDATED_POST:
      return { ...state, ...payload };
    default:
      return state;
  }
};
