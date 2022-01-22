import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import {
  addNewPostReducer,
  AddNewUpdatedPostReducer,
  GetAllPostsReducer,
  singlePostReducer,
} from "./Reducers/PostReducers";

const reducer = combineReducers({
  AllPosts: GetAllPostsReducer,
  singlepost: singlePostReducer,
  newPost: addNewPostReducer,
  upDatedPost: AddNewUpdatedPostReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
