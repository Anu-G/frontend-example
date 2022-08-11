import { combineReducers } from "redux";
import authReducer from "../pages/login/state/auth.reducer";

const rootReducer = _ => combineReducers({
   authReducer
});

export default rootReducer;