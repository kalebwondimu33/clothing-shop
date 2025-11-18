import CartType from "./CartType";
const INITIAL_STATE = {
  hidden: true,
};
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartType.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default cartReducer;
