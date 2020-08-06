import data from './data.json';
import { ADD_ITEM, REMOVE_ITEM } from "./actionTypes";

const INITIAL_STATE = {products: data.products, cart: {}};

function rootReducer(state = INITIAL_STATE, action) {
  const cartCopy = { ...state.cart };
  switch (action.type) {
    case ADD_ITEM:
      cartCopy[action.id] = (cartCopy[action.id] || 0) + 1;
      return { ...state, cart: cartCopy };

    case REMOVE_ITEM:
      if (!cartCopy[action.id]) {
        return state;
      }
      cartCopy[action.id]--;
      if(!cartCopy[action.id]) {
        delete cartCopy[action.id];
      }
      return { ...state, cart: cartCopy };

    default:
      return state;
  }
}

export default rootReducer;
