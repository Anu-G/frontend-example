import { GET_ALL_MENU } from "../../../apps/action.constants";

const initManagerMenuState = {
   listMenu: []
}

function managerMenuReducer(state = initManagerMenuState, action) {
   switch (action.type) {
      case GET_ALL_MENU:
         return Object.assign({}, state, {
            listMenu: action.data
         })
      default:
         return state;
   }
}

export default managerMenuReducer;