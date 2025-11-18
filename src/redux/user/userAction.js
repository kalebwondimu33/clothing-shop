import { UserActionTypes } from "./user.type";
import userReducer from "./userReducer";
export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
