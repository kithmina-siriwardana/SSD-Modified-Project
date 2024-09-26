import React from 'react';

function CartMenu() {
    return (
        <div id="ltn__utilize-cart-menu" className="ltn__utilize ltn__utilize-cart-menu">
        <div className="ltn__utilize-menu-inner ltn__scrollbar">
            <div className="ltn__utilize-menu-head">
                <span className="ltn__utilize-menu-title">Cart</span>
                <button className="ltn__utilize-close">×</button>
            </div>
            <div className="mini-cart-product-area ltn__scrollbar">
                <div className="mini-cart-item clearfix">
                    <div className="mini-cart-img">
                        <a href="#"><img src={process.env.PUBLIC_URL+"/assets/img/product/1.png"} alt="Image"/></a>
                        <span className="mini-cart-item-delete"><i className="icon-cancel"></i></span>
                    </div>
                    <div className="mini-cart-info">
                        <h6><a href="#">Red Hot Tomato</a></h6>
                        <span className="mini-cart-quantity">1 x $65.00</span>
                    </div>
                </div>
                <div className="mini-cart-item clearfix">
                    <div className="mini-cart-img">
                        <a href="#"><img src={process.env.PUBLIC_URL+"/assets/img/product/2.png"} alt="Image"/></a>
                        <span className="mini-cart-item-delete"><i className="icon-cancel"></i></span>
                    </div>
                    <div className="mini-cart-info">
                        <h6><a href="#">Vegetables Juices</a></h6>
                        <span className="mini-cart-quantity">1 x $85.00</span>
                    </div>
                </div>
                <div className="mini-cart-item clearfix">
                    <div className="mini-cart-img">
                        <a href="#"><img src={process.env.PUBLIC_URL+"/assets/img/product/3.png"} alt="Image"/></a>
                        <span className="mini-cart-item-delete"><i className="icon-cancel"></i></span>
                    </div>
                    <div className="mini-cart-info">
                        <h6><a href="#">Orange Sliced Mix</a></h6>
                        <span className="mini-cart-quantity">1 x $92.00</span>
                    </div>
                </div>
                <div className="mini-cart-item clearfix">
                    <div className="mini-cart-img">
                        <a href="#"><img src={process.env.PUBLIC_URL+"/assets/img/product/4.png"} alt="Image"/></a>
                        <span className="mini-cart-item-delete"><i className="icon-cancel"></i></span>
                    </div>
                    <div className="mini-cart-info">
                        <h6><a href="#">Orange Fresh Juice</a></h6>
                        <span className="mini-cart-quantity">1 x $68.00</span>
                    </div>
                </div>
            </div>
            <div className="mini-cart-footer">
                <div className="mini-cart-sub-total">
                    <h5>Subtotal: <span>$310.00</span></h5>
                </div>
                <div className="btn-wrapper">
                    <a href="cart.html" className="theme-btn-1 btn btn-effect-1">View Cart</a>
                    <a href="cart.html" className="theme-btn-2 btn btn-effect-2">Checkout</a>
                </div>
            </div>

        </div>
    </div>
    );
}

export default CartMenu;