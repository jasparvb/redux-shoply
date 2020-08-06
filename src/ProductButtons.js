import React from "react";
import { useDispatch } from "react-redux";


function ProductButtons({id}) {
  const dispatch = useDispatch();

  function removeItem() {
    dispatch({type: "REMOVE_ITEM", id });
  }

  function addItem() {
    dispatch({type: "ADD_ITEM", id});
  };
  
  return (
    <div className="d-flex justify-content-between">
      <i
        onClick={addItem}
        className="CartIcon fas fa-cart-plus fa-2x text-success"
      />
      <i
        onClick={removeItem}
        className="CartIcon fas fa-cart-arrow-down fa-2x text-danger"
      />
    </div>
  );
};
// end

export default ProductButtons;
