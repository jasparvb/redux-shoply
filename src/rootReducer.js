const INITIAL_STATE = {items: []};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [ ...state.items, { ...action.item }] };

    case "DELETE_ITEM":
      return { ...state, items: state.items.filter(item => item.id !== action.id)};

    default:
      return state;
  }
}

export default rootReducer;
