import React from 'react';

function MobileMenu() {
    return (
        <div id="ltn__utilize-mobile-menu" className="ltn__utilize ltn__utilize-mobile-menu">
        <div className="ltn__utilize-menu-inner ltn__scrollbar">
            <div className="ltn__utilize-menu-head">
                <div className="site-logo">
                    <a href="index.html"><img src={process.env.PUBLIC_URL+"/assets/img/logo.png"} alt="Logo"/></a>
                </div>
                <button className="ltn__utilize-close">×</button>
            </div>
            <div className="ltn__utilize-menu-search-form">
                <form action="#">
                    <input type="text" placeholder="Search..."/>
                    <button><i className="fas fa-search"></i></button>
                </form>
            </div>
            <div className="ltn__utilize-menu">
                <ul>
                    <li><a href="#">Home</a>
                        
                    </li>
                    <li><a href="#">About</a>
                        
                    </li>
                    <li><a href="#">Shop</a>
                    
                    </li>
                
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="ltn__utilize-buttons ltn__utilize-buttons-2">
                <ul>
                    <li>
                        <a href="account.html" title="My Account">
                            <span className="utilize-btn-icon">
                                <i className="far fa-user"></i>
                            </span>
                            My Account
                        </a>
                    </li>
                    <li>
                        <a href="wishlist.html" title="Wishlist">
                            <span className="utilize-btn-icon">
                                <i className="far fa-heart"></i>
                                <sup>3</sup>
                            </span>
                            Wishlist
                        </a>
                    </li>
                    <li>
                        <a href="cart.html" title="Shoping Cart">
                            <span className="utilize-btn-icon">
                                <i className="fas fa-shopping-cart"></i>
                                <sup>5</sup>
                            </span>
                            Shoping Cart
                        </a>
                    </li>
                </ul>
            </div>
            <div className="ltn__social-media-2">
                <ul>
                    <li><a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#" title="Linkedin"><i className="fab fa-linkedin"></i></a></li>
                    <li><a href="#" title="Instagram"><i className="fab fa-instagram"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
    );
}

export default MobileMenu;