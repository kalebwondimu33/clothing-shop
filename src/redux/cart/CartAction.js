import CartType from "./CartType";

export const toggleCartHidden = () => ({
  type: CartType.TOGGLE_CART_HIDDEN,
});
export const addItem = (item) => ({
  type: CartType.ADD_ITEM,
  payload: item,
});
