import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import userReducer from "./user/userReducer";
import cartReducer from "./cart/cartReducer";
import storage from "redux-persist/lib/storage";
import directoryReducer from "./directory/directoryReducer";
import { shopReducer } from "./shop/shopReducer";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const rootReducer = combineReducers({
  user: userReducer, //slice of state
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
