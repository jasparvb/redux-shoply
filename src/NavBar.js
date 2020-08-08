import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
    const { cartTotal } = useSelector(state => state);
    return (
        <nav className="navbar navbar-light bg-info">
        <Link to="/" className="navbar-brand text-light">
            SHOPLY!
        </Link>
        <ul className="navbar-nav flex-row">
            <li className="nav-item">
            <Link to="/cart" className="nav-link text-light">
                See Cart
            </Link>
            </li>
            <li className="nav-item nav-link mx-3">Total: ${cartTotal}</li>
        </ul>
        </nav>
    );
}

export default Navbar;
