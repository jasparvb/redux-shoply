import React from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from './actions';
import './ProductButtons.css'

function ProductButtons({id}) {
  const dispatch = useDispatch();

  const removeCartItem = () => {
    dispatch(removeItem(id));
  }

  const addCartItem = () => {
    dispatch(addItem(id));
  };
  
  return (
    <div className="d-flex justify-content-between">
      <i
        onClick={addCartItem}
        className="ProductButtons fas fa-cart-plus fa-2x text-success"
      />
      <i
        onClick={removeCartItem}
        className="ProductButtons fas fa-cart-arrow-down fa-2x text-danger"
      />
    </div>
  );
};
// end

export default ProductButtons;
