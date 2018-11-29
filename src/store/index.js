import { root } from "./root/root.reducer";
import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { userData } from "./userData/userData.reducer";
const rootReducer = combineReducers({
  root,
  userData,
  form: formReducer
});
export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
