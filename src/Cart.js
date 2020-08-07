import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductButtons from "./ProductButtons";

function Cart() {
    const { products, cart } = useSelector(state => state);
    console.log(cart);
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
        <h2>No items in cart yet!</h2>
      ) : (
        <div className="Cart">
            <h2>Your Cart</h2>
            <table>
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
        </div>
    );
}

export default Cart;