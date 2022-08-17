import { GET_ALL_MENU } from "../../../apps/action.constants";

export const reqMenuData = (reqData) => ({
   type: GET_ALL_MENU,
   data: reqData
})