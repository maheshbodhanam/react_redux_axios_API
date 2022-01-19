import { ActionTypes } from "../Constants/ActionTypes";

export const GET_ALL_POSTS = (posts) => {
  return {
    type: ActionTypes.GET_ALL_POSTS,
    payload: posts,
  };
};

export const GET_SINGLE_POST = (posts) => {
  return {
    type: ActionTypes.GET_SINGLE_POST,
    payload: posts,
  };
};

export const ADD_NEW_POST = (posts) => {
  return {
    type: ActionTypes.ADD_NEW_POST,
    payload: posts,
  };
};

export const ADD_UPDATED_POST = (posts) => {
  return {
    type: ActionTypes.ADD_UPDATED_POST,
    payload: posts,
  };
};
