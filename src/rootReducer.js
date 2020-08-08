import data from './data.json';
import { ADD_ITEM, REMOVE_ITEM } from "./actionTypes";
import { cartTotal } from './helpers';

const INITIAL_STATE = {products: data.products, cart: {}, cartTotal: 0};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_ITEM: {
      const cartCopy = { ...state.cart };
      cartCopy[action.id] = (cartCopy[action.id] || 0) + 1;
      return { ...state, cart: cartCopy, cartTotal: cartTotal(state.products, cartCopy)};
    }
      
    case REMOVE_ITEM: {
      const cartCopy = { ...state.cart };
      if (!cartCopy[action.id]) {
        return state;
      }
      cartCopy[action.id]--;
      if(!cartCopy[action.id]) {
        delete cartCopy[action.id];
      }
      return { ...state, cart: cartCopy, cartTotal: cartTotal(state.products, cartCopy)};
    }

    default:
      return state;
  }
}

export default rootReducer;
