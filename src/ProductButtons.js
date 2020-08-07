import React from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from './actions';

function ProductButtons({id}) {
  const dispatch = useDispatch();

  function removeCartItem() {
    dispatch(removeItem(id));
  }

  function addCartItem() {
    dispatch(addItem(id));
  };
  
  return (
    <div className="d-flex justify-content-between">
      <i
        onClick={addCartItem}
        className="CartIcon fas fa-cart-plus fa-2x text-success"
      />
      <i
        onClick={removeCartItem}
        className="CartIcon fas fa-cart-arrow-down fa-2x text-danger"
      />
    </div>
  );
};
// end

export default ProductButtons;
