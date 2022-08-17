import { combineReducers } from "redux";
import authReducer from "../pages/login/state/auth.reducer";
import managerMenuReducer from "../pages/menuManager/state/manager.menu.reducer";

const rootReducer = _ => combineReducers({
   authReducer,
   managerMenuReducer
});

export default rootReducer;