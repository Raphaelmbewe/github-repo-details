import { combineReducers } from "redux";
import userReducer, { STATE_KEY as USER_STATE_KEY } from "./user";
import repoReducer, { STATE_KEY as REPO_STATE_KEY } from "./repo";

const appReducer = combineReducers({
  [USER_STATE_KEY]: userReducer,
  [REPO_STATE_KEY]: repoReducer,
});

export default appReducer;