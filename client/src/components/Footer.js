import React from 'react';

function Footer() {
    return (
        <footer class="ltn__footer-area  ">
            <div class="footer-top-area  section-bg-2 plr--5">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xl-3 col-md-6 col-sm-6 col-12">
                            <div class="footer-widget footer-about-widget">
                                <p>Contact US</p>
                                <div class="footer-address">
                                    <ul>
                                        <li>
                                            <div class="footer-address-icon">
                                                <i class="icon-placeholder"></i>
                                            </div>
                                            <div class="footer-address-info">
                                                <p>Jiffy, Sri Lanka</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="footer-address-icon">
                                                <i class="icon-call"></i>
                                            </div>
                                            <div class="footer-address-info">
                                                <p><a href="tel:+0123-456789">+94764101928</a></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="footer-address-icon">
                                                <i class="icon-mail"></i>
                                            </div>
                                            <div class="footer-address-info">
                                                <p><a href="mailto:example@example.com">info@jiffy.com</a></p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-md-6 col-sm-6 col-12">
                            <div class="footer-widget footer-menu-widget clearfix">
                                <h4 class="footer-title">Sitemap</h4>
                                <div class="footer-menu">
                                    <ul>
                                        <li><a href="about.html">Home</a></li>
                                        <li><a href="about.html">About</a></li>
                                        <li><a href="blog.html">Shop</a></li>
                                        <li><a href="contact.html">Contact us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-md-6 col-sm-6 col-12">
                            <div class="footer-widget footer-menu-widget clearfix">
                                <h4 class="footer-title">Customer Care</h4>
                                <div class="footer-menu">
                                    <ul>
                                        <li><a href="login.html">Login</a></li>
                                        <li><a href="wishlist.html">Signup</a></li>
                                        <li><a href="account.html">My account</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6 col-sm-12 col-12">
                            <div class="footer-widget footer-newsletter-widget">
                                <h4 class="footer-title">We Accept</h4>
                                <img src={process.env.PUBLIC_URL + "/assets/img/icons/payment-4.png"} alt="Payment Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ltn__copyright-area ltn__copyright-2 section-bg-2 ltn__border-top-2 plr--5">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-6 col-12">
                            <div class="ltn__copyright-design clearfix">
                                <p>All Rights Reserved @ Jiffy <span class="current-year"></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;