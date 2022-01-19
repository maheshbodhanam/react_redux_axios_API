import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import GetSinglePost from "./Containers/GetSinglePost";
import { PostReducers, singlePostReducer } from "./Reducers/PostReducers";

const reducer = combineReducers({
  AllPosts: PostReducers,
  singlepost: singlePostReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
