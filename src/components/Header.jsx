
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div class="navbar">
                <div class="nav-logo">
                    <Link to={'/logo'}>LOGO</Link>
                </div>
                <div class="nav-items">
                    <ul>
                        <li>  <Link to={'/'}>Home</Link></li>
                        <li><Link to={'/services'}> Services</Link>  </li>
                        <li><Link to={'/about'}> About </Link>  </li>
                        <li><Link to={'/contact'}> Contact </Link>  </li>
                    </ul>
                </div>
                <div class="nav-button">
                    <div class="anim-layer"></div>
                    <Link to={'/register'}>Sign up</Link>
                </div>
                <div id="hamburger-menu">&#9776;</div>
            </div>

            <div id="mobile-menu">
                <div class="mobile-nav-items">
                    <ul>
                        <li>  <Link to={'/'}>Home</Link></li>
                        <li><Link to={'/services'}> Services</Link>  </li>
                        <li><Link to={'about/'}> About </Link>  </li>
                        <li><Link to={'/contact'}> Contact </Link>  </li>

                    </ul>
                </div>
                <div class="mobile-nav-button">
                    <div class="anim-layer"></div>
                    <Link to={'/register'}>Sign up</Link>
                </div>
                <div id="hamburger-cross">&#10006;</div>
            </div>
        </>
    );
};

export default Header;