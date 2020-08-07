import React from "react";
import ProductButtons from "./ProductButtons";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function ProductDetails() {
    const { id } = useParams();
    const { image_url, name, price, description } = useSelector(state => ({
        ...state.products[id]
    }));
    
    return (
        <div className="row justify-content-center">
            <div className="col-md-4">
            <img
                className="ProductDetails-img card-img-top"
                src={image_url}
                alt={name}
            />
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h5>{name}</h5>
                    <p>${price}</p>
                </div>
                <p className="text-center">{description}</p>
                <ProductButtons id={id} />
            </div>
            <Link to="/" className="btn btn-block btn-link">
                Go back
            </Link>
            </div>
        </div>
    );
};
// end

export default ProductDetails;
