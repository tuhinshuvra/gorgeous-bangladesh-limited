import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/logo/gbl-logo.png'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={Logo} alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active  fw-bold" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" to="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  fw-bold" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  fw-bold" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  fw-bold" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  fw-bold" to="/login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;