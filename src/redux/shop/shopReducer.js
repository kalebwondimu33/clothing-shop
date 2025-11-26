import ShopActionTypes from "./shopTypes";
const INITAL_STATE = {
  collections: null,
};
export const shopReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};
