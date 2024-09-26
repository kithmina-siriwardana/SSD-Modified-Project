import React from 'react';

// This module is for testing purposes (checking html and css)
function ProoductTab() {
    return(
        <div className="ltn__product-tab-area ltn__product-gutter pt-115 pb-70">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title-area ltn__section-title-2 text-center">
                        <h1 className="section-title">Our Products</h1>
                    </div>
                    <div className="ltn__tab-menu ltn__tab-menu-2 ltn__tab-menu-top-right-- text-uppercase text-center">
                        <div className="nav">
                            <a className="active show" data-toggle="tab" href="#liton_tab_3_1">Product Group 1</a>
                            <a data-toggle="tab" href="#liton_tab_3_2" className="">Product Item 2</a>
                            <a data-toggle="tab" href="#liton_tab_3_3" className="">Product Item 3</a>
                            <a data-toggle="tab" href="#liton_tab_3_4" className="">Product Item 4</a>
                            <a data-toggle="tab" href="#liton_tab_3_5" className="">Product Item 5</a>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane fade active show" id="liton_tab_3_1">
                            <div className="ltn__product-tab-content-inner">
                                <div className="row ltn__tab-product-slider-one-active slick-arrow-1">
                                    
                                    <div className="col-lg-12">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/11.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">-19%</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                        <li className="review-total"> <a href="#"> (24)</a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Carrots Group Scal</a></h2>
                                                <div className="product-price">
                                                    <span>$32.00</span>
                                                    <del>$46.00</del>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/7.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Poltry Farm Meat</a></h2>
                                                <div className="product-price">
                                                    <span>$78.00</span>
                                                    <del>$85.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/12.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">-19%</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                        <li className="review-total"> <a href="#"> (24)</a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Carrots Group Scal</a></h2>
                                                <div className="product-price">
                                                    <span>$32.00</span>
                                                    <del>$46.00</del>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/8.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Orange Sliced Mix</a></h2>
                                                <div className="product-price">
                                                    <span>$150.00</span>
                                                    <del>$180.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/13.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Orange Fresh Juice</a></h2>
                                                <div className="product-price">
                                                    <span>$75.00</span>
                                                    <del>$92.00</del>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/9.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">-19%</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                        <li className="review-total"> <a href="#"> (24)</a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Carrots Group Scal</a></h2>
                                                <div className="product-price">
                                                    <span>$32.00</span>
                                                    <del>$46.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/14.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Poltry Farm Meat</a></h2>
                                                <div className="product-price">
                                                    <span>$78.00</span>
                                                    <del>$85.00</del>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/10.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Orange Fresh Juice</a></h2>
                                                <div className="product-price">
                                                    <span>$75.00</span>
                                                    <del>$92.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/15.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Fresh Butter Cake</a></h2>
                                                <div className="product-price">
                                                    <span>$150.00</span>
                                                    <del>$180.00</del>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/6.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">-19%</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                        <li className="review-total"> <a href="#"> (24)</a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Carrots Group Scal</a></h2>
                                                <div className="product-price">
                                                    <span>$32.00</span>
                                                    <del>$46.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/7.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Orange Sliced Mix</a></h2>
                                                <div className="product-price">
                                                    <span>$150.00</span>
                                                    <del>$180.00</del>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/11.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">-19%</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                        <li className="review-total"> <a href="#"> (24)</a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Carrots Group Scal</a></h2>
                                                <div className="product-price">
                                                    <span>$32.00</span>
                                                    <del>$46.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="liton_tab_3_2">
                            <div className="ltn__product-tab-content-inner">
                                <div className="row ltn__tab-product-slider-one-active slick-arrow-1">
                                    
                                    <div className="col-lg-12">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/16.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">-19%</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                        <li className="review-total"> <a href="#"> (24)</a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Carrots Group Scal</a></h2>
                                                <div className="product-price">
                                                    <span>$32.00</span>
                                                    <del>$46.00</del>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/10.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Poltry Farm Meat</a></h2>
                                                <div className="product-price">
                                                    <span>$78.00</span>
                                                    <del>$85.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/15.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">-19%</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                        <li className="review-total"> <a href="#"> (24)</a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Carrots Group Scal</a></h2>
                                                <div className="product-price">
                                                    <span>$32.00</span>
                                                    <del>$46.00</del>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/9.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Orange Sliced Mix</a></h2>
                                                <div className="product-price">
                                                    <span>$150.00</span>
                                                    <del>$180.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/14.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Orange Fresh Juice</a></h2>
                                                <div className="product-price">
                                                    <span>$75.00</span>
                                                    <del>$92.00</del>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/8.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">-19%</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                        <li className="review-total"> <a href="#"> (24)</a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Carrots Group Scal</a></h2>
                                                <div className="product-price">
                                                    <span>$32.00</span>
                                                    <del>$46.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/13.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Poltry Farm Meat</a></h2>
                                                <div className="product-price">
                                                    <span>$78.00</span>
                                                    <del>$85.00</del>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/10.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Orange Fresh Juice</a></h2>
                                                <div className="product-price">
                                                    <span>$75.00</span>
                                                    <del>$92.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/15.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Fresh Butter Cake</a></h2>
                                                <div className="product-price">
                                                    <span>$150.00</span>
                                                    <del>$180.00</del>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/6.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">-19%</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                        <li className="review-total"> <a href="#"> (24)</a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Carrots Group Scal</a></h2>
                                                <div className="product-price">
                                                    <span>$32.00</span>
                                                    <del>$46.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/7.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Orange Sliced Mix</a></h2>
                                                <div className="product-price">
                                                    <span>$150.00</span>
                                                    <del>$180.00</del>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/11.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">-19%</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                        <li className="review-total"> <a href="#"> (24)</a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Carrots Group Scal</a></h2>
                                                <div className="product-price">
                                                    <span>$32.00</span>
                                                    <del>$46.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="liton_tab_3_3">
                            <div className="ltn__product-tab-content-inner">
                                <div className="row ltn__tab-product-slider-one-active slick-arrow-1">
                                    
                                    <div className="col-lg-12">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/6.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">-19%</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                        <li className="review-total"> <a href="#"> (24)</a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Carrots Group Scal</a></h2>
                                                <div className="product-price">
                                                    <span>$32.00</span>
                                                    <del>$46.00</del>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/12.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Poltry Farm Meat</a></h2>
                                                <div className="product-price">
                                                    <span>$78.00</span>
                                                    <del>$85.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/8.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">-19%</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                        <li className="review-total"> <a href="#"> (24)</a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Carrots Group Scal</a></h2>
                                                <div className="product-price">
                                                    <span>$32.00</span>
                                                    <del>$46.00</del>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/15.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Orange Sliced Mix</a></h2>
                                                <div className="product-price">
                                                    <span>$150.00</span>
                                                    <del>$180.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/9.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Orange Fresh Juice</a></h2>
                                                <div className="product-price">
                                                    <span>$75.00</span>
                                                    <del>$92.00</del>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/11.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">-19%</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                        <li className="review-total"> <a href="#"> (24)</a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Carrots Group Scal</a></h2>
                                                <div className="product-price">
                                                    <span>$32.00</span>
                                                    <del>$46.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/14.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Poltry Farm Meat</a></h2>
                                                <div className="product-price">
                                                    <span>$78.00</span>
                                                    <del>$85.00</del>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/10.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Orange Fresh Juice</a></h2>
                                                <div className="product-price">
                                                    <span>$75.00</span>
                                                    <del>$92.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/15.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Fresh Butter Cake</a></h2>
                                                <div className="product-price">
                                                    <span>$150.00</span>
                                                    <del>$180.00</del>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/6.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">-19%</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                        <li className="review-total"> <a href="#"> (24)</a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Carrots Group Scal</a></h2>
                                                <div className="product-price">
                                                    <span>$32.00</span>
                                                    <del>$46.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/7.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Orange Sliced Mix</a></h2>
                                                <div className="product-price">
                                                    <span>$150.00</span>
                                                    <del>$180.00</del>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/11.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">-19%</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                        <li className="review-total"> <a href="#"> (24)</a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Carrots Group Scal</a></h2>
                                                <div className="product-price">
                                                    <span>$32.00</span>
                                                    <del>$46.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="liton_tab_3_4">
                            <div className="ltn__product-tab-content-inner">
                                <div className="row ltn__tab-product-slider-one-active slick-arrow-1">
                                    
                                    <div className="col-lg-12">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/3.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">-19%</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                        <li className="review-total"> <a href="#"> (24)</a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Carrots Group Scal</a></h2>
                                                <div className="product-price">
                                                    <span>$32.00</span>
                                                    <del>$46.00</del>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/5.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Poltry Farm Meat</a></h2>
                                                <div className="product-price">
                                                    <span>$78.00</span>
                                                    <del>$85.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/2.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">-19%</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                        <li className="review-total"> <a href="#"> (24)</a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Carrots Group Scal</a></h2>
                                                <div className="product-price">
                                                    <span>$32.00</span>
                                                    <del>$46.00</del>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/16.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Orange Sliced Mix</a></h2>
                                                <div className="product-price">
                                                    <span>$150.00</span>
                                                    <del>$180.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/6.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Orange Fresh Juice</a></h2>
                                                <div className="product-price">
                                                    <span>$75.00</span>
                                                    <del>$92.00</del>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/14.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">-19%</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                        <li className="review-total"> <a href="#"> (24)</a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Carrots Group Scal</a></h2>
                                                <div className="product-price">
                                                    <span>$32.00</span>
                                                    <del>$46.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/14.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Poltry Farm Meat</a></h2>
                                                <div className="product-price">
                                                    <span>$78.00</span>
                                                    <del>$85.00</del>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/10.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Orange Fresh Juice</a></h2>
                                                <div className="product-price">
                                                    <span>$75.00</span>
                                                    <del>$92.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/15.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Fresh Butter Cake</a></h2>
                                                <div className="product-price">
                                                    <span>$150.00</span>
                                                    <del>$180.00</del>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/6.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">-19%</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                        <li className="review-total"> <a href="#"> (24)</a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Carrots Group Scal</a></h2>
                                                <div className="product-price">
                                                    <span>$32.00</span>
                                                    <del>$46.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/7.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Orange Sliced Mix</a></h2>
                                                <div className="product-price">
                                                    <span>$150.00</span>
                                                    <del>$180.00</del>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/11.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">-19%</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                        <li className="review-total"> <a href="#"> (24)</a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Carrots Group Scal</a></h2>
                                                <div className="product-price">
                                                    <span>$32.00</span>
                                                    <del>$46.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="liton_tab_3_5">
                            <div className="ltn__product-tab-content-inner">
                                <div className="row ltn__tab-product-slider-one-active slick-arrow-1">
                                    <div className="col-lg-12">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/7.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">-19%</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                        <li className="review-total"> <a href="#"> (24)</a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Carrots Group Scal</a></h2>
                                                <div className="product-price">
                                                    <span>$32.00</span>
                                                    <del>$46.00</del>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/13.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Poltry Farm Meat</a></h2>
                                                <div className="product-price">
                                                    <span>$78.00</span>
                                                    <del>$85.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/5.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">-19%</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                        <li className="review-total"> <a href="#"> (24)</a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Carrots Group Scal</a></h2>
                                                <div className="product-price">
                                                    <span>$32.00</span>
                                                    <del>$46.00</del>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/15.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Orange Sliced Mix</a></h2>
                                                <div className="product-price">
                                                    <span>$150.00</span>
                                                    <del>$180.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/9.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Orange Fresh Juice</a></h2>
                                                <div className="product-price">
                                                    <span>$75.00</span>
                                                    <del>$92.00</del>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/14.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">-19%</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                        <li className="review-total"> <a href="#"> (24)</a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Carrots Group Scal</a></h2>
                                                <div className="product-price">
                                                    <span>$32.00</span>
                                                    <del>$46.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/12.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Poltry Farm Meat</a></h2>
                                                <div className="product-price">
                                                    <span>$78.00</span>
                                                    <del>$85.00</del>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/10.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Orange Fresh Juice</a></h2>
                                                <div className="product-price">
                                                    <span>$75.00</span>
                                                    <del>$92.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/15.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Fresh Butter Cake</a></h2>
                                                <div className="product-price">
                                                    <span>$150.00</span>
                                                    <del>$180.00</del>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/6.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">-19%</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                        <li className="review-total"> <a href="#"> (24)</a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Carrots Group Scal</a></h2>
                                                <div className="product-price">
                                                    <span>$32.00</span>
                                                    <del>$46.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/7.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Orange Sliced Mix</a></h2>
                                                <div className="product-price">
                                                    <span>$150.00</span>
                                                    <del>$180.00</del>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src={process.env.PUBLIC_URL+"/assets/img/product/11.png"} alt="#"/></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">-19%</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                        <li className="review-total"> <a href="#"> (24)</a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Carrots Group Scal</a></h2>
                                                <div className="product-price">
                                                    <span>$32.00</span>
                                                    <del>$46.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default ProoductTab;