import React from 'react';

function MainSlider() {
    return(
        <div className="ltn__slider-area ltn__slider-3  section-bg-1">
        <div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1 arrow-white">
            <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3 ltn__slide-item-3-normal text-color-white bg-image" data-bg={process.env.PUBLIC_URL+"assets/img/slider/11.jpg"}>
                <div className="ltn__slide-item-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 align-self-center">
                                <div className="slide-item-info">
                                    <div className="slide-item-info-inner ltn__slide-animation">
                                        <div className="slide-video mb-50 d-none">
                                            <a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/ATI7vfCgwXE?autoplay=1&showinfo=0" data-rel="lightcase:myCollection">
                                                <i className="fa fa-play"></i>
                                            </a>
                                        </div>
                                        <h6 className="slide-sub-title animated"><img src={process.env.PUBLIC_URL+"assets/img/icons/icon-img/1.png"} alt="#"/> 100% genuine Products</h6>
                                        <h1 className="slide-title animated ">Our Garden's  Most <br />   Favorite Food</h1>
                                        <div className="slide-brief animated">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                        </div>
                                        <div className="btn-wrapper animated">
                                            <a href="shop.html" className="theme-btn-1 btn btn-effect-1 text-uppercase">Explore Products</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3 ltn__slide-item-3-normal text-color-white bg-image" data-bg={process.env.PUBLIC_URL+"assets/img/slider/12.jpg"}>
                <div className="ltn__slide-item-inner  text-right">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 align-self-center">
                                <div className="slide-item-info">
                                    <div className="slide-item-info-inner ltn__slide-animation">
                                        <h6 className="slide-sub-title ltn__secondary-color animated">// TALENTED ENGINEER & MECHANICS</h6>
                                        <h1 className="slide-title animated ">Tasty & Healthy <br />  Organic Food</h1>
                                        <div className="slide-brief animated">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                        </div>
                                        <div className="btn-wrapper animated">
                                            <a href="shop.html" className="theme-btn-1 btn btn-effect-1 text-uppercase">Explore Products</a>
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

export default MainSlider;