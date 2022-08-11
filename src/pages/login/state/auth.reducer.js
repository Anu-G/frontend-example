import { USER_LOGIN, USER_LOGOUT } from "../../../apps/action.constants";


const initAuthState = {
   email: '',
   token: '',
   role: ''
}

function authReducer(state = initAuthState, action) {
   switch (action.type) {
      case USER_LOGIN:
         return Object.assign({}, state, {
            email: action.data.email,
            token: action.data.token,
            role: action.data.role
         })
      case USER_LOGOUT:
         return Object.assign({}, state, {
            email: '',
            token: '',
            role: ''
         })
      default:
         return state;
   }
}

export default authReducer;