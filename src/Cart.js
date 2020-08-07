import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProductButtons from "./ProductButtons";

function Cart() {
    const dispatch = useDispatch();
    const { cart, products } = useSelector(state => state);

    const itemRows = Object.keys(cartItems).map(id => (
        <tr key={id}>
          <td className="text-center align-middle">
            <Link to={`/products/${id}`}>{products[id].name}</Link>
          </td>
          <td className="text-center align-middle">${products[id].price}</td>
          <td className="text-center align-middle">{cartItems[id]}</td>
          <td>
            <ProductButtons id={id} />
          </td>
        </tr>
    ));
}

export default Cart;