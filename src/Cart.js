import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductButtons from "./ProductButtons";
import './Cart.css';

function Cart() {
    const { products, cart, cartTotal } = useSelector(state => state);
    const itemRows = Object.keys(cart).map(id => (
        <tr key={id}>
          <td className="text-center align-middle">
            <Link to={`/products/${id}`}>{products[id].name}</Link>
          </td>
          <td className="text-center align-middle">${products[id].price}</td>
          <td className="text-center align-middle">{cart[id]}</td>
          <td>
            <ProductButtons id={id} />
          </td>
        </tr>
    ));

    return itemRows.length === 0 ? (
        <h2 className="mt-3">No items in cart yet!</h2>
      ) : (
        <div className="Cart">
            <h2 className="mt-3">Your Cart</h2>
            <table className="Cart-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Add/Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {itemRows}
                </tbody>
            </table>
            <p className="my-3">Total: ${cartTotal}</p>
        </div>
    );
}

export default Cart;