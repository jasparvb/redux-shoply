import React from "react";
import ProductButtons from "./ProductButtons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function ProductList() {
    const products = useSelector(state => state.products);
    const productCards = Object.keys(products).map(id => (
        <div className="col-md-3 mb-3" key={id}>
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">
                <Link to={`/products/${id}`}>{products[id].name}</Link>
              </h2>
              <ProductButtons id={id} />
            </div>
          </div>
        </div>
    ));
       
    return (
        <div className="ProductList">{productCards}</div>
    );
};
// end

export default ProductList;
