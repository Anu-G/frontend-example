import { USER_LOGIN, USER_LOGOUT } from "../../../apps/action.constants"



export const userLoginAction = (reqData) => ({
   type: USER_LOGIN,
   data: reqData
})

export const userLogoutAction = _ => ({
   type: USER_LOGOUT
})