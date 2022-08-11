import { createStore } from "redux";
import rootReducer from "./reducer";

const configureStore = _ => createStore(rootReducer());

export default configureStore;